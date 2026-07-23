import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TINYURL</div>
      <div className="links">
        <a href="#">Plans</a>
        <a href="#">Feautures</a>
        <a href="#">Domains</a>
        <a href="#">Resources</a>
      </div>
      <div className="login-button">
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
      </div>
    </nav>
  );
}
export default Navbar;
