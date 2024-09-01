// src/components/Navbar.jsx
import React from "react";
import { useTheme } from "../../../storage/Theme";

const Navbar = ({ toggleSidebar }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        darkMode
          ? "bg-secondry text-white border-b-[0.2px] border-b-white "
          : "bg-gray-100 text-black border-b-[0.2px] border-indigo-500"
      }`}
    >
      <button className="lg:hidden mr-4" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="text-lg font-bold">My Dashboard</div>
      <button
        onClick={toggleTheme}
        className="bg-primary text-white p-2 rounded border-none"
      >
        <i className={`fa-solid ${darkMode ? "fa-sun" : "fa-moon"}`} />
      </button>
    </nav>
  );
};

export default Navbar;
