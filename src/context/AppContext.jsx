import React, { createContext, useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [fixed, setFixed] = useState(false)
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  
   // Cargar el carrito desde localStorage cuando el componente se monta
   useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
  }, []);

   // Guardar el carrito en localStorage cada vez que se actualice
   useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  
  // Agregar al carrito
  const agregarAlCarrito = (pedido) => {
    setCarrito((prevCarrito) => [...prevCarrito, pedido]);
  };

// Eliminar pedido del carrito
const deleteCarrito = (id) => {
  const deleteItem = carrito.filter(item => item.id !== id)
  setCarrito(deleteItem);
}

  const togleFav = (product) => {
    // Obtener los productos favoritos del localStorage
    const favFromLocalStorage =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    // Verificar si el producto ya está en favoritos
    const index = favFromLocalStorage.findIndex(
      (item) => item.id === product.id
    );

    // Si no está en favoritos, añadirlo
    if (index === -1) {
      const updatedFav = [...favFromLocalStorage, product];
      setFav(updatedFav);

      // Guardar los favoritos actualizados en el localStorage
      localStorage.setItem("favoritos", JSON.stringify(updatedFav));
    } else {
      // Si está en favoritos, eliminarlo
      const updatedFav = favFromLocalStorage.filter(
        (item) => item.id !== product.id
      );
      setFav(updatedFav);
      // Guardar los favoritos actualizados en el localStorage
      localStorage.setItem("favoritos", JSON.stringify(updatedFav));
    }
  };

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(fav));
  }, [fav]);

  const data = useFirestore("menu");

  return (
    <AppContext.Provider
      value={{
        data,
        togleFav,
        fav,
        setFixed,
        fixed,
        agregarAlCarrito,
        deleteCarrito,
        carrito
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
