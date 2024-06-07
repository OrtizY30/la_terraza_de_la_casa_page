import { Link } from "react-router-dom";

const Categories = ({ param }) => {
  const category = [
    "todos",
    "entradas",
    "sandwich",
    "gourmet",
    "ensaladas",
    "planchitas",
    "burgers",
    "terraza Kids",
    "malteadas",
    "postres",
    "bebidas",
    "cervezas",
  ];

  return (
    <div className="flex lg:justify-center items-center fixed top-7 z-10 mt-10 px-2 py-4 gap-2 overflow-x-auto overscroll-x-auto scrollbar-hidden w-full ">
      {category.map((cate, i) => (
        <div
          key={i}
          className={`p-2 cursor-pointer  shadow shadow-gray-400 rounded-md hover:scale-105 transition-all duration-200 ${
            param === cate
              ? "bg-customRed font-black text-white"
              : "bg-[#fbfbfb]"
          }`}
        >
          <Link to={"/menu/" + cate}>
            <p className={` capitalize text-nowrap`}>{cate}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
