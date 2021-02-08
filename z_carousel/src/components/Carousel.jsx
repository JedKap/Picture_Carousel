import React, { useState, useRef } from "react";
import { images } from "../images";
import Slide from "./Slide";

const Carousel = () => {
  const [offset, SetOffset] = useState(0);
  const [dragging, SetDragging] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [dragOff, setDragOff] = useState(0);
  const carDiv = useRef(null);

  const moveCar = (direction) => {
    switch (direction) {
      default:
        break;
      case "left":
        if (offset <= -1) SetOffset(offset + 1);
        break;
      case "right":
        if (offset > -1 * (images.length - 1)) SetOffset(offset - 1);
        break;
    }
  };

  const mouseDown = (e) => {
    e = e || window.event;
    carDiv.current.style.cursor = "grab";
    carDiv.current.style.userSelect = "none";
    SetDragging(true);
    setXPos(e.clientX);
    e.preventDefault();
  };

  const mouseUp = (e) => {
    e = e || window.event;
    carDiv.current.style.cursor = "default";
    carDiv.current.style.removeProperty("user-select");
    SetDragging(false);
    e.preventDefault();

    setDragOff(e.clientX - xPos);

    if (e.clientX - xPos > 1) {
      moveCar("left");
    } else if (e.clientX - xPos < -1) {
      moveCar("right");
    }
  };

  const mouseMove = (e) => {
    if (dragging === true) {
      if (carDiv) {
        carDiv.current.style.cursor = "grabbing";

        // THIS ALMOST WORKS
        // IS SUPPOSED TO MOVE THE SLIDES WITH THE MOUSE
        // setDragOff(e.clientX - xPos);
        // carDiv.current.scrollLeft = xPos - dragOff;
      }
    }
    e.preventDefault();
  };

  return (
    <React.Fragment>
      {images && images.length > 0 ? (
        <div className="outerDiv">
          <button id="btnLeft" className="btn" onClick={() => moveCar("left")}>
            <div className="glyph">&#9664;</div>
          </button>
          <div
            className="carousel"
            onMouseDown={(e) => mouseDown(e)}
            onMouseUp={(e) => mouseUp(e)}
            onMouseMove={(e) => mouseMove(e)}
            ref={carDiv}
          >
            {images.map((item) => {
              return (
                <div
                  key={item.id}
                  className="slide"
                  style={{ transform: `translateX(${offset * 100}%)` }}
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
            <div className="glyph">&#9654;</div>
          </button>
        </div>
      ) : (
        <div>No images to display!</div>
      )}
    </React.Fragment>
  );
};

export default Carousel;
