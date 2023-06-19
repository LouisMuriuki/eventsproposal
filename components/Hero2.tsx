"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const places = [
  "beach",
  "island",
  "building",
  "restaurant",
  "wildbeast",
  "baloon",
  "kilimanjaro",
  "town",
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div
      onClick={() => onClick()}
      className="flex items-center justify-center h-8 w-8 cursor-pointer bg-gray-400  hover:bg-gray-700"
    >
      <AiOutlineArrowRight />
    </div>
  );
};
const CustomleftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div
      onClick={() => onClick()}
      className="flex items-center justify-center h-8 w-8 cursor-pointer bg-gray-400 hover:bg-gray-800"
    >
      <AiOutlineArrowLeft />
    </div>
  );
};

const Hero2 = () => {
  return (
    <div className="bg-gray-50 px-5 py-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-4xl my-10">Our Favourite Events</h2>
          <p className="w-[450px] mb-5">
            Browse through some of the best collections of events best rated by
            our previous clients
          </p>
        </div>
        <div className="flex gap-2">
          {/* <CustomleftArrow />
          <CustomRightArrow /> */}
        </div>
      </div>
      <Carousel
        // customRightArrow={<CustomRightArrow />}
        // customLeftArrow={<CustomleftArrow />}
        autoPlaySpeed={3000}
        autoPlay={true}
        keyBoardControl={true}
        // customTransition="all 1"
        infinite={true}
        swipeable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        itemClass="carousel-item-padding-40-px"
      >
        {places.map((place, i) => {
          return (
            <Image
              fill={true}
              key={i}
              className="h-full w-full object-cover"
              src={`/${place}.jpg`}
              alt="Hero Image"
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero2;
