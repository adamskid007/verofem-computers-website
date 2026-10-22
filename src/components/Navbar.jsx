
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Monitor, Menu, X } from "lucide-react";
import "./Navbar.css";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Training", path: "/training" },
  { label: "Contact", path: "/contact" },
];

// Replace this file with the official logo when it is available.
const LOGO_PATH = "/images/verofem-logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__container container">
        <NavLink
          to="/"
          className="navbar__brand"
          aria-label="Verofem Computers home"
          onClick={closeMenu}
        >
          <span className="navbar__logo-icon">
            {!logoFailed ? (
              <img
                src={LOGO_PATH}
                alt=""
                className="navbar__logo-image"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <Monitor size={25} strokeWidth={1.8} />
            )}
          </span>

          <span className="navbar__brand-text">
            <span className="navbar__brand-name">
              VEROFEM<span> COMPUTERS</span>
            </span>

            <span className="navbar__brand-tagline">
              Technology. Creativity. Excellence.
            </span>
          </span>
        </NavLink>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={26} strokeWidth={1.8} />
          ) : (
            <Menu size={26} strokeWidth={1.8} />
          )}
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__navigation ${
            menuOpen ? "navbar__navigation--open" : ""
          }`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map((link) => (
              <li className="navbar__item" key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? " navbar__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="navbar__cta"
            onClick={closeMenu}
          >
            Get in Touch
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
