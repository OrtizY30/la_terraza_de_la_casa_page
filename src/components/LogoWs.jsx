import React, { useEffect, useState } from "react";
import logoWs from "/img/ws-logo.webp";
import { Link } from "react-router-dom";

const LogoWs = () => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 6000);
  }, []);
  return (
    <div className=" flex sticky bottom-16 cursor-pointer z-50 w-32 ">
      <Link
        to="https://api.whatsapp.com/send?phone=3117164854&text=Hola%20deseo%20realizar%20un%20pedido."
        target="_blank"
        className="flex items-center relative "
      >
        <img
          src={logoWs}
          sizes="(max-width: 320px) 280px, 
         (max-width: 640px) 600px, 
         (max-width: 1280px) 1200px,
         1920px"
          loading="lazy"
          alt="logo wsapp"
          width={130}
          className="z-10"
        />
        <p
          className={`text-xs absolute overflow-hidden  text-white font-bold rounded-full shadow-sm bg-green-500 flex items-center  text-nowrap left-10  ${
            alert ? "py-2 pr-5 pl-14 w-auto" : "left-0 w-0 py-0 pr-0 pl-0 h-0"
          } transition-all ease-in-out`}
        >
          Hola, pide tu domicilio aqui!
        </p>
      </Link>
    </div>
  );
};

export default LogoWs;
