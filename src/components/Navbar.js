import Logo from "../resources/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

let prevScrollPos = window.pageYOffset;
console.log(window.top.top.length);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos < 100) {
    document.getElementById("navbar").style.backgroundColor = "white";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }

  if (prevScrollPos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-79px";
  }
  prevScrollPos = currentScrollPos;
};

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar__list container">
        <div className="navbar__list__menu">
          <div className="navbar__list__menu__items">
            <Link to="/" class="hover-underline-animation">
              Home
            </Link>
          </div>
          <div className="navbar__list__menu__items">
            <Link to="products/briefs" class="hover-underline-animation">
              Briefs
            </Link>
          </div>
          <div className="navbar__list__menu__items">
            <Link to="products/boxers" class="hover-underline-animation">
              Boxers
            </Link>
          </div>
          <div className="navbar__list__menu__items">
            <Link to="about-us" class="hover-underline-animation">
              About Us
            </Link>
          </div>
        </div>
        <div className="navbar__list__logo">
          <Link to="/" class="hover-underline-animation">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar__list__ultilities">
          <div className="navbar__list__ultilities__items">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="navbar__list__ultilities__items">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
