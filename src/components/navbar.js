import Logo from "../resources/img/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

var prevScrollPos = window.pageYOffset;
console.log(prevScrollPos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-78px";
  }
  prevScrollPos = currentScrollPos;
};

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <div className="navbar__menu">
        <div className="navbar__menu__items">
          <Link to="/" class="hover-underline-animation">
            Home
          </Link>
        </div>
        <div className="navbar__menu__items">
          <Link to="products/briefs" class="hover-underline-animation">
            Briefs
          </Link>
        </div>
        <div className="navbar__menu__items">
          <Link to="products/boxers" class="hover-underline-animation">
            Boxers
          </Link>
        </div>
        <div className="navbar__menu__items">
          <Link to="about-us" class="hover-underline-animation">
            About Us
          </Link>
        </div>
      </div>
      <div className="navbar__logo">
        <Link to="/" class="hover-underline-animation">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar__ultilities">
        <div className="navbar__ultilities__items">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="navbar__ultilities__items">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
