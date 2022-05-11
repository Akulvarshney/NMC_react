import React from "react";
import "./navbar.css";
import Moon from "../../img/moon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const icon = document.getElementById("icon");

  const clicked = () => {
    document.body.classList.toggle("dark-theme");
  };
  return (
    <div>
      <nav className="container">
        <div className="nav-area">
          <div className="left-nav">Light Mode</div>
          <img src={Moon} id="icon" alt="kuch" onClick={clicked} />
          <div className="right-nav">Dark Mode</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
