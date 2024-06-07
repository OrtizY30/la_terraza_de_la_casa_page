import React, { createContext, useEffect, useState } from "react";
import { MenuCompleto } from "../data/db";
import useFirestore from "../hooks/useFirestore";
// import useFirestore from "../hooks/useFirestore";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("favoritos")) || []);
  // localStorage.removeItem('menu')

  const togleFav = (product) => {
    // Obtener los productos favoritos del localStorage
  const favFromLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];

  // Verificar si el producto ya está en favoritos
  const index = favFromLocalStorage.findIndex((item) => item.id === product.id);

  // Si no está en favoritos, añadirlo
  if (index === -1) {
    const updatedFav = [...favFromLocalStorage, product];
    setFav(updatedFav);

    // Guardar los favoritos actualizados en el localStorage
    localStorage.setItem("favoritos", JSON.stringify(updatedFav));
  } else {
    // Si está en favoritos, eliminarlo
    const updatedFav = favFromLocalStorage.filter((item) => item.id !== product.id);
    setFav(updatedFav);
    // Guardar los favoritos actualizados en el localStorage
    localStorage.setItem("favoritos", JSON.stringify(updatedFav));
  }
}

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
