import React from "react";
import "./Carousel.scss";

const Slide = (props) => {
  const { title, image } = props;
  return (
    <div>
      <div className="slide">
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Slide;
