import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <p>Welcome</p>
        {/* Link to the Admin Dashboard */}
        <NavLink to="/dashboard"> Admin Dashboard</NavLink>
      </div>
    </>
  );
};

export default Home;
