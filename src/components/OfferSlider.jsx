import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offer from "../images/offer-min.jpg";
import SliderNextArrow from "./NextArrow";
import SliderPrevArrow from "./PrevArrow";

const SliderContent = () => {
  return (
    <>
      <div className="img1">
        <img src={offer} alt="empty" />
      </div>
    </>
  );
};

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          initialSlide: 2,
          arrows:true,
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
        <SliderContent />
        <SliderContent />
        <SliderContent />
      </Slider>
    </>
  );
};

export default SlickSlider;
