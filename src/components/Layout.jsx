import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "../page/Home";
import Footer from "./Footer";
import logoWs from "/img/ws-logo.png";

import fondo from "/img/cubanopollo.jpg";
import Menu from "../page/Menu";
import QuienesSomos from "../page/QuienesSomos";
import { Link, Outlet, Route } from "react-router-dom";

const Layout = () => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 6000);
  }, []);

  return (
   
      <div className="relative">
        <div
          className="bg-fixed relative  w-full h-auto bg-cover bg-top z-20"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <Header />
          <div className="w-full overflow-hidden bg-black/55">

            
           <Outlet/>
        
          </div>
        </div>
        <Footer />

        {/* Boton de whatsApp */}
        <div className="logoWs flex sticky bottom-0 cursor-pointer z-50 w-32 ">
          <Link
            to="https://api.whatsapp.com/send?phone=3117164854"
            target="_blank"
            className="flex items-center "
          >
            <img src={logoWs} alt="" className="z-10 w-full" />
            <p
              className={`text-xs  absolute left-10 text-white py-4 pr-5 pl-14 font-bold rounded-full shadow-lg bg-green-500 flex items-center h-6 w-60 ${
                alert ? "" : "-translate-x-full -m-28"
              } transition-all duration-1000 ease-in-out`}
            >
              Hola, pide tu domicilio aqui!
            </p>
          </Link>
        </div>
      </div>

    // </div>
  );
};

export default Layout;
