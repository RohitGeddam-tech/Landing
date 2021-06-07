// import { NavHashLink } from "react-router-hash-link";
import "./App.css";
import React, { useRef } from "react";
// import Button from './components/Button';
import Header from "./components/Header";
import Banner from "./page/Banner";
// import banner from "./images/Banner-min.webp";
import Contact from "./page/Contact";
import Lab from "./page/Lab";
import Offer from "./page/Offer";
import Price from "./page/Price";
import Preload from "./components/Preload";
// import { Helmet } from "react-helmet";

function App() {
  const myref = useRef(null);

  return (
    <>
      <Preload />
      <div className="App">
        <Header />
        <div style={{ paddingTop: "64px" }}>
          <Banner />
          <Lab />
          <Offer />
          <Price />
          <div id="btn">
            <Contact />
          </div>
        </div>
        <div className="footer" ref={myref}>
          {/* <button className="blackBtn" onClick={()=>document.getElementById("btn").scrollIntoView({behavior:'smooth'})}>
          Get a Free Demo
        </button> */}
          <a href="tel:18008910235" className="whiteBtn">
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
