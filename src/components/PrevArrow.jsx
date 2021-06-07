import React from "react";
import prev from "../images/prev.png";

const SliderPrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slickPrev"
      style={{ display: "block" }}
      onClick={onClick}
    >
      {/* <span> */}
        <img src={prev} alt="banner" />
      {/* </span> */}
    </button>
  );
};

export default SliderPrevArrow;
