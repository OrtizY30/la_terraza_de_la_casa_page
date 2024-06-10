import React, { useContext } from "react";
import { CardMenu } from "./CardMenu";
import imgComida from "/img/logo.webp";
import { AppContext } from "../context/AppContext";

const MenuOtro = ({ param }) => {
  const { data } = useContext(AppContext);
  const path = param === "sandwich" || param === "gourmet";

  const menu = data.filter((item) => item.categoria === param);

  return (
    <div className="max-w-5xl mt-28 mx-auto">
      <div className=" mx-3">
        <h1 className="  text-center text-5xl capitalize font-bold text-customRed">
          {param}
        </h1>
        {path && (
          <p className=" text-xs mt-2 text-center dark:text-gray-300">
            Todos nuestros sandwiches son el elegibles en el pan que desee
            (Gluten, Molde, Frances, Quinua)
          </p>
        )}
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 md:m-8 ">
        {menu.map((item, i) => (
          <CardMenu key={i} item={item} imagen={imgComida} />
        ))}
      </section>
    </div>
  );
};

export default MenuOtro;
