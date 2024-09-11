import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <p>Welcome</p>
        {/* Link to the Admin Dashboard */}
        <NavLink to="/dashboard">Go to Admin Dashboard</NavLink>

        {/* Link to the Doctor Panel */}
        <NavLink to="/doctors/dashboard">Doctor Panel</NavLink>

        {/* Link to the Hospital Panel */}
        <NavLink to="/hospitals/dashboard">Hospital Panel</NavLink>
      </div>
    </>
  );
};

export default Home;
