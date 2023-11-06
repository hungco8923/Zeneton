import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div class="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3>Company</h3>
          <div className="footer__column__items">
            <Link to="about-us" className="footer-links about-us">
              About us
            </Link>
          </div>
        </div>
        <div className="footer__column">
          <h3>Customer Service</h3>
          <div className="footer__column__items">
            <Link to="about-us" className="footer-links contact-us">
              Contact us
            </Link>
            <Link to="about-us" className="footer-links my-account">
              My account
            </Link>
          </div>
        </div>
        <div className="footer__column">
          <h3>More to explore</h3>
          <div className="footer__column__social-items">
            <Link to="about-us">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="about-us">
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
            <Link to="about-us">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
