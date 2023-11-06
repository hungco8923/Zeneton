import Logo from "../resources/img/Logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__menu">
                <div className="navbar__menu__items">
                <a href="#" class="hover-underline-animation">Home</a> 
                </div>
                <div className="navbar__menu__items">
                <a href="#" class="hover-underline-animation">Briefs</a> 
                </div>
                <div className="navbar__menu__items">
                <a href="#" class="hover-underline-animation">Boxers</a> 
                </div>
                <div className="navbar__menu__items">
                <a href="#" class="hover-underline-animation">About Us</a> 
                </div>
            </div>
            <div className="navbar__logo">
                <img src={Logo} alt="" />
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
}
 
export default Navbar;