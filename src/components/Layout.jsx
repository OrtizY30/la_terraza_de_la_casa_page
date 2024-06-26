import Header from "./Header";
import { Outlet } from "react-router-dom";
import BottomBar from "./BottomBar";
import LogoWs from "./LogoWs";
import PowerBy from "./PowerBy";

const Layout = () => {
  return (
    <div className="relative">
      <Header />
      <div
        className=" min-h-screen overflow-hidden relative w-full -mb-10"
        // style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="w-full min-h-[70vh] relative pb-10">
          <Outlet />
        </div>
        <div className="absolute bottom-0 w-full">

        <PowerBy />
        </div>
      </div>

      <LogoWs />
      <BottomBar />
    </div>

    // </div>
  );
};

export default Layout;
