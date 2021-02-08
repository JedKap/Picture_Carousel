import React from "react";
import { images } from "../images";
import Slide from "./Slide";

const Carousel = () => {
  return (
    <React.Fragment>
      {images && images.length > 0 ? (
        <div>
          {images.map((item) => {
            return (
              <div key={item.id} className="slide">
                <Slide image={item.image} title={item.title} />
              </div>
            );
          })}
        </div>
      ) : (
        <div>No images to display!</div>
      )}
    </React.Fragment>
  );
};

export default Carousel;
