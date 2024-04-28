import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen home  max-w-7xl mx-auto">
        <div className=" flex flex-col justify-center items-center h-full space-y-10 ">
          <div className="w-3/4 mx-auto flex items-center justify-center">
            <img
              src="/img/logo.png"
              width={200}
              className="imgFotter"
              alt="logo"
            />
            {/* 
          <p className="text-orange-100 text-2xl md:text-5xl text-center font-medium textHome">
          22 Años de tradición
          </p> */}
          </div>

          <div className="flex flex-col  gap-4 items-center">
            <p className="text-white cursor-pointer font-black hover:text-orange-500">
              ¿Deseas pedir a domicilio o reservar?, pulsa aqui
            </p>

            <box-icon
              name="down-arrow-alt"
              animation="flashing"
              color="#ee7009"
              size="lg"
            ></box-icon>

            <Link to="/contactos">
              <button className="bg-orange-400 uppercase font-bold text-white p-2 w-28 rounded-lg hover:bg-orange-600 hover:text-white transition-all ease-in-out duration-500">
                contactos
              </button>
            </Link>

            <a href="#menu">
              <button className="bg-orange-400 uppercase font-bold text-white p-2 w-28 rounded-lg hover:bg-orange-600 hover:text-white transition-all ease-in-out duration-500">
                menú
              </button>
            </a>
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default Home;
