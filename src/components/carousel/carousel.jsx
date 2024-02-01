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
          <div className="slider relative">
          {images.length > 1 && (
            <div className="vectorPrev bg-zinc-800 dark:bg-zinc-100 p-1 rounded-md text-5xl absolute top-56 left-2 cursor-pointer" onClick={prevSlide}>
              <i className="fa-sharp fa-solid fa-arrow-left dark:text-zinc-700"></i>
            </div>
          )}
          {images.length > 1 && (
            <div className="vectorNext bg-zinc-800 dark:bg-zinc-100 p-1 rounded-md text-5xl absolute top-56 right-2 cursor-pointer" onClick={nextSlide}>
              <i className="fa-sharp fa-solid fa-arrow-right dark:text-zinc-700"></i>  
            </div>
          )}
          {images.map((img, index) => {
          return (
            <div className="slider_container w-full lg:w-[900px]" key={index}>
              {index === current && (
                <img
                  src={img}
                  alt="Photos du logement"
                  className="slider-image"
                />
              )}
              {index === current && (
                <span className="image-number bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-700 font-bold p-1 rounded-md absolute right-3 bottom-2">
                  {current + 1}/{images.length}
                </span>
              )}
            </div>
          );
        })}
      </div>
      </div>
    );
}