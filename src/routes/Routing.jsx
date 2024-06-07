import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import QuienesSomos from "../page/QuienesSomos";
import Home from "../page/Home";
import Contactos from "../page/Contactos";
import Menu from "../page/Menu";
import Favoritos from "../page/Favoritos";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inicio" element={<Home />} />
        <Route path="menu/:param" element={<Menu />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contactos" element={<Contactos />} />
      </Route>
    </Routes>
  );
};

export default Routing;
