import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Routing from "./routes/Routing";

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
