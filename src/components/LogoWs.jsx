import React, { useEffect, useState } from "react";
import logoWs from "/img/ws-logo.avif";
import { Link } from "react-router-dom";

const LogoWs = () => {
  const [alert, setAlert] = useState(true);

  const message = 'Hola, necesito ayuda.'
  const phoneNumber = "3117164854"; // Reemplaza con el número de teléfono del restaurante en formato internacional
    
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 6000);
  }, []);
  return (
    <div className=" flex sticky bottom-20 cursor-pointer z-50 ml-4 w-12 ">
      <Link
        to={whatsappLink}
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
          width={'100%'}
          className="z-10 drop-shadow-xl"
        />
         {/* <i
              aria-hidden="true"
              className="v-icon notranslate linktree fa-regular fa-brands fa-whatsapp text-4xl text-green-500 z-10"
            ></i> */}
        <p
          className={`text-xs absolute overflow-hidden text-white font-bold rounded-full shadow-sm bg-green-500 flex items-center  text-nowrap left-10  ${
            alert ? "py-2 pr-5 pl-10 -ml-6 w-auto" : "left-0 w-0 py-0 pr-0 pl-0 h-0"
          } transition-all duration-500 ease-in-out`}
        >
          Hola, necesitas ayuda? presiona aquí!
        </p>
      </Link>
    </div>
  );
};

export default LogoWs;
