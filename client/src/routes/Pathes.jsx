import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/pages/Dashboard";
import Home from "../pages/Home";
import Data from "../pages/dashboard/pages/Data";
import UiForm from "../pages/dashboard/pages/UiForm";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/datatable" element={<Data />} />
      <Route path="/form" element={<UiForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Pathes;
