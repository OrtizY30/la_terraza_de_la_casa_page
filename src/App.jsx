import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="dark:bg-customDark relative z-[1]">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
