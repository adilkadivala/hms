import { Routes, Route } from "react-router-dom";

// web
import Home from "../pages/Home";
// Admin panel pages
import Dashboard from "../pages/dashboard/pages/Dashboard";
import Hospitals from "../pages/dashboard/pages/Hospitals";
import Doctors from "../pages/dashboard/pages/Doctors";
import Drprofile from "../pages/dashboard/pages/Drprofile";
import Patients from "../pages/dashboard/pages/Patients";
import Appointment from "../pages/dashboard/pages/Appointment";

// forms
import DrProfileForm from "../pages/dashboard/pages/DrProfileForm";
import HospitalForm from "../pages/dashboard/pages/HospitalForm";
import AppointmentForm from "../pages/dashboard/pages/AppointmentForm";

const Pathes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointments" element={<Appointment />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/profile/:id" element={<DrProfileForm />} />
      <Route path="/profile" element={<DrProfileForm />} />
      <Route path="/dr-profile/:id" element={<Drprofile />} />
      <Route path="/hospital-profile/:id" element={<HospitalForm />} />
      <Route path="/hospital-profile" element={<HospitalForm />} />
      <Route path="/appointment-form" element={<AppointmentForm />} />
      <Route path="/appointment-form/:id" element={<AppointmentForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pathes;

function NotFound() {
  return (
    <div className="flex justify-center items-center text-4xl text-red-600 h-[100vh] w-[100vw]">
      Page Not Found 😒
    </div>
  );
}
