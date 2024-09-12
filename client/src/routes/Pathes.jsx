// AllRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Admin panel pages
import Dashboard from "../pages/dashboard/admin/pages/Dashboard";
import Table from "../pages/dashboard/admin/pages/Table";
import Hospitals from "../pages/dashboard/admin/pages/Hospitals";
import Doctors from "../pages/dashboard/admin/pages/Doctors";
import Departments from "../pages/dashboard/admin/pages/Departments";
import Appointment from "../pages/dashboard/admin/pages/Appointment";
import Faculty from "../pages/dashboard/admin/pages/Faculty";
import Doctor_by_Hospital from "../pages/dashboard/admin/pages/Doctor_by_hospital";
import Payment from "../pages/dashboard/admin/pages/Payment";
import Patients from "../pages/dashboard/admin/pages/Patients";

// // Doctor panel pages
import DoctorPanel from "../pages/dashboard/doctors/pages/Dashboard";

// // Hospital panel pages
import HospitalPanel from "../pages/dashboard/hospitals/pages/Dashboard";

const Pathes = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Admin Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/table" element={<Table />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/appointments" element={<Appointment />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/faculties" element={<Faculty />} />
      <Route path="/do_by_hos" element={<Doctor_by_Hospital />} />
      <Route path="/payments" element={<Payment />} />

      {/* Doctor Routes */}
      <Route path="/doctors/dashboard" element={<DoctorPanel />} />

      {/* Hospital Routes */}
      <Route path="/hospitals/dashboard" element={<HospitalPanel />} />
    </Routes>
  );
};

export default Pathes;
