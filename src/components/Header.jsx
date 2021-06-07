import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo-min.jpg";
import Hamburger from "hamburger-react";
import { NavHashLink } from "react-router-hash-link";
import ContactRedirectBtn from "./ContactRedirectBtn";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const container = isActive ? "navContainer" : "blockContainer";
  return (
    <div className="header">
      <div className="headerContainer">
        <NavHashLink to="/Landing#top" className="imgHeader">
          <img src={logo} alt="logo" />
        </NavHashLink>
        <div className="details">
          <NavHashLink to="/Landing#featureInBanner">Features</NavHashLink>
          <NavHashLink to="/Landing#freeWebsiteInLab">Free Website</NavHashLink>
          <NavHashLink to="/Landing#pricingInOffer">Pricing</NavHashLink>
          <div className="alignBtn">
            <ContactRedirectBtn
              name="Get a Free Demo"
              content="Free Demo"
              className="head"
            />
          </div>
        </div>
      </div>
      <div className="nav">
        <div className={container}>
          <div className="up">
            <button aria-label='click' onClick={() => setActive(!isActive)}>
              <Hamburger
                direction="left"
                className="ham"
                duration={0.2}
                color="black"
                toggled={isActive}
                toggle={setActive}
              />
            </button>
            <NavHashLink
              to="/Landing#top"
              className="imgHeader"
              onClick={() => setActive(false)}
            >
              <img src={logo} alt="logo" />
            </NavHashLink>
            <div className="display"></div>
          </div>
          {isActive ? (
            <div className="details">
              <NavHashLink
                to="/Landing#featureInBanner"
                onClick={() => setActive(false)}
              >
                Features
              </NavHashLink>
              <NavHashLink to="/Landing#freeWebsiteInLab" onClick={() => setActive(false)}>
                Free Website
              </NavHashLink>
              <NavHashLink to="/Landing#pricingInOffer" onClick={() => setActive(false)}>
                Pricing
              </NavHashLink>
            </div>
          ) : (
            <div className="noname"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
