import { useEffect, useState } from "react";
import logo from "/img/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import PowerBy from "./PowerBy";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  function handleOn() {
    setDarkMode(true);
  }
  function handleOff() {
    setDarkMode(false);
  }

  const path =
    location.pathname === "/" ||
    location.pathname === "/inicio" ||
    location.pathname === "/favoritos" ||
    location.pathname === "/contactos";

  const [anchorEl, setAnchorEl] = useState(null);
  const openDark = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      className="w-full fixed z-10 top-0 bg-[#fbfbfb] shadow shadow-gray-300  md:rounded-none h-16
    backdrop-blur-sm  rounded-b-xl dark:bg-headerDarck"
    >
      <div className="w-full flex h-full pl-2 justify-between items-center">
        {path ? (
          <>
            <div
              className={" cursor-pointer rounded-full -mr-2"}
              onClick={() => setOpen(true)}
            >
              <IconButton>
                <i className="fa-regular fa-bars-sort text-3xl text-black dark:text-white"></i>
              </IconButton>
            </div>
            <div
              className={`${
                location.pathname !== "/favoritos" &&
                location.pathname !== "/contactos" &&
                "hidden"
              }`}
            >
              <p className="font-extrabold capitalize text-xl dark:text-white ">
                {location.pathname === "/favoritos" && "Mis Favoritos"}
              </p>
              <p className="font-extrabold capitalize text-xl dark:text-white ">
                {location.pathname === "/contactos" ? "Contactos" : ""}
              </p>
            </div>
            <div
              className={`${
                location.pathname !== "/" &&
                location.pathname !== "/inicio" &&
                "hidden"
              }`}
            >
              <img
                src={logo}
                sizes="(max-width: 320px) 280px, 
               (max-width: 640px) 600px, 
               (max-width: 1280px) 1200px,
               1920px"
                loading="lazy"
                width={60}
                alt="logo la terraza de la casa"
              />
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link to={"/inicio"} className="ml-2">
              <i className="fa-sharp fa-solid fa-chevron-left text-2xl transition-all duration-100 hover:scale-105 dark:text-white"></i>
            </Link>

            <p className="font-extrabold capitalize text-xl dark:text-white ">
              {!path && <p>Menú</p>}
              {path === "/favorito" && <p>Mis Favoritos</p>}
            </p>
          </div>
        )}

        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openDark ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVert className="text-black dark:text-white" />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openDark}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              handleOff();
            }}
          >
            Claro
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              handleOn();
            }}
          >
            Oscuro
          </MenuItem>
        </Menu>
      </div>

      <div
        className={`absolute z-[1] overflow-hidden ${
          open ? "top-0 h-[100vh]" : "-top-[550px] h-0 "
        } transition-all duration-1000 ease-in-out left-0 bg-black/40 w-full`}
      >
        <div className=" bg-headerDarck relative shadow-black/75 flex items-center gap-4">
          <div
            className={
              "cursor-pointer hover:bg-gray-300/80 rounded-full w-14 h-14 flex items-center justify-center text-white"
            }
            onClick={() => setOpen(false)}
          >
            <i className="fa-sharp fa-light fa-xmark text-4xl"></i>
          </div>

          <p className="text-white text-xl font-black">La Terraza de la Casa</p>
        </div>
        <div className="px-8 gap-16 h-screen bg-customDark flex items-center flex-col justify-evenly -mt-10">
          <div className="h-[420px] max-w-4xl w-full bg-headerDarck shadow-xl p-4 shadow-gray-700 space-y-5 flex flex-col justify-between">
            <Link
              to={
                "https://api.whatsapp.com/send?phone=3117164854&text=Hola%2C%20deseo%20hacer%20pedido%20a%20domicilio."
              }
              target="_blank"
              className="flex items-center gap-6"
            >
              <p className="text-3xl">🛵 </p>
              <p className="font-black mt-2 text-lg text-white hover:text-blue-700">
                Pedir a Domicilio ...
              </p>
            </Link>
            <Link
              to={
                "https://api.whatsapp.com/send?phone=3117164854&text=Hola%2C%20deseo%20reservar%20una%20mesa."
              }
              target="_blank"
              className="flex items-center gap-6"
            >
              <p className="text-3xl">📆</p>
              <p className="font-black mt-2 text-lg text-white hover:text-blue-700">
                Reservar una mesa
              </p>
            </Link>
            <Link
              to="https://maps.app.goo.gl/TM7ZbWHPNxc3dEj4A"
              target="_blank"
              className="flex items-center gap-6"
            >
              <p className="text-3xl">📍</p>
              <p className="font-black mt-2 text-lg text-white hover:text-blue-700">
                Carrera 53 # 85 - 77{" "}
              </p>
            </Link>

            <Link
              href="https://maps.app.goo.gl/wddFeBJPJgermYwB9"
              target="_blank"
              className="flex items-center gap-6"
            >
              <p className="text-3xl">📍</p>
              <p className="font-black mt-2 text-lg text-white hover:text-blue-700">
                {" "}
                CC Buena vista I - Plaza de comida
              </p>
            </Link>

            <div className="w-full flex items-center justify-center flex-col gap-2">
              <p className="font-black mt-2 text-lg text-white">Siguenos</p>

              <div className="flex gap-6 ">
                <Link
                  to="https://www.instagram.com/laterrazadelacasa/"
                  target="_blank"
                >
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate linktree fa fa-brands fa-instagram text-white text-4xl hover:text-orange-400"
                  ></i>
                </Link>

                <Link
                  to="https://www.facebook.com/laterrazadelacasa"
                  target="_blank"
                >
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate linktree fa fa-brands fa-facebook text-white text-4xl hover:text-blue-700"
                  ></i>
                </Link>
                <Link
                  to={"https://api.whatsapp.com/send?phone=3117164854"}
                  target="_blank"
                >
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate linktree fa fa-brands fa-whatsapp text-white text-4xl hover:text-green-500"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
          <PowerBy />
        </div>
      </div>
    </header>
  );
};

export default Header;
