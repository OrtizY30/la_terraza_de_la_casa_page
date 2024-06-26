import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import QuienesSomos from "../page/QuienesSomos";
import Home from "../page/Home";
import Contactos from "../page/Contactos";
import Menu from "../page/Menu";
import Favoritos from "../page/Favoritos";
import { useEffect } from "react";
import Cart from "../components/Cart";

const Routing = () => {
  const location = useLocation()
  useEffect(() => {
    function scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth", // Para hacer el scroll suavemente
      });
    }

    scrollToTop();
  }, [location]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inicio" element={<Home />} />
        <Route path="menu/:param" element={<Menu />} />
        <Route path="pedido" element={<Cart/>} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contactos" element={<Contactos />} />
      </Route>
    </Routes>
  );
};

export default Routing;
