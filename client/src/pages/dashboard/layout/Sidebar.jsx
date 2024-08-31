import { useState } from "react";
import "../../../assets/sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <>
      <aside className="sidebar active">
        <div className="sidebar-top">
          <ul>
            <li className="main-li">
              <a href="#" onClick={() => toggleDropdown("dropdown1")}>
                <i className="fa-solid fa-gauge-high"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="main-li">
              <a href="#" onClick={() => toggleDropdown("course")}>
                <i className="fa-solid fa-border-all"></i>
                <span>Course</span>
                <i
                  className={`fa-solid ${
                    activeDropdown === "course"
                      ? "fa-angle-up"
                      : "fa-angle-down"
                  }`}
                ></i>
              </a>
              {activeDropdown === "course" && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to={"/course"}>
                      <i className="fa-solid fa-caret-right"></i>Manage Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/add-course"}>
                      <i className="fa-solid fa-caret-right"></i>Add New Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/course-category"}>
                      <i className="fa-solid fa-caret-right"></i>Course Category
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/course-coupon"}>
                      <i className="fa-solid fa-caret-right"></i>Coupons
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="main-li">
              <a>
                <i className="fa-solid fa-registered"></i>
                <NavLink to={"/enrollements"}>Enrollements</NavLink>
              </a>
            </li>

            <li className="main-li">
              <a>
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                <NavLink to={"/inquiry"}>Inquiry</NavLink>
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="sidebar-pages">
          <p>PAGES</p>
          <ul>
            <li className="main-li">
              <a href="#">
                <i className="fa-solid fa-gift"></i>
                <span>Pricing</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-regular fa-calendar-days"></i>
                <span>Calender</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-regular fa-clipboard"></i>
                <span>To-Do</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-regular fa-id-badge"></i>
                <span>Contact</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-regular fa-money-bill-1"></i>
                <span>Invoice</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-solid fa-chart-simple"></i>
                <span>UI Elements</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-solid fa-users"></i>
                <span>Team</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-solid fa-table-cells"></i>
                <span>Table</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </li>
          </ul>
        </div> */}

        <div className="sidebar-bottom">
          <ul>
            <li className="main-li">
              <a href="#" onClick={() => toggleDropdown("setting")}>
                <i className="fa-solid fa-gear"></i>
                <span>Setting</span>
                <i
                  className={`fa-solid ${
                    activeDropdown === "setting"
                      ? "fa-angle-up"
                      : "fa-angle-down"
                  }`}
                ></i>
              </a>
              {activeDropdown === "setting" && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to={"/payment-setting"}>
                      <i className="fa-solid fa-caret-right"></i>Payment Setting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/notification-setting"}>
                      <i className="fa-solid fa-caret-right"></i>Notification
                      Setting
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="main-li">
              <a href="#">
                <i className="fa-solid fa-power-off"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
