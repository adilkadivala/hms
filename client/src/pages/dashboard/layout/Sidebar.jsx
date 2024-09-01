// src/components/Sidebar.jsx
import React from "react";
import { useTheme } from "../../../storage/Theme";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`h-full w-64 p-4 fixed lg:relative transition-transform duration-300 ease-in-out transform  ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } ${
        darkMode
          ? "bg-gray-900 text-white border-r-[0.2px] border-b-white "
          : "bg-gray-100 text-black border-r-[0.2px] border-indigo-500 "
      }`}
    >
      <button className="lg:hidden mb-4" onClick={toggleSidebar}>
        Close
      </button>
      <ul>
        <li className="mb-4">
          <a href="#" className="block">
            Dashboard
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block">
            Settings
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block">
            Profile
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="block">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
