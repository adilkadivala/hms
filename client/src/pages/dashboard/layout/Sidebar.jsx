import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../storage/Theme";

const Sidebar = ({ isOpen }) => {
  const { darkMode } = useTheme();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
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
      <div className="pt-4 h-[60vh] space-y-4 overflow-y-auto">
        <ul>
          <li className="mb-4">
            <NavLink to="/dashboard" className="flex items-center space-x-4">
              <i className="fa-solid fa-seedling text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Dashboard</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/doctors" className="flex items-center space-x-4">
              <i className="fa-solid fa-user-doctor text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Doctors</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/hospitals" className="flex items-center space-x-4">
              <i className="fa-solid fa-hospital text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Hospitals</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/patients" className="flex items-center space-x-4">
              <i className="fa-solid fa-user-injured text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Patients</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/departments" className="flex items-center space-x-4">
              <i className="fa-solid fa-house-medical text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Departments</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/appointments" className="flex items-center space-x-4">
              <i className="fa-regular fa-calendar-check text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Appointment</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/faculties" className="flex items-center space-x-4">
              <i className="fa-solid fa-hospital-user text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">faculties</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/do_by_hos" className="flex items-center space-x-4">
              <i className="fa-solid fa-users text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Doctor by Hospital</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/payments" className="flex items-center space-x-4">
              <i className="fa-solid fa-money-check-dollar text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Payment</span>}
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="#"
              className={`${
                isOpen
                  ? "flex items-center space-x-4"
                  : "flex items-center space-x-1"
              }`}
              onClick={() => handleDropdownToggle(0)}
            >
              <i className="fa-solid fa-tag text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">UI</span>}
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
                <NavLink to="/table" className="flex items-center space-x-4">
                  <i className="fa-solid fa-table text-primary text-lg dark:text-white"></i>
                  {isOpen && <span>Table</span>}
                </NavLink>
              </li>
              <li>
                <NavLink to="/form" className="flex items-center space-x-4">
                  <i className="fa-solid fa-tag text-primary text-lg dark:text-white"></i>
                  {isOpen && <span>Form</span>}
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr className="border border-slate-400" />
      <div className="h-[10vh] mt-4">
        <ul>
          <li className="mb-4">
            <NavLink to="/account" className="flex items-center space-x-4">
              <i className="fa-regular fa-circle-user text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Account</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/" className="flex items-center space-x-4">
              <i className="fa-solid fa-arrow-left text-red-700 text-2xl"></i>
              {isOpen && <span className="text-lg">Log out</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
