import { useState } from "react";
import SidebarNavbar from "../layout/SidebarNavbar";
import { pdfLogo, printLogo, xLogo } from "../../../assets/images";

const Course = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const user = [
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
    {
      id: 1,
      name: "Rahul",
      address: "Delhi",
      date: "10/10/2022",
      type: "Electric",
      switch: "On",
      status: "Active",
    },
  ];
  return (
    <>
      <SidebarNavbar />
      <div className="hero-section">
        <div className="user-search">
          <div id="user-tag">
            <h4>Course</h4>
          </div>
          <div id="search-inner-hero-section">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="user-instructor-top">
          <div className="user-instructor">
            <p>Course | Instructor</p>
          </div>
          <div className="hero-inner-logo">
            <img src={pdfLogo} />
            <img src={xLogo} />
            <img src={printLogo} />
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>
                  <h5>ID</h5>
                </th>
                <th>
                  <h5>NAME</h5>
                </th>
                <th>
                  <h5>ADDRESS</h5>
                </th>
                <th>
                  <h5>DATE</h5>
                </th>
                <th>
                  <h5>TYPE</h5>
                </th>
                <th>
                  <h5>SWITCH</h5>
                </th>
                <th>
                  <h5>&nbsp; &nbsp; &nbsp;STATUS</h5>
                </th>
                <th>
                  <h5>ACTION</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.address}</td>
                    <td>{i.date}</td>
                    <td>{i.type}</td>
                    <td>{i.switch}</td>
                    <td>{i.status}</td>
                    <td>
                      <div
                        className={`menu-container ${
                          activeDropdown === index ? "active" : ""
                        }`}
                      >
                        <div
                          className="menu-button"
                          onClick={() => toggleDropdown(index)}
                        >
                          {" "}
                          ⋮{" "}
                        </div>
                        {activeDropdown === index && (
                          <div className="menu-content">
                            <p>Edit</p>
                            <p>Delete</p>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="footer-text">
          <p>Showing 1-09 of 78</p>
          <span className="next-page-icon">
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Course;
