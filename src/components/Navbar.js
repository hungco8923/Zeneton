import { useState } from "react";
import Logo from "../resources/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
      document.getElementById("navbar").style.backgroundColor = "white";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }

    if (showNavbar === false) {
      if (prevScrollPos >= currentScrollPos && showNavbar === false) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-79px";
      }
    }
    prevScrollPos = currentScrollPos;
  };

  console.log(showNavbar);

  return (
    <div className="navbar" id="navbar">
      <div className="navbar__list container">
        <div className="navbar__list__icon">
          <FontAwesomeIcon icon={faBars} onClick={handleShowNavbar} />
        </div>
        <div className={`navbar__list__menu ${showNavbar && "active"}`}>
          <div className="navbar__list__menu__items" onClick={handleShowNavbar}>
            <Link to="/" class="hover-underline-animation">
              Home
            </Link>
          </div>
          <div className="navbar__list__menu__items" onClick={handleShowNavbar}>
            <Link to="products/briefs" class="hover-underline-animation">
              Briefs
            </Link>
          </div>
          <div className="navbar__list__menu__items" onClick={handleShowNavbar}>
            <Link to="products/boxers" class="hover-underline-animation">
              Boxers
            </Link>
          </div>
          <div className="navbar__list__menu__items" onClick={handleShowNavbar}>
            <Link to="about-us" class="hover-underline-animation">
              About Us
            </Link>
          </div>
        </div>
        <div
          className="navbar__list__logo"
          onClick={showNavbar ? handleShowNavbar : undefined}
        >
          <Link to="/" class="hover-underline-animation">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar__list__ultilities">
          <div
            className="navbar__list__ultilities__items"
            onClick={handleShowNavbar}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div
            className="navbar__list__ultilities__items"
            onClick={handleShowNavbar}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
