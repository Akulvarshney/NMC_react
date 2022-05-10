import React from "react";
import "./service.css";
import { AiOutlineScan } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsReceipt } from "react-icons/bs";

const Service = () => {
  return (
    <div>
      <section id="services">
        <div className="container">
          <h1>Our Services</h1>
          <div className="services">
            <div className="card">
              <div className="icon">
                <AiOutlineScan />
              </div>
              <h3>Scan-Faces</h3>
              <p>
                It allows the camera to start scanning the people not wearing
                mask and store their names in CSV file.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <FaClipboardList />
              </div>
              <h3>See-Defaulters</h3>
              <p>
                It will show the list of Defaulters stored under the Defaulter
                list.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <SiGmail />
              </div>
              <h3>Send Email</h3>
              <p>
                It will send the email to all the people stored in the CSV file,
                with Fined Amount, Date, Time, Challan Number.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <BsReceipt />
              </div>
              <h3>Receipt Generator</h3>
              <p>
                Automatically generate a customised receipt for all the
                defaulters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
