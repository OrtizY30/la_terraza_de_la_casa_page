import React, { useContext } from "react";
import { CardMenu } from "../components/CardMenu";
import imgComida from "/img/logo.webp";
import { AppContext } from "../context/AppContext";

const Favoritos = () => {
  const { fav } = useContext(AppContext);
  const menuFav = fav;
  return (
    <div className=" max-w-5xl mt-24 mx-auto ">
      {menuFav.length < 1 ? (
        <div className=" flex gap-12 px-10 pt-10 flex-col items-center w-full justify-center">
          <h1 className="font-black text-center text-gray-400 text-md">
            Acá puedes ver tus productos favoritos
          </h1>

          <i className="fa-duotone fa-heart text-[250px] text-gray-400"></i>
        </div>
      ) : (
        <section className="grid mt-16 grid-cols-1 lg:grid-cols-2 md:m-8 ">
          {menuFav.map((item, i) => (
            <CardMenu key={i} item={item} imagen={imgComida} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Favoritos;
