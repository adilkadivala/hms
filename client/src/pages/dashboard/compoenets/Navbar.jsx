import React from "react";
import { useTheme } from "../../../storage/Theme";
import { DashboardLogo } from "../../../assets/images";

const Navbar = ({ toggleSidebar, isOpen }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        darkMode
          ? "bg-secondry text-white border-b-[0.2px] "
          : "bg-gray-100 text-black border-b-[0.2px] "
      }`}
    >
      <div className="flex gap-24">
        <div className="text-lg font-bold">
          <img
            src={DashboardLogo}
            alt="icon"
            className="mix-blend-darken w-36 h-fit"
          />
        </div>

        <button className="mr-4 " onClick={toggleSidebar}>
          <i
            className={`fa-solid ${isOpen ? "fa-bars" : "fa-chevron-right"}`}
          ></i>
        </button>
      </div>
      <button
        onClick={toggleTheme}
        className={`${
          darkMode ? "text-white" : "text-indigo-400"
        }  p-2 rounded border-none`}
      >
        <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`} />
      </button>
    </nav>
  );
};

export default Navbar;
