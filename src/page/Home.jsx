import React, { useContext } from "react";
import bannerHome from "/img/cubanopollo.avif";
import { CardMenu } from "../components/CardMenu";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Redes from "../components/Redes";

const Home = () => {
  const { data, fixed } = useContext(AppContext);
  const menu = data.filter((item) => item.principal);

  return (
    <div className={`relative ${fixed && 'overflow-hidden h-[40vh]'}`}>
      <div className="relative h-[254px] md:h-[450px] pt-16  bg-origin-content w-full bg-cover bg-bottom bg-fixed overflow-hidden">
        <div className="bg-black/40 h-full w-full flex items-start justify-center flex-col p-10 px-6">
          <div className="w-full md:max-w-5xl mx-auto">
            <p className="text-4xl md:text-7xl lg:text-8xl text-white font-extrabold">
              Bienvenido a <br /> La Terraza de la Casa
            </p>
            <p className=" text-gray-200 font-black md:text-2xl">
              Since - 2002
            </p>
          </div>
        </div>
        <img
          src={bannerHome}
          sizes="(max-width: 320px) 280px, 
         (max-width: 640px) 600px, 
         (max-width: 1280px) 1200px,
         1920px"
          loading="lazy"
          alt="banner terraza de la casa"
          className="absolute w-full z-[-1] object-cover bg-bottom top-10 lg:-top-60"
        />
      </div>
      <div className=" max-w-5xl pt-5 bg-white   mx-auto relative dark:bg-customDark">
        <div className=" ">
          <div className="mx-3 flex items-center gap-2 z-[1">
            <i className="fa-sharp fa-solid fa-star text-yellow-300 text-2xl"></i>
            <h1 className="text-2xl font-black text-customRed capitalize">
              los platos más pedidos
            </h1>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 md:m-8 ">
            {menu.map((item, i) => (
              <CardMenu key={i} item={item} />
            ))}
          </section>
        </div>
      </div>

      <div className="w-full p-3 pt-6">
        <Link to={"/menu/todos"}>
          <button className="w-full rounded-md p-1 uppercase font-black text-white bg-customRed hover:bg-red-500 transition-all duration-300">
            Ver carta completa
          </button>
        </Link>
      </div>

      <Redes />
    </div>
  );
};

export default Home;
