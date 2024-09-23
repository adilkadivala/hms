import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/global.css";
import { useTheme } from "../../../storage/Theme";

const Sidebar = ({ isOpen }) => {
  const { darkMode } = useTheme();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const activeStyle = ({ isActive }) => {
    if (isActive) {
      return { borderBottom: "1px solid #0086c4", borderBottomWidth: "3px" };
    } else {
      return {};
    }
  };

  return (
    <section
      className={`h-full fixed lg:relative transition-transform duration-150 ease-in-out transform flex flex-col align-middle text-left lg:p-4 rounded-r ${
        isOpen
          ? "translate-x-0 w-64"
          : "-translate-x-full lg:translate-x-0 lg:w-16"
      } ${
        darkMode
          ? "bg-secondry text-white border-r-[0.2px]"
          : "bg-gray-100 text-black border-r-[0.2px] "
      }`}
    >
      <div className="pt-4 h-[60vh] space-y-4 overflow-y-auto hide-scrollbar">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              className="flex items-center space-x-4 pb-3"
              style={activeStyle}
              to="/dashboard"
            >
              <i className="fa-solid fa-seedling text-primary dark:text-white"></i>
              {isOpen && (
                <span className="text-normal font-normal">Dashboard</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className="flex items-center space-x-4 pb-3"
              style={activeStyle}
            >
              <i className="fa-solid fa-user-doctor text-primary  dark:text-white"></i>
              {isOpen && <span className="text-normal">Doctors</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hospitals"
              className="flex items-center space-x-4 pb-3"
              style={activeStyle}
            >
              <i className="fa-solid fa-notes-medical  text-primary  dark:text-white"></i>
              {isOpen && (
                <span className="text-normal font-normal">Hospitals</span>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/appointments"
              className="flex items-center space-x-4 pb-3"
              style={activeStyle}
            >
              <i className="fa-regular fa-calendar-check text-primary  dark:text-white"></i>
              {isOpen && (
                <span className="text-normal font-normal">Appointment</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patients"
              className="flex items-center space-x-4 pb-3"
              style={activeStyle}
            >
              <i className="fa-solid fa-user-injured text-primary  dark:text-white"></i>
              {isOpen && (
                <span className="text-normal font-normal">Patients</span>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              className={`${
                isOpen
                  ? "flex items-center space-x-4"
                  : "flex items-center space-x-1"
              }`}
              onClick={() => handleDropdownToggle(0)}
            >
              <i className="fa-solid fa-tag text-primary  dark:text-white"></i>
              {isOpen && <span className="text-normal font-normal">UI</span>}
              <span className="ml-auto">
                {openDropdownIndex === 0 ? (
                  <i className="fa-solid fa-chevron-up "></i>
                ) : (
                  <i className="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </NavLink>
            <ul
              className={`${
                isOpen ? "pl-8 " : "pl-6"
              }space-y-2 transition-all duration-150 ${
                openDropdownIndex === 0
                  ? "max-h-screen"
                  : "max-h-0 overflow-hidden"
              } ${
                darkMode ? "bg-secondry text-white" : "bg-gray-100 text-black"
              }`}
            >
              <li>
                <NavLink
                  to="/table"
                  className="flex items-center space-x-4 pb-3"
                  style={activeStyle}
                >
                  <i className="fa-solid fa-table text-primary text-normal font-normal dark:text-white"></i>
                  {isOpen && <span>Table</span>}
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr className="border border-slate-400" />
      <div className="h-[10vh] mt-4">
        <ul>
          <li>
            <NavLink to="/account" className="flex items-center space-x-4 pb-3">
              <i className="fa-regular fa-circle-user text-primary  dark:text-white"></i>
              {isOpen && (
                <span className="text-normal font-normal">Account</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex items-center space-x-4">
              <i className="fa-solid fa-arrow-left text-red-700 "></i>
              {isOpen && (
                <span className="text-normal font-normal">Log out</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
