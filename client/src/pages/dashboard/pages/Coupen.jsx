import { useState } from "react";
import SidebarNavbar from "../layout/SidebarNavbar";
import "../../../assets/addcoupen.css";
import "../../../assets/coupen.css";
import { pdfLogo, xLogo } from "../../../assets/images";
// import { NavLink } from "react-router-dom";

const CourseCoupon = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountType, setDiscountType] = useState("percentage");

  const generateRandomCode = () => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCouponCode(randomCode);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const [user, setUser] = useState([
    {
      coupon_code: "AGLY0GH",
      discount_persentage: "56",
      date: "10/10/2022",
      status: 0,
    },
    {
      coupon_code: "Q66AH9",
      discount_persentage: "23",
      date: "26/08/2024",
      status: 1,
    },
    {
      coupon_code: "FFKL456",
      discount_persentage: "89",
      date: "10/10/2022",
      status: 1,
    },
    {
      coupon_code: "AGLY0GH",
      discount_persentage: "56",
      date: "10/10/2022",
      status: 0,
    },
    {
      coupon_code: "Q66AH9",
      discount_persentage: "23",
      date: "26/08/2024",
      status: 1,
    },
    {
      coupon_code: "FFKL456",
      discount_persentage: "89",
      date: "10/10/2022",
      status: 1,
    },
    {
      coupon_code: "AGLY0GH",
      discount_persentage: "56",
      date: "10/10/2022",
      status: 0,
    },
    {
      coupon_code: "Q66AH9",
      discount_persentage: "23",
      date: "26/08/2024",
      status: 1,
    },
    {
      coupon_code: "FFKL456",
      discount_persentage: "89",
      date: "10/10/2022",
      status: 1,
    },
    {
      coupon_code: "AGLY0GH",
      discount_persentage: "56",
      date: "10/10/2022",
      status: 0,
    },
    {
      coupon_code: "Q66AH9",
      discount_persentage: "23",
      date: "26/08/2024",
      status: 1,
    },
    {
      coupon_code: "FFKL456",
      discount_persentage: "89",
      date: "10/10/2022",
      status: 1,
    },
    {
      coupon_code: "AGLY0GH",
      discount_persentage: "56",
      date: "10/10/2022",
      status: 0,
    },
    {
      coupon_code: "Q66AH9",
      discount_persentage: "23",
      date: "26/08/2024",
      status: 1,
    },
    {
      coupon_code: "FFKL456",
      discount_persentage: "89",
      date: "10/10/2022",
      status: 1,
    },
  ]);

  const handleStatusChange = (index) => {
    const updatedUser = [...user];
    updatedUser[index].status = updatedUser[index].status === 0 ? 1 : 0;
    setUser(updatedUser);
  };

  const addToggleModal = () => {
    setAddOpen(!addOpen);
  };

  const editToggleModal = () => {
    setEditOpen(!editOpen);
  };

  return (
    <>
      <SidebarNavbar />
      <div className="hero-section">
        <div className="user-search">
          <div id="user-tag">
            <h4>Course Coupons</h4>
          </div>
          <div id="search-inner-hero-section">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="hero-inner-logo">
            <img src={pdfLogo} />
            <img src={xLogo} />
          </div>
          <a
            onClick={addToggleModal}
            className="add-button"
            style={{ cursor: "pointer" }}
          >
            <span className="text">+ Add</span>
          </a>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style={{ width: "10%", paddingLeft: "10px" }}>
                  <h5>Id</h5>
                </th>
                <th style={{ width: "20%" }}>
                  <h5>Coupon code</h5>
                </th>
                <th style={{ width: "20%" }}>
                  <h5>Discount</h5>
                </th>
                <th style={{ width: "30%" }}>
                  <h5>Validity till</h5>
                </th>
                <th style={{ width: "10%" }}>
                  <h5>Status</h5>
                </th>
                <th style={{ width: "10%" }}>
                  <h5>Action</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((i, index) => {
                return (
                  <tr key={index}>
                    <td style={{ paddingLeft: "10px" }}>{index + 1}</td>
                    <td>{i.coupon_code}</td>
                    <td>{i.discount_persentage}</td>
                    <td>{i.date}</td>
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={i.status === 1}
                          onChange={() => handleStatusChange(index)}
                        />
                        <span className="slider"></span>
                      </label>
                    </td>
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
                            <a
                              onClick={() => {
                                editToggleModal();
                              }}
                              className="add-button"
                              style={{ cursor: "pointer" }}
                            >
                              <p>Edit</p>
                            </a>

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

        {/* Add Model */}
        {addOpen && (
          <div className="modal">
            <div className="add-coupon-container">
              <h3>Add Coupons</h3>
              <form className="coupon-form">
                <div className="form-group">
                  <label>
                    Coupon code<span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      value={couponCode}
                      placeholder="Enter coupon code"
                      onChange={(e) => setCouponCode(e.target.value)}
                      style={{ width: "71%", borderRadius: "4px 0px 0px 4px" }}
                    />
                    <button
                      type="button"
                      onClick={generateRandomCode}
                      className="generate-btn"
                    >
                      Generate random
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label style={{ marginBottom: "15px" }}>Discount Type</label>
                  <div className="discount-box">
                    <label>
                      <input
                        type="radio"
                        value="percentage"
                        checked={discountType === "percentage"}
                        onChange={() => setDiscountType("percentage")}
                      />
                      Percentage
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        value="amount"
                        checked={discountType === "amount"}
                        onChange={() => setDiscountType("amount")}
                      />
                      Amount
                    </label>
                  </div>
                </div>

                <div className="dis_exp">
                  {discountType === "percentage" && (
                    <div className="form-group discount">
                      <label>Discount percentage</label>
                      <div className="input-group">
                        <input type="number" placeholder="0" />
                        <span className="percentage-icon">%</span>
                      </div>
                    </div>
                  )}

                  {discountType === "amount" && (
                    <div className="form-group">
                      <label>Discount Amount</label>
                      <div className="input-group">
                        <input type="number" placeholder="0" />
                      </div>
                    </div>
                  )}
                  <div className="form-group date">
                    <label>
                      Expiry date<span className="required">*</span>
                    </label>
                    <input type="date" defaultValue="yy-mm-dd" />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                  <button onClick={addToggleModal} className="back-to-coupons">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit model */}
        {editOpen && (
          <div className="modal">
            <div className="add-coupon-container">
              <h3>Edit Coupon</h3>
              <form className="coupon-form">
                <div className="form-group">
                  <label>
                    Coupon code<span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      value={couponCode}
                      placeholder="Enter coupon code"
                      onChange={(e) => setCouponCode(e.target.value)}
                      style={{ width: "71%", borderRadius: "4px 0px 0px 4px" }}
                    />
                    <button
                      type="button"
                      onClick={generateRandomCode}
                      className="generate-btn"
                    >
                      Generate random
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label style={{ marginBottom: "15px" }}>Discount Type</label>
                  <div className="discount-box">
                    <label>
                      <input
                        type="radio"
                        value="percentage"
                        checked={discountType === "percentage"}
                        onChange={() => setDiscountType("percentage")}
                      />
                      Percentage
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        value="amount"
                        checked={discountType === "amount"}
                        onChange={() => setDiscountType("amount")}
                      />
                      Amount
                    </label>
                  </div>
                </div>

                {discountType === "percentage" && (
                  <div className="form-group">
                    <label>Discount percentage</label>
                    <div className="input-group">
                      <input type="number" placeholder="0" />
                      <span className="percentage-icon">%</span>
                    </div>
                  </div>
                )}

                {discountType === "amount" && (
                  <div className="form-group">
                    <label>Discount Amount</label>
                    <div className="input-group">
                      <input type="number" placeholder="0" />
                    </div>
                  </div>
                )}
                <div className="form-group">
                  <label>
                    Expiry date<span className="required">*</span>
                  </label>
                  <input type="date" defaultValue="2024-08-26" />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="update-btn">
                    Update
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      editToggleModal();
                    }}
                    className="back-to-coupons"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseCoupon;
