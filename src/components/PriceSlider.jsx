import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import check from "../images/check.jpg";
import Button from "./Button";

const PriceSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <>
          <div className="cards">
            <div className="cardHeader">
              <h1>Small</h1>
              <h2> ₹600</h2>
            </div>
            <div className="divider"></div>
            <div className="cardInfo">
              <div className="info">
                <img src={check} alt="check" />
                <div className="point1">
                  <h1> Add upto </h1> <h2>300 Patients</h2>
                </div>
              </div>
              <div className="info">
                <img src={check} alt="check" />
                <h1>Validity: 30 days</h1>
              </div>
              <div className="info">
                <img src={check} alt="check" />
                <h1>All features included</h1>
              </div>
            </div>
            <div className="cardAlign">
              <Button name="Try it out" />
            </div>
          </div>
        </>
        <>
          <div className="cards">
            <div className="cardHeader">
              <h1>Medium</h1>
              <h2>₹1500</h2>
            </div>
            <div className="divider"></div>
            <div className="cardInfo">
              <div className="info">
                <img src={check} alt="check" />
                <div className="point1">
                  <h1> Add upto </h1> <h2>750 Patients</h2>
                </div>
              </div>
              <div className="info">
                <img src={check} alt="check" />
                <h1>Validity: 30 days</h1>
              </div>
              <div className="info">
                <img src={check} alt="check" />
                <h1>All features included</h1>
              </div>
            </div>
            <div className="cardAlign">
              <Button name="Try it out" />
            </div>
          </div>
        </>
        <>
          <div className="cards">
            <div className="cardHeader">
              <h1>Large</h1>
              <h2>₹2000</h2>
            </div>
            <div className="divider"></div>
            <div className="cardInfo">
              <div className="info">
                <img src={check} alt="check" />
                <div className="point1">
                  <h1> Add upto </h1> <h2>1000 Patients</h2>
                </div>
              </div>
              <div className="info">
                <img src={check} alt="check" />
                <h1>Validity: 30 days</h1>
              </div>
              <div className="info">
                <img src={check} alt="check" />
                <h1>All features included</h1>
              </div>
            </div>
            <div className="cardAlign">
              <Button name="Try it out" />
            </div>
          </div>
        </>
      </Slider>
    </>
  );
};

export default PriceSlider;
