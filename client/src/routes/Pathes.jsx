// AllRoutes.js
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Admin panel pages
import Dashboard from "../pages/dashboard/pages/Dashboard";
import Table from "../pages/dashboard/pages/Table";
import Hospitals from "../pages/dashboard/pages/Hospitals";
import Doctors from "../pages/dashboard/pages/Doctors";
import Departments from "../pages/dashboard/pages/Departments";
import Appointment from "../pages/dashboard/pages/Appointment";
import Faculty from "../pages/dashboard/pages/Faculty";
import Doctor_by_Hospital from "../pages/dashboard/pages/Doctor_by_hospital";
import Payment from "../pages/dashboard/pages/Payment";
import Patients from "../pages/dashboard/pages/Patients";

// // Doctor panel pages
import DoctorDashboard from "../pages/dashboard/doctors/Dashboard";

// // Hospital panel pages
import HospitalDashboard from "../pages/dashboard/hospitals/Dashboard";

const AllRoutes = () => {
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
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

      {/* Hospital Routes */}
      <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
    </Routes>
  );
};

export default AllRoutes;
