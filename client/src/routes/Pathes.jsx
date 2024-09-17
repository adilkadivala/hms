// AllRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Admin panel pages
import Dashboard from "../pages/dashboard/pages/Dashboard";
import Hospitals from "../pages/dashboard/pages/Hospitals";
import Doctors from "../pages/dashboard/pages/Doctors";
import Appointment from "../pages/dashboard/pages/Appointment";
import Patients from "../pages/dashboard/pages/Patients";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointments" element={<Appointment />} />
      <Route path="/patients" element={<Patients />} />
    </Routes>
  );
};

export default Pathes;
