import React from "react";
import "./navbar.css";
import Moon from "../../img/moon.png";

const Navbar = () => {
  const icon = document.getElementById("icon");
  console.log(icon);

  const clicked = () => {
    document.body.classList.toggle("dark-theme");
  };
  return (
    <div>
      <nav className="container">
        <div className="nav-area">
          <div className="left-nav">Light Theme</div>
          <img src={Moon} id="icon" alt="kuch" onClick={clicked} />
          <div className="right-nav">Dark Theme</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
