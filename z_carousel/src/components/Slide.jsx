import React, { useState } from "react";
import "./Carousel.scss";

const Slide = (props) => {
  const { title, image } = props;
  const [imgSize, setImgSize] = useState(null);

  const onImageLoad = (image) => {
    setImgSize({
      dim: {
        width: image.target.offsetWidth,
        height: image.target.offsetHeight,
      },
    });
  };

  return (
    <div>
      <div
        style={{
          background: "lightgray",
        }}
      >
        <img
          src={image}
          onLoad={(e) => onImageLoad(e)}
          alt={title}
          className="image-space"
        />
      </div>
      <div className="title">
        <div className="titleText">{title}</div>
      </div>
    </div>
  );
};

export default Slide;
