import React, { useState } from "react";
import { useTheme } from "../../../storage/Theme";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { darkMode } = useTheme();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <section
      className={`h-full w-64 p-4 fixed lg:relative transition-transform duration-150 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } ${
        darkMode
          ? "bg-secondry text-white border-r-[0.2px] border-b-white "
          : "bg-gray-100 text-black border-r-[0.2px] border-indigo-500 "
      }`}
    >
      <button className="lg:hidden mb-4" onClick={toggleSidebar}>
        Close
      </button>

      <ul>
        <li className="mb-4">
          <a href="#" className="block">
            <i className="fa-solid fa-tag text-primary"></i> Dashboard
          </a>
        </li>

        <li className="mb-4 relative">
          <a href="#" className="block" onClick={() => handleDropdownToggle(0)}>
            <i className="fa-solid fa-tag text-primary"></i> Profile
            <span className="ml-2 ">
              {openDropdownIndex === 0 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-right"></i>
              )}
            </span>
          </a>
          <ul
            className={`absolute top-full left-0 border border-slate-500 p-2 ${
              openDropdownIndex === 0 ? "block" : "hidden"
            } ${
              darkMode ? "bg-secondry text-white" : "bg-gray-100 text-black"
            }`}
          >
            <li className="mb-2">
              <a href="#" className="block">
                <i className="fa-solid fa-tag text-primary"></i> Profile
                Settings
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block">
                <i className="fa-solid fa-tag text-primary"></i> Change Password
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <i className="fa-solid fa-tag text-primary"></i> Logout
              </a>
            </li>
          </ul>
        </li>
        <li
          className={`mb-4 relative ${
            openDropdownIndex === 0 ? "mt-28" : "mt-0"
          } transition-all duration-150`}
        >
          <a href="#" className="block" onClick={() => handleDropdownToggle(1)}>
            <i className="fa-solid fa-tag text-primary"></i> Profile
            <span className="ml-2 ">
              {openDropdownIndex === 1 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-right"></i>
              )}
            </span>
          </a>
          <ul
            className={`absolute top-full left-0  border border-slate-500 p-2 ${
              openDropdownIndex === 1 ? "block" : "hidden"
            } ${
              darkMode ? "bg-secondry text-white" : "bg-gray-100 text-black"
            }`}
          >
            <li className="mb-2">
              <a href="#" className="block">
                <i className="fa-solid fa-tag text-primary"></i> Profile
                Settings
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block">
                <i className="fa-solid fa-tag text-primary"></i> Change Password
              </a>
            </li>
            <li>
              <a href="#" className="block">
                <i className="fa-solid fa-tag text-primary"></i> Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
