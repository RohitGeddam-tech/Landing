import React from "react";
import "./Contact.css";
import call from "../images/call.jpg";
import mail from "../images/Mail.jpg";
import Form from "./Form";
// import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <h1>Contact us for a free demo </h1>
        <div className="mobInfo">
          <div className="infoBox">
            <a href="tel:+18008917834">
              <img src={call} alt="call" />
            </a>
            <div>
              <h1>Call Us On :</h1>
              <a href="tel:+18008917834">+18008917834</a>
            </div>
            <button>
              Call Number <img src={call} alt="call" />{" "}
            </button>
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
              <a href="tel:+18008917834">
                <img src={call} alt="call" />
              </a>
              <div>
                <h1>Call Us On :</h1>
                <a href="tel:+18008917834">+18008917834</a>
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
