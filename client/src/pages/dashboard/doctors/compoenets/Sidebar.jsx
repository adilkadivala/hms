import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../../assets/css/global.css";
import { useTheme } from "../../../../storage/Theme";

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
      <div className="pt-4 h-[60vh] space-y-4 overflow-y-auto hide-scrollbar">
        <ul>
          <li className="mb-4">
            <NavLink to="/dashboard" className="flex items-center space-x-4">
              <i className="fa-solid fa-seedling text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Dashboard</span>}
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink to="/account" className="flex items-center space-x-4">
              <i className="fa-regular fa-circle-user text-primary text-2xl dark:text-white"></i>
              {isOpen && <span className="text-lg">Profile</span>}
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border border-slate-400" />
      <div className="h-[10vh] mt-4">
        <ul>
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
