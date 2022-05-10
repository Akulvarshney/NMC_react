import React, { useRef } from "react";
import "./footer.css";
import emailjs from "emailjs-com";
import { ImLocation } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Logo from "../../img/logo1.png";

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5tx0r3w",
      "template_r7msjjy",
      form.current,
      "SXPlfCJk4tj3BYz5v"
    );

    e.target.reset();
  };

  const alertMe = () => {
    alert("Message has been sent!");
  };
  return (
    <>
      <section id="contact">
        <div className="container">
          <h1>Get In Touch</h1>
          <div className="contact-row">
            <div className="contact-left">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" onClick={alertMe}>
                  Submit
                </button>
              </form>
            </div>
            <div className="contact-right">
              <div className="follow">
                <b>
                  <ImLocation /> Address: Amity University, Noida-62, UP, IN.
                </b>
              </div>
              <div className="follow">
                <b>
                  {" "}
                  <HiPhone /> Phone: +91-880-025-2885
                </b>
              </div>
              <div className="follow">
                <b>
                  <MdEmail /> Email: nomask.challan@gmail.com
                </b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <section id="footer" className="text-center">
          <img className="footer-image" src={Logo} alt="kuch" />
          <hr />
          <p>&copy; 2021 by NoMask-Challan</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
