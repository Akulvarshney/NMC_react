import React from "react";
import "../Header/header.css";
import Nomask from "../../img/nomask.png";

const Front = () => {
  return (
    <div id="Front">
      <div className="container">
        <div className="welcome">
          <div className="left">
            <br />
            <br />
            <h4 className="text_2">E-Challan Generator</h4>
            <h3 className="text_1">For Non-Masked People</h3>
            <button className="btn">
              <a href="https://drive.google.com/drive/folders/1shfBcEj4dDhKQ652uAAIJT2N8x9-BWK5?usp=sharing">
                Download now
              </a>
            </button>
          </div>

          <div className="right">
            <img src={Nomask} alt="Book" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
