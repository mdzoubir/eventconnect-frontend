import { Link } from "react-router-dom";
import footerLogo from "../assets/images/img.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo-col">
            <img src={footerLogo} alt="Logo" className="logo" />
            <p className="footer-description">
              Uncover the beauty of Morocco's vibrant traditions, festivals, and
              art.
            </p>
          </div>
          <div className="links-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <Link to="about.html">About Us</Link>
              </li>
              <li>
                <Link to="events.html">Services</Link>
              </li>
              <li>
                <Link to="gallery.html">Gallery</Link>
              </li>
              <li>
                <Link to="contact.html">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="social-col">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="social-links">
              <li>
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  className="social-icon facebook-icon"
                >
                  <i className="fi fi-brands-facebook"></i>{" "}
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="social-icon twitter-icon"
                >
                  <i className="fi fi-brands-twitter-alt-circle"></i>{" "}
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="social-icon instagram-icon"
                >
                  <i className="fi fi-brands-instagram"></i>{" "}
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="social-icon linkedin-icon"
                >
                  <i className="fi fi-brands-linkedin"></i>{" "}
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>© All Copyright 2024 by Med zoubir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
