import React, { useState } from "react";
import "./HomeImages.css";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight"

function HomeImages({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  const length = slides.length;
  if (!Array.isArray(slides.length) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="amazon image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default HomeImages;
