import React from "react";
import next from "../images/Next.png";

const SliderNextArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slickNext"
      style={{ display: "block" }}
      onClick={onClick}
    >
      <span>
        <img src={next} alt="banner" />
      </span>
    </button>
  );
};

export default SliderNextArrow;
