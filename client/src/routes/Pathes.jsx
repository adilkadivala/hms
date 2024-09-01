import { Routes, Route } from "react-router-dom";
import Page from "../pages/dashboard/Page";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
};

export default Pathes;
