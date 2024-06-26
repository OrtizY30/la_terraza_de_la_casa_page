import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Fab,
  Modal,
} from "@mui/material";
import imagen from "/img/logo.webp";
import ModalOptions from "./ModalOptions";
import { Favorite } from "@mui/icons-material";
import { formatCurrency } from "../helpes";

export const CardMenu = ({ item, id }) => {
  const { togleFav, fav } = useContext(AppContext);

  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isFa = fav.includes(item);

  const { nombre, ingredientes, precioFull, precioMedio, img } = item;

  return (
    <>
      <div
        className="cursor-pointer rounded-sm border-b-2 mx-3 py-6 flex gap-2 justify-end hover:scale-[1.05] transition-all duration-500"
        id={id}
        onClick={() => {
          setModal(true);
          handleOpen();
        }}
      >
        <img
          key={id}
          src={img ? "/img/" + img : imagen}
          sizes="(max-width: 320px) 280px, 
          (max-width: 640px) 600px, 
          (max-width: 1280px) 1200px,
          1920px"
          loading="lazy"
          className=" w-24 h-20 object-cover rounded-lg shadow shadow-gray-400  "
          alt="imagen representativa del menu"
        />

        <div className="flex-1 flex justify-between flex-col h-full w-full">
          <h2 className="text-xl font-semibold capitalize dark:text-white ">
            {nombre}
          </h2>

          <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-2 font-sans pr-6 capitalize">
            {ingredientes}
          </p>

          <button
            className="bg-customRed rounded-l-3xl rounded-br-3xl px-2 p-1 text-xs w-10 text-white hover:bg-red-700 transition-all ease-in-out duration-500"
            onClick={() => setSelectedId(nombre)}
          >
            ver
          </button>
        </div>
      </div>

      <>
        {modal && (
          <Modal
            open={open}
            onClose={handleClose}
            className="absolute flex w-full top-0 bottom-0 left-0 right-0 bg-black/70 justify-center items-center z-[100] h-full overflow-y-scroll py-4"
            id={id}
          >
            <Card
              sx={{ borderRadius: 2 }}
              className="bg-white rounded-md w-full relative flex flex-col gap-1 sm:ml-3 max-w-md dark:bg-customDark"
            >
              <div className="relative w-full">
                <CardMedia
                  sizes="(max-width: 320px) 280px, 
                (max-width: 640px) 600px, 
                (max-width: 1280px) 1200px,
                1920px"
                  loading="lazy"
                  component="img"
                  image={img ? "/img/" + img : imagen}
                  alt="imagen representativa del menu"
                />

                <div className="absolute z-10 top-2 mx-2 left-0 right-0 flex justify-between p-1">
                  <button>
                    <Fab size="medium" onClick={handleClose}>
                      <i className="fa-solid fa-arrow-left text-2xl transition-all duration-100 hover:scale-105 text-black"></i>
                    </Fab>
                  </button>
                  <button onClick={() => togleFav(item)}>
                    <Fab
                      color={isFa ? "error" : "white"}
                      size="medium"
                      aria-label="like"
                    >
                      <Favorite />
                    </Fab>
                  </button>
                </div>
              </div>
              <CardContent>
                <div className="w-full space-y-3">
                  <p className="text-2xl font-[900] capitalize md:text-2xl dark:text-white">
                    {nombre}
                  </p>

                  <p className="text-md text-justify font-normal capitalize w-full text-gray-500 dark:text-gray-300">
                    {ingredientes}
                  </p>
                  <div className="flex w-full justify-between">
                    <div className="flex justify-between items-center flex-col">
                      <p className="font-bold text-xl text-customRed">
                        Precio{" "}
                      </p>
                      <p className="text-xl font-bold dark:text-white ">
                        {" "}
                        {formatCurrency(precioFull)}
                      </p>
                    </div>

                    {precioMedio ? (
                      <div className="flex justify-between items-center flex-col">
                        <p className="font-bold text-xl text-customRed  ">
                          Medio{" "}
                        </p>
                        <p className="text-xl font-extrabold dark:text-white ">
                          {" "}
                          {formatCurrency(precioMedio)}{" "}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </CardContent>
              <CardActions disableSpacing className="flex w-full">
                <button
                  className={`${
                    expanded ? "bg-customRed" : "bg-green-700"
                  } p-3 text-white font-bold rounded-l-3xl rounded-br-3xl `}
                  expand={expanded}
                  onClick={() => {
                    handleExpandClick(), handleOpen();
                  }}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {!expanded ? "Agregar al Pedido" : "Cerrar"}
                </button>

                {/* </ExpandMore> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ModalOptions
                  item={item}
                  open={open}
                  handleModal={handleModal}
                  handleClose={handleClose}
                />
              </Collapse>
            </Card>
          </Modal>
        )}
      </>
    </>
  );
};
