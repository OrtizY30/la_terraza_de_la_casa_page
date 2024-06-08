import { IconButton, Badge } from "@mui/material";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BottomBar = () => {
  const location = useLocation();
  const {fav} = useContext(AppContext)

  // const fav = data.filter( item => item.favorito)
  const favCount = fav.length

  // Condicion que valida que el pathname sea difrente a menú
  const path =
    location.pathname === "/" ||
    location.pathname === "/inicio" ||
    location.pathname === "/favoritos" ||
    location.pathname === "/contactos";
  const icons = [
    {
      name: "inicio",
      icon: "fa-house",
      path: "inicio",
    },
    {
      name: "menu",
      icon: "fa-plate-utensils",
      path: "menu/todos",
    },
    {
      name: "favoritos",
      icon: "fa-heart",
      path: "favoritos",
    },
    {
      name: "contactos",
      icon: "fa-bell ",
      path: "contactos",
    },
  ];
  return (
    <div
      className={`bg-[#fbfbfb] sticky bottom-0 z-[0] ${
        !path && "hidden"
      } dark:bg-headerDarck`}
    >
      <div className="flex w-full md:justify-center mx-auto overflow-hidden h-16 justify-between">
        {icons.map((icon, i) => (
          <Link
            key={i}
            to={icon.path}
            className={`transition-all duration-300 px-3 hover:bg-neutral-200 ${
              location.pathname === "/" + icon.name
                ? "border-customRed border-t-4  "
                : "border-t-4 border-transparent"
            }`}
          >
            <IconButton className="flex flex-col items-center w-[70px] justify-center md:w-48 ">
              {" "}
              {icon.name === "favoritos" && (
                <Badge
                  badgeContent={favCount}
                  color="error"
                  sx={{ color: "red", ml: 3 }}
                ></Badge>
              )}
              <i
                className={`fa transition-all duration-300 ${icon.icon} ${
                  location.pathname === "/" + icon.name
                    ? " text-customRed scale-110 fa-solid "
                    : "text-black fa-regular dark:text-white"
                }`}
                style={{ fontSize: "16px" }}
              ></i>
              <p
                className={`text-sm font-bold capitalize transition-all duration-300 ${
                  location.pathname === "/" + icon.name
                    ? " text-customRed scale-105"
                    : " dark:text-white"
                }`}
              >
                {icon.name}
              </p>
            </IconButton>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
