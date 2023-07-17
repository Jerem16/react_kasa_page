import React from "react";

const SlideNumber = ({ currentSlide, totalSlides }) => {
  return <div className="slide-number">{`${currentSlide + 1}/${totalSlides}`}</div>;
};

export default SlideNumber;