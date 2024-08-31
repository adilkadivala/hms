
import "../../../assets/setting.css";
import SidebarNavbar from "../layout/SidebarNavbar";

function Payment() {
  return (
    <>
      <SidebarNavbar />

      <div className="hero-section">
        <div className="user-search">
          <div id="user-tag">
            <h4>Payment Setting</h4>
          </div>
          <div id="search-inner-hero-section">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="main_pay_sec">
          <div className="currency_page">
            <div className="currency_input">
              <h6 className="h6">Currency</h6>
              <select name="cars" id="cars" form="carform">
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="GBP">British Pound (GBP)</option>
                <option value="AUD">Australian Dollar (AUD)</option>
                <option value="CAD">Canadian Dollar (CAD)</option>
              </select>
            </div>

            <div className="cur_posi">
              <h6 className="h6">Currency Position</h6>

              <input
                type="radio"
                name="fav_language"
                value="HTML"
                className="cur_sel"
              />
              <label htmlFor="left" className="text1">
                Left
              </label>
              <input
                type="radio"
                name="fav_language"
                value="CSS"
                className="cur_sel"
                id="right"
              />
              <label htmlFor="right" className="text1">
                Right
              </label>
            </div>
          </div>

          <div className="strip_page">
            <h6 className="str_text">STRIPE</h6>

            <div className="currency_input2" id="strip_cur">
              <h6 className="h6">Currency</h6>
              <div className="carrency_div">
                <select name="currency" id="currency" form="currencyform">
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="JPY">Japanese Yen (JPY)</option>
                  <option value="GBP">British Pound (GBP)</option>
                  <option value="AUD">Australian Dollar (AUD)</option>
                  <option value="CAD">Canadian Dollar (CAD)</option>
                </select>
              </div>
              <div className="priv">
                <p>Private Test Key</p>
                <input
                  type="text"
                  placeholder="Private Test Key"
                  className="call12input"
                />
              </div>{" "}
              <div className="priv">
                <p>Public Test Key</p>
                <input
                  type="text"
                  placeholder="Public Test Key"
                  className="call12input"
                />
              </div>{" "}
              <div className="priv">
                <p>Private Live Key</p>
                <input
                  type="text"
                  placeholder="Private Live Key"
                  className="call12input"
                />
              </div>{" "}
              <div className="priv">
                <p>Public Live Key</p>
                <input
                  type="text"
                  placeholder="Public Live Key"
                  className="call12input"
                />
              </div>
            </div>

            <div className="status_test">
              <div className="status">
                <p>Status :</p>
                <input
                  type="radio"
                  name="fav_language"
                  value="HTML"
                  className="status_icon"
                />
                <label htmlFor="enable" className="s_icon">
                  Enable
                </label>
                <input
                  type="radio"
                  name="fav_language"
                  value="CSS"
                  id="right"
                />
                <label htmlFor="disable" className="s_icon">
                  Disable
                </label>
              </div>

              <div className="status" id="test">
                <p>Test Mode :</p>
                <input
                  type="radio"
                  name="fav_language"
                  value="HTML"
                  className="status_icon"
                />
                <label htmlFor="enable" className="s_icon">
                  Enable
                </label>
                <input
                  type="radio"
                  name="fav_language"
                  value="CSS"
                  id="right"
                />
                <label htmlFor="disable" className="s_icon">
                  Disable
                </label>
              </div>
            </div>

            <button className="text">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
