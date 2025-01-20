import React, { useContext, useEffect, useState } from "react";
import {
  calcularTotalCarrito,
  calcularTotalPedido,
  capitalizeFirstLetter,
  formatCurrency,
} from "../helpers";
import { AppContext } from "../context/AppContext";
import { Card, Modal } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const ModalOrder = ({ setShowModaOrder }) => {
  const { carrito } = useContext(AppContext);
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
    observacion: "",
    telefono: "",
    metodo: "",
  });
  const [error, setError] = useState({
    alert: "",
    message: "",
  });
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [alertSucces, setalArtSucces] = useState(false);

  useEffect(() => {
    if (whatsappUrl) {
      window.location.href = whatsappUrl;
      // window.open(whatsappUrl, "_blank");

      setShowModaOrder(false);
      localStorage.removeItem("carrito");
      setalArtSucces(false);
      setTimeout(() => {
        window.location.reload();
        setWhatsappUrl("");
      }, 500);
    }
  }, [whatsappUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleOrder = () => {
    // Validar que todos los campos de user estén rellenados
    const requiredFields = [
      "nombre",
      "direccion",
      "telefono",
      "metodo",
      "observacion",
    ];
    const missingFields = requiredFields.filter(
      (field) => !user[field] || user[field].trim() === ""
    );

    if (missingFields.length > 0) {
      setError({
        alert: "error",
        message: `Por favor, rellena todos los campos: ${missingFields.join(
          ", "
        )}`,
      });

      setTimeout(() => {
        setError("");
      }, 2500);
      return;
    }

    const orderDetails = carrito
      .map((item) => {
        // Verificar si `item.adicionales` es un array
        const adicionales = Array.isArray(item.adicionales)
          ? item.adicionales
          : [];

        // Formatear los adicionales en una cadena de texto
        const adicionalesTexto =
          adicionales.length > 0
            ? adicionales
                .map(
                  (ad) =>
                    `* ${capitalizeFirstLetter(ad.adicion)} - ${formatCurrency(
                      ad.precio
                    )}`
                )
                .join("\n")
            : "";

        return `*${capitalizeFirstLetter(
          item.nombre
        )}* - ${capitalizeFirstLetter(item.tamaño)} ${capitalizeFirstLetter(
          item.opcion
        )}\n   x 1 - *${formatCurrency(item.precio)}*${
          item.pan ? `\n\nPan: *${capitalizeFirstLetter(item.pan)}*` : ""
        }${
          item.adicionales.length > 0
            ? `\n\nAdicionales:\n${adicionalesTexto}`
            : ""
        }${
          item.observacion
            ? `\n\nObservación: *${capitalizeFirstLetter(
                item.observacion.trim()
              )}*`
            : ""
        }\n\nSubtotal: *${formatCurrency(
          calcularTotalPedido(item)
        )}*\n-----------------------------------------\n`;
      })
      .join("");

    const message = `Hola, deseo realizar un pedido.\n\nCliente: *${user.nombre.trim()}*\nDirección: *${user.direccion.trim()}*\nObservación: *${user.observacion.trim()}*\nTlf: ${user.telefono.trim()}\nMétodo de pago: *${user.metodo.trim()}*\n\n-----------------------------------------\n${orderDetails}\nTotal a pagar:  *${formatCurrency(
      calcularTotalCarrito(carrito)
    )}*\n\n*El valor del total a pagar no incluye el costo del domicilio.* `;

    const phoneNumber = "3117164854"; // Reemplaza con el número de teléfono del restaurante en formato internacional

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    if (whatsappLink !== "") {
      setalArtSucces(true);
    }
    setTimeout(() => {
      setWhatsappUrl(whatsappLink);
      setalArtSucces(false);
    }, 3000);
  };

  // const finalizaeOrden = () => {
  //   setTimeout(() => {
  //     setalArtSucces(false);
  //     setShowModaOrder(false);
  //     localStorage.removeItem("carrito");
  //     window.location.reload();
  //   }, 1000);
  // };

  return (
    <div className=" my-6 flex flex-col gap-2 max-w-md mx-auto overflow-hidden p-2">
      {/* Modal de error algun error */}

      <Modal open={error.message} className="relative">
        <Card
          sx={{
            color: "white",
            top: "30%",
            position: "absolute",
            right: "0%",
            left: "0%",
            borderRadius: 4,
            width: 390,
          }}
          className="px-2 py-6 pb-12 mx-auto"
        >
          <p className="text-center">
            <ErrorOutline sx={{ fontSize: 70 }} className="text-red-700 m-3 animate-pulse" />
          </p>
          <p className="text-red-700 text-xl text-center">{error.message}</p>
        </Card>
      </Modal>

      {/* Modal del enviar finalizar el pedido */}

      <Modal open={alertSucces} onClose={alertSucces} className="relative">
        <Card
          sx={{
            color: "white",
            top: "30%",
            position: "absolute",
            right: "0%",
            left: "0%",
            borderRadius: 4,
            width: 390,
          }}
          className=" mx-auto flex flex-col justify-between p-4 gap-4"
        >
          <p className="text-lg text-center text-green-700">
            ¡Gracias por tu pedido! Estás a punto de ser redirigido a nuestro
            WhatsApp para finalizar tu orden.
          </p>
          <i
            aria-hidden="true"
            // className="v-icon notranslate linktree fa fa-brands fa-whatsapp text-center   text-7xl text-green-500"
            className="fa-brands fa-whatsapp text-center text-7xl text-green-500 animate-pulse"
          ></i>
        </Card>
      </Modal>

      <h2 className="text-white font-bold text-center text-3xl md:text-4xl uppercase ">
        Ingrese sus Datos
      </h2>
      <div className="flex flex-col">
        <label htmlFor="nombre" className="text-white font-bold">
          Nombre :
        </label>
        <input
          className="p-2 rounded-lg bg-gray-200 "
          name="nombre"
          type="text"
          placeholder="Ingrese su nombre"
          defaultValue={user.nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="direccion" className="text-white font-bold">
          Dirección :
        </label>
        <input
          className="p-2 rounded-lg bg-gray-200"
          name="direccion"
          type="text"
          placeholder="Ingrese su dirección"
          defaultValue={user.direccion}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="observacion" className="text-white font-bold">
          Observación :
        </label>
        <textarea
          className="p-2 rounded-lg bg-gray-200"
          name="observacion"
          placeholder="Ej. Casa Blanca, llamar antes de llegar"
          defaultValue={user.observacion}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="telefono" className="text-white font-bold">
          Teléfono :
        </label>
        <input
          className="p-2 rounded-lg bg-gray-200"
          name="telefono"
          type="text"
          placeholder="Ingrese su número celular"
          defaultValue={user.telefono}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="metodo" className="text-white font-bold">
          {" "}
          Método de Pago :
        </label>
        <input
          className="p-2 rounded-lg bg-gray-200"
          name="metodo"
          type="text"
          placeholder="Ingrese el método de pago. Ej. Efectivo"
          defaultValue={user.metodo}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="text-white bg-green-700 rounded-lg items-center mt-2 flex flex-row  justify-center w-full font-bold p-1  hover:bg-green-500 transition-all duration-500 ease-in-out hover:scale-[1.02]"
        onClick={handleOrder}
      >
        <img src="img/ws-logo.webp" alt="" width={50} />
        <p>Enviar pedido al WhatsApp</p>
      </button>
    </div>
  );
};

export default ModalOrder;
