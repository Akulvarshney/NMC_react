import React from "react";
import Logo from "../../img/logo1.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
