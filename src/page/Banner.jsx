import React from "react";
import "./Banner.css";
import banner from "../images/Banner-min.webp";
import bannerJpg from "../images/Banner.jpg";
import ContactRedirectBtn from "../components/ContactRedirectBtn";
import useWindowSize from "../hooks/useWindowSize";

const Banner = () => {
  const [width] = useWindowSize();

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
        {width <= 780 ? (
          <div className="rightBanner">
            <img src={bannerJpg} alt="bannerjpg" loading='lazy' />
          </div>
        ) : (
          <div className="bannerRight">
            <img src={banner} alt="banner" />
          </div>
        )}
      </div>
      <div className="featureHeight" id="featureInBanner"></div>
    </div>
  );
};
// srcSet='Banner-min.webp 100vw'
export default Banner;
