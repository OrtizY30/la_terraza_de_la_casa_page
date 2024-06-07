import Categories from "../components/Categories";
import { useParams } from "react-router-dom";
import Todos from "../components/Todos";
import MenuOtro from "../components/MenuOtro";

const Menu = ({ setOpcion }) => {
  const { param } = useParams();

  return (
    <div className=" w-full shadow mx-auto pt-8 relative flex md:flex-col">
      <Categories param={param} setOpcion={setOpcion} />
      {param === "todos" ? <Todos /> : <MenuOtro param={param} />}
    </div>
  );
};

export default Menu;
