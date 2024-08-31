import { BrowserRouter } from "react-router-dom";
import Pathes from "./routes/Pathes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Pathes />
    </BrowserRouter>
  );
}

export default App;
