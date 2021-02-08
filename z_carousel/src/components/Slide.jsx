import React from "react";
import "./Carousel.scss";

const Slide = (props) => {
  const { title, image } = props;
  return (
    <div>
      <div>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="title">
        <div className="titleText">{title}</div>
      </div>
    </div>
  );
};

export default Slide;
