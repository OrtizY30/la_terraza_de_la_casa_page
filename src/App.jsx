import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Loading from "./components/Loading";

function App() {
  const { data } = useContext(AppContext);
  return (
    <div className="dark:bg-customDark relative z-[1]">
      <BrowserRouter>
      {data.length == 0 ? <Loading/>  : <Routing /> }
        
      </BrowserRouter>
    </div>
  );
}

export default App;
