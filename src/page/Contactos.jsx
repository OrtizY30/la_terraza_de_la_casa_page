import React from "react";
import { Link } from "react-router-dom";

const Contactos = () => {
  return (
    <div className=" max-w-5xl mx-auto flex items-center justify-center">
      <div className=" w-[450px] mx-auto mt-16  p-10 flex flex-col items-center space-y-8 dark:text-white font-black">
        <h1 className="text-4xl text-center font-black">Contactos</h1>

        <div className="w-full flex flex-col items-start gap-6 ">
          <div className="flex flex-row  gap-6 ">
            <i className="fa-solid fa-phone  text-4xl"></i>

            <div className="hover:text-blue-700 cursor-pointer">
              <p className="font-black">3571992</p>
              <p className="font-black">3552721</p>
            </div>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=3117164854"
            target="_blank"
            className="flex flex-row gap-6 items-center "
          >
            <i
              aria-hidden="true"
              className="v-icon notranslate linktree fa fa-brands fa-whatsapp text-4xl text-green-500"
            ></i>

            <p className="font-black hover:text-blue-700">3117164854</p>
          </Link>

          <Link
            to="https://www.instagram.com/laterrazadelacasa/"
            className="flex flex-row  gap-6 items-center "
            target="_blank"
          >
            <i
              aria-hidden="true"
              className="v-icon notranslate linktree fa fa-brands fa-instagram text-4xl text-orange-400"
            ></i>

            <p className="font-black hover:text-blue-700">@laterrazadelacasa</p>
          </Link>

          <Link
            className="flex flex-row gap-6 items-center "
            to="https://www.facebook.com/laterrazadelacasa"
            target="_blank"
          >
            <i
              aria-hidden="true"
              className="v-icon notranslate linktree fa fa-brands fa-facebook  text-4xl text-blue-700"
            ></i>

            <p className="font-black hover:text-blue-700 ">
              La terraza de la casa
            </p>
          </Link>
        </div>

        <div className="w-full font-black ">
          <p>¿Cómo llegar?</p>

          <div className="h-72 mt-3 w-full">
          <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4043967560365!2d-74.82055532559968!3d11.008254854876084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42daf05767d91%3A0xb05c0012df9a3447!2sLa%20Terraza%20de%20la%20Casa!5e0!3m2!1ses!2sco!4v1713828370962!5m2!1ses!2sco"
          width="100%"
          height="100%"
          style={{ borderRadius: 4  }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
