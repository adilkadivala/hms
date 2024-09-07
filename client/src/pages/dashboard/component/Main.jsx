import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import "../../../assets/css/global.css";
import Sidebar from "../layout/Sidebar";
import { useTheme } from "../../../storage/Theme";

const Layout = ({ children }) => {
  const { darkMode } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className={` flex flex-col h-screen ${darkMode ? "dark" : ""}`}>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <main
          className={`transition-all duration-150 ease-in-out flex-1 bg-gray-100 dark:bg-secondry text-black dark:text-white p-4 overflow-y-scroll overscroll-y-auto hide-scrollbar rounded h-[41rem]`}
        >
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
