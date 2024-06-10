import { useContext } from "react";
import { CardMenu } from "./CardMenu";
import { AppContext } from "../context/AppContext";

const Todos = () => {
  const { data } = useContext(AppContext);

  const menuSandwich = data.filter((item) => item.categoria === "sandwich");
  const menuEntradas = data.filter((item) => item.categoria === "entradas");
  const menuGuormet = data.filter((item) => item.categoria === "gourmet");
  const menuEnsaladas = data.filter((item) => item.categoria === "ensaladas");
  const menuHamburguesas = data.filter((item) => item.categoria === "burgers");
  const menuPlanchitas = data.filter((item) => item.categoria === "planchitas");
  const menuTerrazaKids = data.filter(
    (item) => item.categoria === "terraza Kids"
  );

  return (
    <>
      <div className="max-w-5xl mt-28 mx-auto">
        {/* Seccion de menu de entradas */}
        <div className=" p-4 mx-3">
          <h1 className="text-center text-5xl font-bold text-customRed ">
            Entradas
          </h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8 ">
          {menuEntradas.map((item, i) => (
            <CardMenu key={i} item={item} />
          ))}
        </section>

        {/* Seccion de menu de sandwches normales */}

        <div className=" p-4 mx-3">
          <h1 className="  text-center text-5xl font-bold text-customRed ">
            Sandwich
          </h1>

          <p className=" text-xs text-center dark:text-gray-300">
            Todos nuestros sandwiches son el elegibles en el pan que desee
            (Gluten, Molde, Frances, Quinua)
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8">
          {menuSandwich.map((item, i) => (
            <CardMenu key={i} id={i} item={item} />
          ))}
        </section>

        {/* Seccion de menu de sandwches guormet */}

        <div className=" p-4 mx-3">
          <h1 className="  text-center text-5xl font-bold text-customRed ">
            Sandwich Gourmet
          </h1>

          <p className=" text-xs text-center dark:text-gray-300">
            Todos nuestros sandwiches son el elegibles en el pan que desee
            (Gluten, Molde, Frances, Quinua)
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8 ">
          {menuGuormet.map((item, i) => (
            <CardMenu key={i} id={i} item={item} />
          ))}
        </section>

        {/* Seccion de menu de Ensaladas */}
        <div className=" p-4 mx-3">
          <h1 className="  text-center text-5xl font-bold text-customRed ">
            Ensaladas
          </h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8">
          {menuEnsaladas.map((item, i) => (
            <CardMenu key={i} id={i} item={item} />
          ))}
        </section>

        {/* Seccion de menu de planchitas */}
        <div className=" p-4 mx-3">
          <h1 className="  text-center text-5xl font-bold text-customRed ">
            Planchitas
          </h1>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8 ">
          {menuPlanchitas.map((item, i) => (
            <CardMenu key={i} id={i} item={item} />
          ))}
        </section>

        {/* Seccion de menu de Hamburguesas */}
        <div className=" p-4 mx-3">
          <h1 className="  text-center text-5xl font-bold text-customRed ">
            Burgers
          </h1>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8 ">
          {menuHamburguesas.map((item, i) => (
            <CardMenu key={i} id={i} item={item} />
          ))}
        </section>

        {/* Seccion de menu de terraza kit */}
        <div className=" p-4 mx-3">
          <h1 className="  text-center text-5xl font-bold text-customRed ">
            Terraza Kits
          </h1>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 md:m-8">
          {menuTerrazaKids.map((item, i) => (
            <CardMenu key={i} id={i} item={item} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Todos;
