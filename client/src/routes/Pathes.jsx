import { Routes, Route } from "react-router-dom";
import Page from "../pages/dashboard/Page";
import Home from "../pages/Home";
import Data from "../pages/dashboard/Data";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Page />} />
      <Route path="/datatable" element={<Data />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Pathes;
