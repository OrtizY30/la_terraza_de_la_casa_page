import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
import { calcularTotalPedido, formatCurrency } from "../helpes";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Fade,
  Modal,
  Paper,
} from "@mui/material";
import { ExpandMore, ShoppingBag } from "@mui/icons-material";
import BackDrop from "./BackDrop";
import ModalSucces from "./ModalSucces";
const adicionales = [
  {
    adicion: "Roast beef",
    precio: 22000,
  },
  {
    adicion: "pernil",
    precio: 18000,
  },
  {
    adicion: "pollo",
    precio: 18000,
  },
  {
    adicion: "lomito",
    precio: 20000,
  },
  {
    adicion: "salmón",
    precio: 24000,
  },
  {
    adicion: "pastrami",
    precio: 22000,
  },
  {
    adicion: "chorizo",
    precio: 22000,
  },
  {
    adicion: "pepperoni",
    precio: 22000,
  },
  {
    adicion: "pavo",
    precio: 22000,
  },
  {
    adicion: "Prosciutto",
    precio: 22000,
  },
];

const ModalOptions = ({ item, handleModal, handleClose, open }) => {
  const { agregarAlCarrito } = useContext(AppContext);
  const [pedido, setPedido] = useState({
    id: uuidv4(),
    imagen: item.img,
    nombre: item.nombre,
    precio: item.precioFull,
    pan: "",
    tamaño: "",
    opcion: "",
    adicionales: [],
    observacion: "",
  });

  const [error, setError] = useState({
    alert: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, id } = e.target;
    if (type === "checkbox") {
      setPedido((prevPedido) => {
        const newAdicionales = checked
          ? [
              ...prevPedido.adicionales,
              { adicion: id, precio: parseInt(value) },
            ]
          : prevPedido.adicionales.filter(
              (adicional) => adicional.adicion !== id
            );
        return { ...prevPedido, adicionales: newAdicionales };
      });
    } else {
      setPedido({ ...pedido, [name]: value });
    }
  };

  const handleTamañoChange = (e) => {
    const selectedTamaño = e.target.value;

    const selectedOptionObj = item.tamaño.find(
      (option) => option.tamaño === selectedTamaño
    );
    const selectedValue = selectedOptionObj.precio;

    setPedido({ ...pedido, tamaño: selectedTamaño, precio: selectedValue });
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setPedido({ ...pedido, opcion: selectedOption });
  };

  const isValidPan =
    item.categoria === "sandwich" || item.categoria === "gourmet";

  const isValidBebida = item.categoria === "bebidas";

  const handleSubmit = () => {
    if (
      pedido.pan === "" &&
      isValidPan &&
      item.nombre !== "cochinito" &&
      item.nombre !== "montecristo" &&
      item.nombre !== "sandwich combinado (PAN MOLDE)"
    ) {
      setError({
        alert: "error",
        message: "Selecciona un tipo de pan",
      });

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else if (isValidBebida && pedido.opcion === "") {
      setError({
        alert: "error",
        message: "Selecciona una opción",
      });

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else if (
      pedido.tamaño === "" &&
      isValidPan &&
      item.nombre !== "cochinito"
    ) {
      setError({
        alert: "error",
        message: "¿Deseas el sandwich entero o mediano?",
      });

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else if (pedido.tamaño === "" && item.categoria === "ensaladas") {
      setError({
        alert: "error",
        message: "Elige el tamaño de tu ensalada",
      });

      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    setError("");
    agregarAlCarrito(pedido); // Aquí manejarías la lógica para agregar el pedido al carrito o algo similar

    // Ativar modal backdrop
    handleOpenBackdrop();

    setTimeout(() => {
      handleCloseBackdrop();
      handleOpenSucces();
    }, 1500);
    setTimeout(() => {
      handleModal(); // Cerrar modal después de enviar el pedido
      handleClose();
      handleCloseSucces();
    }, 3500);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  // Funciones y estados para activar el backdrop
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };

  const [openSucces, setOpenSucces] = React.useState(false);
  const handleOpenSucces = () => setOpenSucces(true);
  const handleCloseSucces = () => setOpenSucces(false);
  return (
    <>
      <BackDrop open={openBackdrop} />
      {openSucces && (
        <Modal
          open={openSucces}
          onClose={handleCloseSucces}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalSucces>
            {"Haz añadido un nuevo producto a tu carrito"}
          </ModalSucces>
        </Modal>
      )}

      <div className="overflow-y-scroll scrollbar-hidden max-w-md dark:bg-customDark dark:text-white">
        <div className="flex flex-col gap-2 pb-16 border-t-2">
          {error.message && (
            <div className=" mx-1 mt-2">
              <Alert
                sx={{ color: "white" }}
                variant="filled"
                severity={error.alert}
              >
                {error.message}
              </Alert>
            </div>
          )}
          {/* Opciones para sandwches y ensaladas */}
          <div>
            {isValidPan &&
            item.nombre !== "cochinito" &&
            item.nombre !== "montecristo" &&
            item.nombre !== "sandwich combinado (PAN MOLDE)" ? (
              <div className="mt-6 px-4 max-w-md mx-auto">
                <p className="font-bold dark:text-white ml-3">
                  Elige un Tipo de pan :
                </p>

                <label
                  className={`${
                    pedido.pan === "gluten"
                      ? "dark:bg-neutral-900 bg-gray-400"
                      : "dark:bg-gray-600 bg-gray-200"
                  } flex gap-2  my-2 p-3 rounded-lg capitalize dark:text-white`}
                >
                  <input
                    type="radio"
                    name="pan"
                    value="gluten"
                    checked={pedido.pan === "gluten"}
                    onChange={handleInputChange}
                  />
                  <p>Gluten</p>
                </label>

                <label
                  className={`${
                    pedido.pan === "quinua"
                      ? "dark:bg-neutral-900 bg-gray-400"
                      : "dark:bg-gray-600 bg-gray-200"
                  } flex gap-2  my-2 p-3 rounded-lg capitalize dark:text-white cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="pan"
                    value="quinua"
                    checked={pedido.pan === "quinua"}
                    onChange={handleInputChange}
                  />
                  <p>Quinúa</p>
                </label>

                <label
                  className={`${
                    pedido.pan === "frances"
                      ? "dark:bg-neutral-900 bg-gray-400"
                      : "dark:bg-gray-600 bg-gray-200"
                  } flex gap-2  my-2 p-3 rounded-lg capitalize dark:text-white cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="pan"
                    value="frances"
                    checked={pedido.pan === "frances"}
                    onChange={handleInputChange}
                  />
                  <p>francés</p>
                </label>

                <label
                  className={`${
                    pedido.pan === "molde"
                      ? "dark:bg-neutral-900 bg-gray-400"
                      : "dark:bg-gray-600 bg-gray-200"
                  } flex gap-2  my-2 p-3 rounded-lg capitalize dark:text-white cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="pan"
                    value="molde"
                    checked={pedido.pan === "molde"}
                    onChange={handleInputChange}
                  />
                  <p>molde</p>
                </label>
              </div>
            ) : (
              ""
            )}
          </div>

          <div>
            {(item.categoria === "sandwich" ||
              item.categoria === "ensaladas" ||
              item.categoria === "gourmet") &&
            item.nombre !== "cochinito" ? (
              <div className="flex flex-col gap-2 px-4">
                <p className="font-bold p-3">Tamaño:</p>
                {item.tamaño.map((option, index) => (
                  <label
                    key={index}
                    className={`${
                      pedido.tamaño === option.tamaño
                        ? "dark:bg-neutral-900 bg-gray-400"
                        : "dark:bg-gray-600 bg-gray-200"
                    } flex gap-2  my-1 p-3 rounded-lg capitalize dark:text-white`}
                  >
                    <input
                      type="radio"
                      name="tamaño"
                      value={option.tamaño}
                      checked={pedido.tamaño === option.tamaño}
                      onChange={handleTamañoChange}
                    />
                    <div className="flex justify-between w-full">
                      <p className="ml-4">{option.tamaño}</p>-{" "}
                      <p className="mr-4">{formatCurrency(option.precio)}</p>
                    </div>
                  </label>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          <div>
            {(item.categoria === "sandwich" ||
              item.categoria === "ensaladas" ||
              item.categoria === "gourmet") &&
            item.nombre !== "cochinito" &&
            item.nombre !== "montecristo" ? (
              <div className=" ">
                <Accordion
                  className="dark:bg-customDark"
                  expanded={expanded}
                  onChange={handleExpansion}
                  slots={{ transition: Fade }}
                  slotProps={{ transition: { timeout: 400 } }}
                  sx={{
                    "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                    "& .MuiAccordionDetails-root": {
                      display: expanded ? "block" : "none",
                    },
                    "& .MuiPaper-root": { boxShadow: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore className="dark:text-white" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <p className="font-bold dark:text-white ml-3">
                      Adicionales:
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    {adicionales.map((adicion, i) => (
                      <label
                        key={i}
                        className={`${
                          pedido.adicionales.some(
                            (ad) => ad.adicion === adicion.adicion
                          )
                            ? "dark:bg-neutral-900 bg-gray-500"
                            : "dark:bg-gray-600 bg-gray-200"
                        } flex py-3 capitalize my-2 p-2 rounded-lg `}
                      >
                        <input
                          className="cursor-pointer"
                          type="checkbox"
                          name="adicionales"
                          id={adicion.adicion}
                          value={adicion.precio}
                          onChange={handleInputChange}
                        />
                        <div className="flex justify-between w-full dark:text-white">
                          <p className="ml-4">{adicion.adicion}</p>-
                          <p className="mr-4">
                            {formatCurrency(adicion.precio)}
                          </p>
                        </div>
                      </label>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            ) : null}
          </div>

          {/* Opciones para bebidas */}

          <div>
            {item.categoria === "bebidas" ? (
              <div className="flex flex-col gap-2">
                <Accordion
                  className="dark:bg-customDark"
                  expanded={expanded}
                  onChange={handleExpansion}
                  slots={{ transition: Fade }}
                  slotProps={{ transition: { timeout: 400 } }}
                  sx={{
                    "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                    "& .MuiAccordionDetails-root": {
                      display: expanded ? "block" : "none",
                    },
                    "& .MuiPaper-root": { boxShadow: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore className="dark:text-white" />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <p className="font-bold dark:text-white">
                      Elige una opción:{" "}
                    </p>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.opciones.map((option, index) => (
                      <label
                        key={index}
                        className={`${
                          pedido.opcion === option
                            ? "dark:bg-neutral-900 bg-gray-500"
                            : "dark:bg-gray-600 bg-gray-200"
                        } flex gap-2  my-2 p-3 rounded-lg capitalize dark:text-white`}
                      >
                        <input
                          type="radio"
                          name="opcion"
                          value={option}
                          checked={pedido.opcion === option}
                          onChange={handleOptionChange}
                        />
                        {option}
                      </label>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            ) : null}
          </div>
          <div className="p-2 ">
            <label className="flex flex-col">
              <p className="font-bold p-1">Observaciones:</p>
              <textarea
                className="p-1 rounded-lg text-black bg-neutral-100"
                name="observacion"
                defaultValue={pedido.observacion}
                onChange={handleInputChange}
                placeholder="Ej. Sin verduras, bien tostado, sin salsas, sin azúcar "
              />
            </label>
          </div>

          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: "transparent",
            }}
            elevation={3}
            className=" rounded-t-xl"
          >
            <div className="max-w-md mx-auto flex dark:bg-neutral-900 dark:text-white bg-[#fbfbfb] justify-between gap-2  rounded-t-2xl pr-3 py-2">
              <div className="w-[80%] flex flex-col items-center justify-center">
                <p className="font-extrabold  text-2xl">
                  {formatCurrency(calcularTotalPedido(pedido))}
                </p>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-green-700 flex justify-center text-lg gap-4 items-center p-2 rounded-r-3xl rounded-bl-3xl w-full font-bold  text-white"
              >
                <ShoppingBag sx={{ fontSize: 30 }} />
                Aceptar Pedido
              </button>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default ModalOptions;
