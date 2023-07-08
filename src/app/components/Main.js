"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Main = () => {
  const slides = [
    {
      url: "/2in1lingzhi.jpeg",
    },
    {
      url: "/details.jpeg",
    },
    {
      url: "/spirulina.jpeg",
    },
    {
      url: "/cordyceps.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group-visited:">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {" "}
      </div>
      {/*left arrow*/}
      <div
        className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 
      text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div
        className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
      text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>{" "}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            clasName="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => gotoSlide(slideIndex)}
          >
            {" "}
            <RxDotFilled />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
