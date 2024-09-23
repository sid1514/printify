import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "./home.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const IntroSection = () => {


  const TshirtPattern = [
    "https://printify.com/pfh/assets/animations/images/img_0.png",
    "https://printify.com/pfh/assets/animations/images/img_1.png",

    "https://printify.com/pfh/assets/animations/images/img_2.png",
    "https://printify.com/pfh/assets/animations/images/img_3.png",
    "https://printify.com/pfh/assets/animations/images/img_4.png",
  ];
  return (
    <div className="md:flex justify-center w-11/12 align-center h-screen p-10 bgImage">
      <div className="md:w-1/2 bg-blue-800 p-2 rounded-xl text-white text-center  mr-10">
        <div className="font-extrabold md:text-6xl text-3xl space-y-2 md:pt-14 tracking-wide">
          <p>Create and sell</p>
          <p>custom products</p>
        </div>
        <div className="text-neutral-300 pt-10 pb-10 space-y-2 text-center pl-16">
          <p className="flex ">
            <img
              src="check.png"
              alt="https://icons8.com"
              className="w-8 h-6 pr-2"
            />
            100% Free to use
          </p>
          <p className="flex">
            <img
              src="check.png"
              alt="https://icons8.com"
              className="w-8 h-6 pr-2"
            />
            900+ High-Quality Products
          </p>
          <p className="flex">
            <img
              src="check.png"
              alt="https://icons8.com"
              className="w-8 h-6 pr-2"
            />
            Largest global print network
          </p>
        </div>
        <div className="md:flex md:space-x-2 space-y-4 md:space-y-0 pl-16">
          <button className="rounded text-white bg-green-600 h-12 px-2 md:w-36 w-full shadow-lg">
            Start for free
          </button>

          <button className="border h-12 px-2 md:w-36 w-full flex justify-center py-2 shadow-lg rounded">
            <p className="pl-2">How it works</p>
          </button>
        </div>
        <div className="pt-14 text-green-300 mb-4">
          Trusted by over 8M sellers around the world
        </div>
      </div>

      <div className="flex align-center h-80 relative border w-80 p-8 rounded-3xl bg-white shadow-lg">
        <img
          src="https://printify.com/pfh/assets/animations/images/img_5.png"
          alt="T-Shirt"
          className=" w-full h-full relative "
        />

        <div className="absolute z-1 top-[24%] left-[0%]">
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            effect={"coverflow"}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {TshirtPattern.map((c) => (
              <SwiperSlide className="p-6 ">
                <img src={c} alt="" className="w-24 h-24" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
