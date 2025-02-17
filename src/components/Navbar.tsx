import { NavLink } from "react-router-dom";  // Import NavLink
import navbarLogo from "../assets/images/event-finder-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>📍 Casablanca, Morocco</span> |
            <span>📞 +212 123-456-789</span>
          </div>
          <div className="inscription">
            <NavLink to="#subscribe" className="btn btn-primary">
              Subscribe
            </NavLink>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="logo">
            <img src={navbarLogo} alt="Cultural Event Finder Logo" />
          </div>
          <nav>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="header-buttons">
            <NavLink to="/login" className="btn btn-primary">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-secondary">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
