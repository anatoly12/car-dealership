import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => setOpen(!open);

  const navbarItem = () => {
    return (
      <ul
        className={`navbar-nav mb-2 mb-lg-0 custom-navbar ${
          open ? "rounded p-3 text-center" : ""
        }`}
        style={open ? { backgroundColor: "#03454A" } : {}}
      >
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">
            Contact
          </Link>
        </li>
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
      </ul>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" height="50" />
        </Link>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={` ${
            open
              ? "w-100 mt-2 transition-height overflow-hidden"
              : "collapse navbar-collapse justify-content-end"
          } `}
          id="navbarContent"
        >
          {navbarItem()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
