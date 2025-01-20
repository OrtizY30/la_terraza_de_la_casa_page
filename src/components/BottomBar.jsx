import {
  Badge,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BottomBar = () => {
  const location = useLocation();
  const { fav, carrito } = useContext(AppContext);

  // const fav = data.filter( item => item.favorito)
  const favCount = fav.length;
  const cartCount = carrito.length;

  // Condicion que valida que el pathname sea difrente a menú
  const path =
    location.pathname === "/" ||
    location.pathname === "/inicio" ||
    location.pathname === "/favoritos" ||
    location.pathname === "/pedido" ||
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
      name: "pedido",
      icon: "fa-cart-shopping",
      path: "pedido",
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

  const [value, setValue] = useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: path ? "block" : "none",
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={`bg-[#fbfbfb] ${!path && "hidden"} dark:bg-headerDarck`}
        >
          {icons.map((icon, i) => (
            <Link
              key={i}
              to={icon.path}
              className={`transition-all duration-300 w-full flex justify-center ${
                location.pathname === "/" + icon.name
                  ? "border-customRed border-t-4  "
                  : "border-t-4 border-transparent"
              }`}
            >
              {icon.name === "favoritos" && (
                <Badge
                  badgeContent={favCount}
                  color="error"
                  sx={{ color: "red", top: 12 }}
                  className="sm:left-[58%] md:left-[48%] left-[62%] lg:left-[35%]"
                ></Badge>
              )}
              {icon.name === "pedido" && (
                <Badge
                  badgeContent={cartCount}
                  color="error"
                  sx={{ color: "red", top: 12 }}
                  className="sm:left-[58%] md:left-[48%] left-[62%] lg:left-[35%]"
                ></Badge>
              )}
              {/* <BottomNavigationAction
                label={icon.name}
                icon={
                  
                  <i
                    className={`fa transition-all duration-300 ${icon.icon} ${
                      location.pathname === "/" + icon.name
                        ? " text-customRed fa-solid scale-125 "
                        : "text-black fa-regular dark:text-white"
                    }`}
                    style={{ fontSize: "16px" }}
                  ></i>
             
              } /> */}

<BottomNavigationAction
                label={icon.name}
                icon={
                  <i
                    className={`fa transition-all duration-300 ${icon.icon} ${
                      location.pathname === "/" + icon.name
                        ? " text-customRed fa-solid scale-125 "
                        : "text-black fa-regular dark:text-white"
                    }`}
                    style={{ fontSize: "16px" }}
                  ></i>
                }
              />
            </Link>
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomBar;
