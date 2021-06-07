import React from "react";
import "./Banner.css";
import banner from "../images/Banner-min.webp";
import ContactRedirectBtn from "../components/ContactRedirectBtn";


const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerContainer">
        <div className="bannerLeft">
          <h1>Manage your lab easily with Sugarlogger</h1>
          <p>
            Run your diagnostic centres and labs at the tap of your fingers.
            Sugarlogger works completely online so that you can use it anytime,
            anywhere.
          </p>
          <div className="bannerAlign">
            <ContactRedirectBtn name="Get a Free Demo" content="Free Demo" />
          </div>
        </div>
        <div className="bannerRight">
          <img src={banner} alt="banner" />
        </div>
      </div>
      <div className="rightBanner">
      <img src={banner} alt="banner" srcSet='Banner-min.webp 100vw' />
      </div>
      <div className="featureHeight" id="featureInBanner"></div>
    </div>
  );
};

export default Banner;
