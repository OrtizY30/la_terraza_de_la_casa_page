import React, { useContext, useState } from "react";
import ModalOrder from "./ModalOrder";
import {
  calcularTotalCarrito,
  calcularTotalPedido,
  formatCurrency,
} from "../helpers";
import { AppContext } from "../context/AppContext";
import imagen from "/img/logo.webp";
import { Delete, RemoveShoppingCart } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";

const Cart = () => {
  const { deleteCarrito, carrito } = useContext(AppContext);
  const [showModaOrder, setShowModaOrder] = useState(false);

  // Funciones para actival el modal de datos del cliente
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="max-w-5xl mt-20 mx-auto ">
      <div className=" dark:text-white  ">
        {carrito.length > 0 ? (
          <div className="pb-24">

            {carrito.map((pedido, index) => (
              <div key={index} >
                <div className="shadow  dark:shadow-gray-800 px-2 py-3 flex items-center gap-2 justify-between ">
                  <div className=" flex gap-2 items-center">
                    <img
                      className=" rounded-md"
                      src={pedido.imagen ? "/img/" + pedido.imagen : imagen}
                      sizes="(max-width: 80px) 60px, 
                  (max-width: 80px) 60px, 
                  (max-width: 80px) 60px,
                  80px"
                  height={90}
                      width={90}
                      loading="lazy"
                      alt="imagen del producto"
                    />

                  <div>
                    <div>
                      <p className="font-bold text-md capitalize">
                        {pedido.nombre} - {pedido.tamaño} {pedido.opcion}{" "}
                      </p>

                      <p className="text-xs ml-6">
                        x <span>1 </span> - {formatCurrency(pedido.precio)}
                      </p>
                      <>
                        {pedido.pan !== "" && (
                          <p className="text-sm capitalize">
                            <strong>Pán : </strong> {pedido.pan}
                          </p>
                        )}
                      </>
                    </div>

                    {pedido.adicionales.length > 0 && (
                      <div className="text-sm">
                        <strong>Adicionales:</strong>
                        {pedido.adicionales.map((adicional, idx) => (
                          <p key={idx} className="text-xs ml-5 capitalize">
                            
                            {adicional.adicion} -{" "}
                            {formatCurrency(adicional.precio)}
                          </p>
                        ))}
                      </div>
                    )}
                    {pedido.observacion && (
                      <p className="text-sm">
                        {" "}
                        <strong>Observación:</strong> {pedido.observacion}
                      </p>
                    )}

                    <p className="font-bold">
                      {formatCurrency(calcularTotalPedido(pedido))}
                    </p>
                  </div>
                        </div>

                  <div>
                    <button onClick={() => deleteCarrito(pedido.id)}>
                      <Delete className="hover:text-red-600 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-col flex items-center w-full">
            <p className="text-gray-400 text-xl font-bold text-center mt-10">
              Tu carrito está vacío
            </p>

            <RemoveShoppingCart
              sx={{ fontSize: 200 }}
              className="text-gray-400"
            />
          </div>
        )}
      </div>
      {carrito.length > 0 && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 1,
            bottom: 56,
            left: 0,
            right: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
          elevation={3}
        >
          <div className="flex flex-col dark:bg-neutral-900 dark:text-white bg-[#fbfbfb] w-full justify-between p-2 items-center rounded-t-2xl z-[100] ">
            <div className="dark:text-white capitalize flex justify-between w-full py-3 ">
              <p className="font-bold">Total a pagar : </p>
              <p className="font-bold">
                {formatCurrency(calcularTotalCarrito(carrito))}
              </p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-300  pb-4">*El valor del total a pagar no incluye el costo del domicilio*</p>
            <button
              className="bg-green-700 w-full p-2 text-white font-bold rounded-lg hover:bg-green-500 transition-all duration-500 ease-in-out hover:scale-[1.02]"
              onClick={() => {
                setShowModaOrder(true);
                handleOpen();
              }}
            >
              Enviar Pedido
            </button>
          </div>
        </Box>
      )}
      {showModaOrder && (
        <Modal
          open={open}
          onClose={handleClose}
          className="absolute flex w-full top-0 bottom-0 left-0 right-0 bg-black/70 justify-center items-center z-[100] h-full overflow-y-scroll py-4"
        >
          <ModalOrder setShowModaOrder={setShowModaOrder} />
        </Modal>
      )}
    </div>
  );
};

export default Cart;
