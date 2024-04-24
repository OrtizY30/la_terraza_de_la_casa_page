import { MenuCompleto, menuPdf } from "../data/db";
import imgComida from "/img/logo.png";
import { CardMenu } from "../components/CardMenu";
import { useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(menuPdf)
  console.log(menu)
  // const menuSandwich = MenuCompleto.filter(
  //   (item) => item.categoria === "sandwich"
  // );

  // const menuEntradas = MenuCompleto.filter(
  //   (item) => item.categoria === "entrada"
  // );

  // const menuGuormet = MenuCompleto.filter(
  //   (item) => item.categoria === "sandwichG"
  // );
  // const menuEnsaladas = MenuCompleto.filter(
  //   (item) => item.categoria === "ensalada"
  // );
  // const menuHamburguesas = MenuCompleto.filter(
  //   (item) => item.categoria === "hamburguesa"
  // );
  // const menuPlanchitas = MenuCompleto.filter(
  //   (item) => item.categoria === "planchita"
  // );

  // const menuTerrazaKit = MenuCompleto.filter(
  //   (item) => item.categoria === "terrazaKit"
  // );
  
  return (
    <div
      id="menu"
      className="menu max-w-7xl  shadow-2xl shadow-black  mx-auto bg-orange-200/70 py-8"
    >
      <h1 className="text-6xl text-center font-black  my-10">Menú</h1>

      <div className="px-2 flex flex-col gap-8">
        {menu.map((item, i) => (
         
<img src={'/menu/'+ item} key={i} alt="imagen menu" className="w-full md:max-w-3xl mx-auto" />
        ))}
      </div>

      {/* <div>
      Seccion de menu de entradas
        <h1 className="mb-16 text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 mx-5 pb-4">
          Entradas
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuEntradas.map((item, i) => (
            <CardMenu key={i} item={item} img={imgComida} />
          ))}
        </section>

        Seccion de menu de sandwches normales

        <div className="mb-16 mx-5 pb-4 space-y-2">
          <h1 className=" text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 ">
            Sándwich
          </h1>

          <p className="text-neutral-700 text-xs text-center">
            Todos nuestros sándwiches son el elegibles en el pan que desee
            (Gluten, Molde, Frances, Quinua)
          </p>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuSandwich.map((item, i) => (
            <CardMenu key={i} id={i} item={item} imagen={imgComida} />
          ))}
        </section>

        Seccion de menu de sandwches guormet

        <div className="mb-16 mx-5 pb-4 space-y-2">
          <h1 className=" text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 ">
            Sándwich Gourmet
          </h1>

          <p className="text-neutral-700 text-xs text-center">
            Todos nuestros sándwiches son el elegibles en el pan que desee
            (Gluten, Molde, Frances, Quinua)
          </p>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuGuormet.map((item, i) => (
            <CardMenu key={i} id={i} item={item} imagen={imgComida} />
          ))}
        </section>

        Seccion de menu de Ensaladas

        <h1 className="mb-16 text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 mx-5 pb-4">
          Ensaladas
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuEnsaladas.map((item, i) => (
            <CardMenu key={i} id={i} item={item} imagen={imgComida} />
          ))}
        </section>

        Seccion de menu de planchitas
        <h1 className="mb-16 text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 mx-5 pb-4">
          Planchitas
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuPlanchitas.map((item, i) => (
            <CardMenu key={i} id={i} item={item} imagen={imgComida} />
          ))}
        </section>

        Seccion de menu de Hamburguesas

        <h1 className="mb-16 text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 mx-5 pb-4">
          Hamburguesas
        </h1>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuHamburguesas.map((item, i) => (
            <CardMenu key={i} id={i} item={item} imagen={imgComida} />
          ))}
        </section>

        Seccion de menu de terraza kit

        <h1 className="mb-16 text-center text-5xl font-bold text-orange-500 border-orange-400 border-b-8 mx-5 pb-4">
          Terraza Kits
        </h1>

        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 m-3 md:m-8 gap-4 ">
          {menuTerrazaKit.map((item, i) => (
            <CardMenu key={i} id={i} item={item} imagen={imgComida} />
          ))}
        </section>
      </div> */}
    </div>
  );
};

export default Menu;
