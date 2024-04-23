import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const CardMenu = ({ item, imagen, id }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { nombre, ingredientes, precioFull, precioMedio, img } = item;

  return (
    <>
      <motion.div
        className="bg-black/50 rounded-xl md:mt-11 mt-4 p-2 flex items-center flex-col justify-end containerItem h-32 mb-10  "
        layoutId={nombre}
        id={id}
      >
        <motion.img key={id} src={img ? '/img/'+img : imagen} className="rounded-xl w-36 h-24 " />
        
        <motion.h2 className="text-center text-xs sm:text-sm m-2 text-white capitalize line-clamp">
          {nombre}
        </motion.h2>

        <motion.button
          className="bg-orange-400 rounded-lg p-1 text-sm text-white hover:bg-orange-600 transition-all ease-in-out duration-500"
          onClick={() => setSelectedId(nombre)}
        >
          ver más...
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed flex w-full  top-0 bottom-0  left-0 right-0 bg-black/60 justify-center items-center z-10"
            id={id}
          >
            <motion.div className="bg-neutral-900 p-4 rounded-xl w-full mx-2 relative flex flex-col md:flex-row items-center gap-5 md:max-w-2xl  ">
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute right-0 top-0 rounded-tr-xl rounded-bl-xl hover:bg-orange-400/50 "
              >
                <box-icon name="x" color="#FB923C" size="md"></box-icon>
              </motion.button>
              <motion.img
                className="w-60 rounded-sm shadow-lg shadow-gray-400/40"
                key={id}
                src={img ? '/img/'+img : imagen}
              />
              <motion.div className="w-3/4 space-y-3">
                <p className="text-center text-orange-400 font-black text-lg capitalize  md:text-2xl">
                  {nombre}
                </p>

                <p className="text-xs text-white text-justify font-normal capitalize tracking-wider w-full">
                  {ingredientes}
                </p>
                <div className="flex w-full justify-between flex-col">
                  <div className="flex justify-between items-center">
                    <p className="font-black text-white">Precio: </p>
                    <p className="text-2xl font-extrabold text-orange-500">
                      {" "}
                      $ {precioFull}
                    </p>
                  </div>

                  {precioMedio ? (
                    <div className="flex justify-between items-center">
                      <p className="font-black text-white">Medio: </p>
                      <p className="text-2xl font-extrabold text-orange-500">
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
