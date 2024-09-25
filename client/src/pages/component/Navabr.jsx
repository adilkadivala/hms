import { NavLink } from "react-router-dom";
import { DashboardLogo } from "../../assets/images";
import Button from "../ui/Button";

const Navabr = () => {
  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return { borderBottom: "1px solid #0086c4", borderBottomWidth: "3px" };
    } else {
      return {};
    }
  };
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
        <NavLink
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
          to="/"
          style={activeStyle}
        >
          <img
            src={DashboardLogo}
            alt="icon"
            className="mix-blend-darken w-24 h-fit"
          />
        </NavLink>
        <div className="sm:order-3 flex items-center gap-x-2">
          <Button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-primary text-white"
          >
            <NavLink to="/" className="flex items-center gap-2">
              <i className="fa-solid fa-pen"></i>
              <p>Book Appointment</p>
            </NavLink>
          </Button>
          <Button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-primary text-white"
          >
            <NavLink to="/dashboard" className="flex items-center gap-2">
              <i className="fa-solid fa-user"></i>
              <p>register/login</p>
            </NavLink>
          </Button>
        </div>
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <NavLink to="/">List Doctor</NavLink>
            <NavLink to="/">List Hospital</NavLink>
            <NavLink to="/dashboard">dashboard</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navabr;
