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
      className={`h-full fixed lg:relative transition-transform duration-150 ease-in-out transform flex flex-col align-middle text-left lg:p-4 ${
        isOpen
          ? "translate-x-0 w-64"
          : "-translate-x-full lg:translate-x-0 lg:w-16"
      } ${
        darkMode
          ? "bg-secondry text-white border-r-[0.2px] border-b-white"
          : "bg-gray-100 text-black border-r-[0.2px] border-indigo-500"
      }`}
    >
      <div className="pt-4 h-[60vh] space-y-4">
        <ul>
          <li className="mb-4">
            <NavLink to="/datatable" className="flex items-center space-x-4">
              <i className="fa-solid fa-tag text-primary text-2xl"></i>
              <span className="text-lg">Dashboard</span>
            </NavLink>
          </li>

          <li className="mb-4">
            <NavLink
              to="#"
              className="flex items-center space-x-4"
              onClick={() => handleDropdownToggle(0)}
            >
              <i className="fa-solid fa-tag text-primary text-2xl"></i>
              <span className="text-lg">Profile</span>
              <span className="ml-auto">
                {openDropdownIndex === 0 ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </NavLink>
            <ul
              className={`pl-8 space-y-2 transition-all duration-150 ${
                openDropdownIndex === 0
                  ? "max-h-screen"
                  : "max-h-0 overflow-hidden"
              } ${
                darkMode ? "bg-secondry text-white" : "bg-gray-100 text-black"
              }`}
            >
              <li>
                <NavLink to="/" className="flex items-center space-x-4">
                  <i className="fa-solid fa-tag text-primary text-lg"></i>
                  <span>Table</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center space-x-4">
                  <i className="fa-solid fa-tag text-primary text-lg"></i>
                  <span>Change Password</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="flex items-center space-x-4">
                  <i className="fa-solid fa-tag text-primary text-lg"></i>
                  <span>Logout</span>
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
            <NavLink to="/" className="flex items-center space-x-4">
              <i className="fa-solid fa-tag text-primary text-2xl"></i>
              <span className="text-lg">Account</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/" className="flex items-center space-x-4">
              <i className="fa-solid fa-tag text-primary text-2xl"></i>
              <span className="text-lg">Log out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
