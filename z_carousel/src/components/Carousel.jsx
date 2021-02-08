import React, { useState } from "react";
import { images } from "../images";
import Slide from "./Slide";

const Carousel = () => {
  const [offset, SetOffset] = useState(0);

  const moveCar = (direction) => {
    switch (direction) {
      default:
        break;
      case "left":
        if (offset <= -100) SetOffset(offset + 100);
        break;
      case "right":
        if (offset > -100 * (images.length - 1)) SetOffset(offset - 100);
        break;
    }
  };

  return (
    <React.Fragment>
      {images && images.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button id="btnLeft" className="btn" onClick={() => moveCar("left")}>
            LEFT
          </button>
          <div className="carousel">
            {images.map((item) => {
              return (
                <div
                  key={item.id}
                  className="slide"
                  style={{ transform: `translateX(${offset}%)` }}
                >
                  <Slide image={item.image} title={item.title} />
                </div>
              );
            })}
          </div>
          <button
            id="btnRight"
            className="btn"
            onClick={() => moveCar("right")}
          >
            RIGHT
          </button>
        </div>
      ) : (
        <div>No images to display!</div>
      )}
    </React.Fragment>
  );
};

export default Carousel;
