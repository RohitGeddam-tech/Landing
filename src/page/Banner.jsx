import React, { useEffect } from "react";
import "./Banner.css";
import banner from "../images/Banner-min.webp";
import Button from "../components/Button";


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
            <Button name="Get a Free Demo" />
          </div>
        </div>
        <div className="bannerRight">
          <img src={banner} alt="banner" />
        </div>
      </div>
      <div className="rightBanner">
      <img src={banner} alt="banner" />
      </div>
      <div className="featureHeight" id="features"></div>
    </div>
  );
};

export default Banner;
