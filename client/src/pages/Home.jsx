import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <p>Welcome</p>
        {/* Link to the Admin Dashboard */}
        <NavLink to="/dashboard">Go to Admin Dashboard</NavLink>

        {/* Link to the Doctor Panel */}
        <NavLink to="/doctor/dashboard">Doctor Panel</NavLink>

        {/* Link to the Hospital Panel */}
        <NavLink to="/hospital/dashboard">Hospital Panel</NavLink>
      </div>
    </>
  );
};

export default Home;
