import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Logo" height="50" />
        </Link>

        {/* Left side: About and Contact */}
        <ul className="navbar-nav ms-3 flex-row">
          <li className="nav-item me-3">
            <Link className="nav-link text-white" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={open ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right side: Login and Register */}
        <div
          className={`${
            open
              ? "w-100 mt-2 transition-height overflow-hidden flex justify-content-end"
              : "collapse navbar-collapse justify-content-end"
          }`}
          id="navbarContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">{user}</span>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
