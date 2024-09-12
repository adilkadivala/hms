import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <p>Welcome</p>
        {/* Link to the Admin Dashboard */}
        <NavLink to="/dashboard"> Admin Dashboard</NavLink>

        {/* Link to the Doctor Panel */}
        <NavLink to="/doctor/dashboard">Doctor Dashboard</NavLink>

        {/* Link to the Hospital Panel */}
        <NavLink to="/hospitals/dashboard">Hospital Dashboard</NavLink>
      </div>
    </>
  );
};

export default Home;
