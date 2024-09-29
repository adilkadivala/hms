import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// web

const Home = lazy(() => import("../pages/Home"));

// Admin panel pages

const Dashboard = lazy(() => import("../pages/dashboard/pages/Dashboard"));
const Hospitals = lazy(() => import("../pages/dashboard/pages/Hospitals"));
const Doctors = lazy(() => import("../pages/dashboard/pages/Doctors"));
const Appointment = lazy(() => import("../pages/dashboard/pages/Appointment"));
const Patients = lazy(() => import("../pages/dashboard/pages/Patients"));

// forms
const DrProfileForm = lazy(() =>
  import("../pages/dashboard/pages/DrProfileForm")
);
const HospitalForm = lazy(() =>
  import("../pages/dashboard/pages/HospitalForm")
);
const AppointmentForm = lazy(() =>
  import("../pages/dashboard/pages/AppointmentForm")
);

const Pathes = () => {
  return (
    <Suspense fallback="Loading ...">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/profile" element={<DrProfileForm />} />
        <Route path="/hospital-profile" element={<HospitalForm />} />
        <Route path="/appointment-form" element={<AppointmentForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Pathes;

function NotFound() {
  return (
    <div className="flex justify-center items-center text-4xl text-red-600 h-[100vh] w-[100vw]">
      Not Found 😒
    </div>
  );
}
