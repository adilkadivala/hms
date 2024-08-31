import { useState } from "react";
import SidebarNavbar from "../layout/SidebarNavbar";
import "../../../assets/setting.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Notification() {
  const [tab, setTab] = useState("smtp");

  const handleChangeTab = (tabName) => {
    setTab(tabName);
  };
  return (
    <>
      <SidebarNavbar />

      <div className="hero-section">
        <div className="user-search">
          <div id="user-tag">
            <h4>Notification Setting</h4>
          </div>
          <div id="search-inner-hero-section">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <a className="add-button" style={{ cursor: "pointer" }}>
            <span className="text">Save</span>
          </a>
        </div>

        <div className="notification_sec_head">
          <ul className="smtp_email">
            <li onClick={() => handleChangeTab("smtp")}>
              <NavLink>SMTP SETTING</NavLink>
            </li>
            |
            <li onClick={() => handleChangeTab("email")}>
              <NavLink>Email Template</NavLink>
            </li>
          </ul>
        </div>

        {tab == "smtp" && (
          <div className="main_pay_sec" id="smp">
            <div className="protocol">
              <span>Protocol</span>
              <span id="etc">(smtp, ssmtp, mail)*</span>
              <p>
                <input type="text" placeholder="smtp" className="call6input" />
              </p>
            </div>

            <div className="protocol" id="pro_2">
              <span>Currency</span>
              <p>
                <select name="currency" id="currency" form="currencyform">
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="JPY">Japanese Yen (JPY)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="AUD">Australian Dollar (AUD)</option>
                  <option value="CAD">Canadian Dollar (CAD)</option>
                </select>
              </p>
            </div>

            <div className="protocol" id="pro_2">
              <span>SMTP Host</span>
              <p>
                <input
                  type="text"
                  placeholder="admire.herosite.pro"
                  className="call8input"
                />
              </p>
            </div>

            <div className="protocol" id="pro_2">
              <span>Port</span>
              <p>
                <input type="number" placeholder="465" className="call3input" />
              </p>
            </div>

            <div className="protocol" id="pro_2">
              <span>Email Form</span>
              <p>
                <input
                  type="email"
                  placeholder="support@example.com"
                  className="call8input"
                />
              </p>
            </div>

            <div className="protocol" id="pro_2">
              <span>Username</span>
              <p>
                <input
                  type="text"
                  placeholder="support@example.com"
                  className="call8input"
                />
              </p>
            </div>

            <div className="protocol" id="pro_2">
              <span>Password</span>
              <p>
                <input
                  type="password"
                  placeholder="****"
                  className="call8input"
                />
              </p>
            </div>
          </div>
        )}

        {/* Email Table */}

        {tab == "email" && (
          <table className="email_table">
            <thead className="email_thead">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Lessons</th>
                <th id="action">Action</th>
              </tr>
            </thead>

            <tbody className="email_tbody">
              <tr>
                <td>1</td>
                <td>
                  <h5 className="h5">New user registration</h5>
                  <p>Get Notification on new user Register</p>
                </td>
                <td>
                  <p>Admin: New User Registered</p>
                  <p>User: Registered Successfully</p>
                </td>
                <td className="lesson">
                  <p>To admin: New user registered </p>
                  <p>[user_name] User email: [user_email]</p>
                  <p>
                    To user: You have successfully registered with us at
                    [system_name].
                  </p>
                </td>
                <td id="edit">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <h5 className="h5">Email verification</h5>
                  <p>Get Notification on email verification</p>
                </td>
                <td>
                  <p>To user: Email verification code</p>
                </td>
                <td className="lesson">
                  <p>
                    To user: You have received an email verification code. Your
                    verification code is [email_verification_code]
                  </p>
                </td>
                <td id="edit">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Notification;
