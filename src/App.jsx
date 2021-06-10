// import { NavHashLink } from "react-router-hash-link";
import "./App.css";
import React, { useRef, useEffect } from "react";
// import Button from './components/Button';
import Header from "./components/Header";
import Banner from "./page/Banner";
// import banner from "./images/Banner-min.jpg";
import Contact from "./page/Contact";
import Lab from "./page/Lab";
import Offer from "./page/Offer";
import Price from "./page/Price";
// import banner from "./images/Banner.jpg";
import { Helmet } from "react-helmet";

function App() {
  const myref = useRef(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const newScript = document.createElement("script");
  //     newScript.src = "https://code.jivosite.com/widget/08Jhz6EcuN";
  //     const target = document.querySelector('head')
  //     target.appendChild(newScript);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(()=>{
    window.addEventListener('load', function(){
      const newScript = document.createElement("script");
      newScript.src = "https://code.jivosite.com/widget/08Jhz6EcuN";
      const target = document.querySelector('body')
      target.appendChild(newScript);
    })
  },[])

  return (
    <>
      <div className="App">
        <Helmet>
          <link
            rel="preload"
            as="image"
            href="Banner.jpg"
            type="image/jpg"
            loading="lazy"
          />
        </Helmet>
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
