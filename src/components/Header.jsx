import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.jpg";
// import Button from "./Button";
import Hamburger from "hamburger-react";
import { NavHashLink } from "react-router-hash-link";

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
          <NavHashLink to="/Landing#features">Features</NavHashLink>
          <NavHashLink to="/Landing#free">Free Website</NavHashLink>
          <NavHashLink to="/Landing#price">Pricing</NavHashLink>
          <div className="alignBtn">
            <NavHashLink to='/Landing#contact' className='head'>Get a Free Demo</NavHashLink>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className={container}>
          <div className="up">
            <button onClick={() => setActive(!isActive)}>
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
              onClick={() => setActive(!isActive)}
            >
              <img src={logo} alt="logo" />
            </NavHashLink>
            <div className="display"></div>
          </div>
          {isActive ? (
            <div className="details">
              <NavHashLink
                to="/Landing#features"
                onClick={() => setActive(!isActive)}
              >
                Features
              </NavHashLink>
              <NavHashLink
                to="/Landing#free"
                onClick={() => setActive(!isActive)}
              >
                Free Website
              </NavHashLink>
              <NavHashLink
                to="/Landing#price"
                onClick={() => setActive(!isActive)}
              >
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
