import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />
        <main
          className={`transition-all duration-150 ease-in-out flex-1 bg-gray-100 dark:bg-secondry text-black dark:text-white p-4 overflow-y-auto`}
        >
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
