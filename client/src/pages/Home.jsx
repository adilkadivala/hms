import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <NavLink to="/dashboard">Go to Dashboard</NavLink>
    </>
  );
};

export default Home;
