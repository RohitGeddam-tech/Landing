import React from "react";
import "./Contact.css";
import call from "../images/call-min.jpg";
import mail from "../images/Mail-min.jpg";
// import callBtn from "../images/blueCallBtn.svg";
import Form from "../components/Form";
import white from "../images/white.svg";
// import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <h1>Contact us for a free demo </h1>
        <div className="mobInfo">
          <div className="infoBox">
            {/* <a href="tel:+18008917834">
              <img src={call} alt="call" />
            </a> */}
            <div>
              <h1>Call Us On :</h1>
              <a href="tel:18008910235">18008910235</a>
            </div>
            <a href="tel:18008910235" className='infoBtn'>
              <div>
                <h1>Call Number</h1>
                <img src={white} alt="call" />
              </div>
            </a>
          </div>
        </div>
        <div className="newOr">
          <h1>OR</h1>
        </div>
        <div className="form">
          <Form />
          <div className="alignOr">
            <h1>OR</h1>
          </div>
          <div className="contactInfo">
            <div className="infoBox">
              <a href="tel:18008910235">
                <img src={call} alt="call" />
              </a>
              <div>
                <h1>Call Us On :</h1>
                <a href="tel:18008910235">18008910235</a>
              </div>
            </div>
            <div className="infoBox">
              <a href="mailto:contact@sugarlogger.com">
                <img src={mail} alt="mail" />
              </a>
              <div>
                <h1>Write To Us On :</h1>
                <a href="mailto:contact@sugarlogger.com">
                  contact@sugarlogger.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
