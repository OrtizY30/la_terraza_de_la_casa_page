import React from "react";

const QuienesSomos = () => {
  return (
    <div className=" w-full flex pt-24 pb-7 bg-black/40 flex-col gap-10 p-3">
      <div className="max-w-2xl mx-auto flex justify-center items-center flex-col gap-9">
        <img src="/img/logo.png" width={200} className="imgFotter" alt="logo" />

        <p className="poema text-white text-center">
          "Para llegar a algo que tengo significdo,
          <br />
          lo primero es el deseo de la calidad.
          <br />
          Sin eso no hay posibilidad de encontrar nada,
          <br />
          se trata de un profundo anhelo
          <br />
          de hacer las cosas bien, siempre mejor
          <br />
          Amo lo que hago"
          <br />
          <span className="font-black text-3xl text-white">Botero</span>
        </p>
        <p className="text-xl text-justify text-white font-black tracking-wider">
          Año tras año en el mundo no se habla de{" "}
          <span className="text-orange-500 "> Casual Food</span> , pero en
          Barranquilla, ya se empezaba a implementar esta tendenciaen la
          alimentación en La Terraza de la Casa. Convirtiendose en una opción
          interesante para quienes quieren comer sano y tienen poco tiempo.
          <br />
          <br />
          El menú de{" "}
          <span className="text-orange-500 ">La Terraza de la Casa</span> está
          pensado para el comensal de hoy, cuya tendencia es la creciente
          preocupación por los alimentos que consume..
          <br />
          <br />
          <span className="text-orange-500 "> Casual Food</span> conjuga la
          rapidéz del Fast- Food, y la calidad de los ingredientes que conforman
          el menú Desde que fue fundada La Terraza de la Casa siempre ha sido el
          lugar donde la gente viene a disfrutar de una comida única y
          deliciosa, con un toque de. hospitalidad.
          <br />
          <br />
          Nuestro variado y extenso menú, ofrece una amplia gama de platos para
          todos los gustos.
          <br />
          <br />
          El secreto de nuestro éxito, es vivir en función de nuestros clientes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between ">
        <p className="text-orange-500 font-bold text-xl md:text-4xl">
          La terraza de la casa -{" "}
          <span className="text-white"> Since 2002</span>
        </p>
      </div>
    </div>
  );
};

export default QuienesSomos;
