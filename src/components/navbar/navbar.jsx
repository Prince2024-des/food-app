import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="navbar-menu"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#explore-dounload"
          onClick={() => setMenu("mobile app")}
          className={menu === "mobile app" ? "active " : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link>
            <img src={assets.basket_icon} alt="" />
            </Link>
            <div className="dot">0</div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
