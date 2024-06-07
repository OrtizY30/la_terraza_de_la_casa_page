import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { Fab, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import imagen from "/img/logo.webp";

export const CardMenu = ({ item, id }) => {
  const { togleFav, fav } = useContext(AppContext);

  const isFa = fav.includes(item);

  const [selectedId, setSelectedId] = useState(null);
  const { nombre, ingredientes, precioFull, precioMedio, img } = item;

  return (
    <>
      <motion.div
        className="cursor-pointer rounded-sm border-b-2 mx-3 py-6 flex gap-2 justify-end hover:scale-[1.05] transition-all duration-500"
        layoutId={nombre}
        id={id}
        onClick={() => setSelectedId(nombre)}
      >
        <motion.img
          key={id}
          src={img ? "/img/" + img : imagen}
          className=" w-24 h-20 object-cover rounded-lg shadow shadow-gray-400  "
        />

        <div className="flex-1 flex justify-between flex-col h-full w-full">
          <motion.h2 className="text-xl font-semibold capitalize dark:text-white ">
            {nombre}
          </motion.h2>

          <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-2 font-sans pr-6 capitalize">
            {ingredientes}
          </p>

          <motion.button
            className="bg-customRed rounded-md px-2 p-1 text-xs w-10 text-white hover:bg-red-700 transition-all ease-in-out duration-500"
            onClick={() => setSelectedId(nombre)}
          >
            ver
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed flex w-full top-0 bottom-0 left-0 right-0 bg-black/70 justify-center items-center z-[100]"
            id={id}
          >
            <motion.div className="bg-white rounded-md w-full mx-2 relative flex flex-col items-center gap-5 sm:max-w-sm  pb-6 dark:bg-customDark  ">
              <div className="relative">
                <motion.img
                  className="w-full md:max-w-sm rounded-t-md shadow-lg bg-contain shadow-gray-400/40"
                  key={id}
                  src={img ? "/img/" + img : imagen}
                />
                <motion.button
                  className=""
                  onClick={() => addFav(item)}
                ></motion.button>
                <div
                  className="absolute z-10 top-2 left-6"
                  onClick={() => togleFav(item)}
                >
                  <Fab
                    color={isFa ? "error" : ""}
                    size="medium"
                    aria-label="like"
                  >
                    <Favorite />
                  </Fab>
                </div>
                <div className="absolute right-6 top-2 p-1  px-3 rounded-full bg-gray-200/80 ">
                  <IconButton size="small" onClick={() => setSelectedId(null)}>
                    <i className="fa-sharp fa-regular fa-xmark text-2xl text-black hover:scale-110 transition-all duration-300"></i>
                  </IconButton>
                </div>
              </div>

              <motion.div className="w-full px-6 space-y-3">
                <p className="text-2xl font-[900] capitalize md:text-2xl dark:text-white">
                  {nombre}
                </p>

                <p className="text-md text-justify font-normal capitalize w-full text-gray-500 dark:text-gray-300">
                  {ingredientes}
                </p>
                <div className="flex w-full justify-between">
                  <div className="flex justify-between items-center flex-col">
                    <p className="font-bold text-xl text-customRed">Precio </p>
                    <p className="text-xl font-bold dark:text-white ">
                      {" "}
                      $ {precioFull}
                    </p>
                  </div>

                  {precioMedio ? (
                    <div className="flex justify-between items-center flex-col">
                      <p className="font-bold text-xl text-customRed  ">
                        Medio{" "}
                      </p>
                      <p className="text-xl font-extrabold dark:text-white ">
                        {" "}
                        $ {precioMedio}{" "}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
