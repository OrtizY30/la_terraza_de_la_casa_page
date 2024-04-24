import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import "boxicons";

const Footer = () => {
  return (
    <footer className="footer flex flex-col justify-center items-center space-y-6 p-10 bg-neutral-800 -mb-28">
      <div className="flex flex-col md:flex-row border-b justify-between border-gray-50 w-full pb-5 items-center md:items-start gap-5">
        <div className="flex flex-col ">
          <p className="text-white mb-3 text-xl text-center md:text-start">
            Visitanos
          </p>
          <div className=" flex items-center space-x-2 mb-5">
            <box-icon name="map" color="#FB923C"></box-icon>
            <p className="text-white text-sm">
              <Link to="https://maps.app.goo.gl/TM7ZbWHPNxc3dEj4A" target="_blank">Carrera 53 # 85 - 77 </Link>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <box-icon name="map" color="#FB923C"></box-icon>
            <p className="text-white text-sm">
              <Link href="https://maps.app.goo.gl/wddFeBJPJgermYwB9" target="_blank">CC Buena vista I - Plaza de comida</Link>
            </p>
          </div>
        </div>

        <div className="md:-ml-60">
          <div>
            <p className="text-white mb-3 text-xl text-center">Horario</p>
            <p className="text-white text-sm">11:30 am - 11:00 pm</p>
          </div>
        </div>
       


      
        <div className="flex gap-3 ">
          <Link to="https://www.instagram.com/laterrazadelacasa/">
            <box-icon type="logo" color="#FB923C" size='lg' name="instagram"></box-icon>
          </Link>

          <Link to="https://www.facebook.com/laterrazadelacasa">
            <box-icon type="logo" color="#FB923C" size='lg' name="facebook"></box-icon>
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row justify-between w-full">
        <img src={logo} alt="" width={200} className="imgFotter" />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4043967560365!2d-74.82055532559968!3d11.008254854876084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42daf05767d91%3A0xb05c0012df9a3447!2sLa%20Terraza%20de%20la%20Casa!5e0!3m2!1ses!2sco!4v1713828370962!5m2!1ses!2sco" width="300" height="250" style={{margin: 2 + 'em'}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </footer>
  );
};

export default Footer;
