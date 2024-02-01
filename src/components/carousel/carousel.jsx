import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../data/projets.json";


export default function Carousel() {
    const {id} = useParams();
    const foundItem = projectData.find((object) => object.id === id);
    const images = foundItem.images;

    const[current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    return (
        <div className="carousel_container">  
          <div className="slider">
          {images.length > 1 && (
            <div className="vectorPrev" onClick={prevSlide}>
              <i class="fa-sharp fa-solid fa-arrow-left"></i>
            </div>
          )}
          {images.length > 1 && (
            <div className="vectorNext" onClick={nextSlide}>
              <i class="fa-sharp fa-solid fa-arrow-right"></i>  
            </div>
          )}
          {images.map((img, index) => {
          return (
            <div className="slider_container" key={index}>
              {index === current && (
                <img
                  src={img}
                  alt="Photos du logement"
                  className="slider-image"
                />
              )}
              {index === current && (
                <strong className="image-number">
                  {current + 1}/{images.length}
                </strong>
              )}
            </div>
          );
        })}
      </div>
      </div>
    );
}