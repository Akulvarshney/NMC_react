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
        <ul className="nav-area">
          <li>
            <Link to="/">NMC </Link>
          </li>
          <li>
            <Link to="/tracker">Corona Tracker</Link>
          </li>
          <img src={Moon} id="icon" alt="kuch" onClick={clicked} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
