import { pdfLogo, xLogo } from "../../../assets/images";

const CourseCategory = () => {
  return (
    <>
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
          // onClick={addToggleModal}
          className="add-button"
          style={{ cursor: "pointer" }}
        >
          <span className="text">+ Add</span>
        </a>
      </div>
    </>
  );
};

export default CourseCategory;
