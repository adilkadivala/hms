import { BrowserRouter } from "react-router-dom";
import Pathes from "./routes/Pathes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Pathes />
    </BrowserRouter>
  );
}

export default App;
