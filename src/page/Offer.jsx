import React from "react";
// import offer from "../images/offer-min.jpg";
import "./Offer.css";
// import OfferSlider from '../components/OfferSlider'
import Button from "../components/Button";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offerContainer">
        <h1>Get a website for free*</h1>
        <p>
          With our yearly package, you can get your own website built for free*
          (*maintainence charges appiled)
        </p>
        {/* <div className="offerImg">
          <div className="img1">
            <img src={offer} alt="empty" />
          </div>
          <div className="img2">
            <img src={offer} alt="empty" />
          </div>
        </div> */}
        {/* <div className='imgOffer'>
          <OfferSlider />
        </div> */}
        <div className='offerAlign'>
          <Button name='Get in now' />
        </div>
      </div>
      <div className='freeHeight' id='price'></div>
    </div>
  );
};

export default Offer;
