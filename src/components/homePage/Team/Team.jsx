import React from "react";
import "./team.css";
import Akul from "../../img/allenv213@gmail.com.png";
import Adityansh from "../../img/adityansh.sharma@s.amity.edu.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

const Team = () => {
  return (
    <>
      <section id="team">
        <div className="container">
          <h1>Our Team</h1>
          <div className="row">
            <div className="team-card profile-pic">
              <div className="img-box">
                <img src={Akul} className="img-responsive" alt="kuch" />
                <ul>
                  <a href="#">
                    <li>
                      <RiFacebookCircleFill />
                    </li>
                  </a>

                  <a href="https://www.linkedin.com/in/akul-v-6a37bb110/">
                    <li>
                      <AiFillLinkedin />
                    </li>
                  </a>
                </ul>
              </div>
              <h2>Akul Varshney</h2>
              <h3>akul.varshney@s.amity.edu</h3>
              <p>Amity University.</p>
            </div>
            <div className="team-card profile-pic">
              <div className="img-box">
                <img src={Adityansh} className="img-responsive" />
                <ul>
                  <a href="#">
                    <li>
                      <RiFacebookCircleFill />
                    </li>
                  </a>

                  <a href="https://www.linkedin.com/in/adityansh-sharma-7646241a4/">
                    <li>
                      <AiFillLinkedin />
                    </li>
                  </a>
                </ul>
              </div>
              <h2>Adityansh Sharma</h2>
              <h3>adityansh.sharma@s.amity.edu</h3>
              <p>Amity University.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
