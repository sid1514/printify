import React from "react";

const WhatWeoffer = () => {
  const imageStyle = "rounded-full w-32 mb-4";
  const labelStyle = "font-bold text-2xl";
  return (
    <div className="md:flex justify-center align-center w-full md:mt-12 mt-44 p-16 space-y-10 md:space-y-4">
      <div className="md:w-[40%]">
        <div className="">
          <img
            src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
            alt=""
            className={imageStyle}
          />
          <label className={labelStyle}>Higher Profits</label>
        </div>
        <div className="md:w-10/12">
          <p>
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
      </div>
      <div className="md:w-[40%]">
        <div>
          <img
            src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
            alt=""
            className={imageStyle}
          />
          <label className={labelStyle}>Robust Scaling</label>
        </div>
        <div className="md:w-10/12">
          <p>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
      </div>
      <div className="md:w-[40%]">
        <div>
          <img
            src="https://printify.com/pfh/assets/legacy/best-selection.svg"
            alt=""
            className={imageStyle}
          />
          <label className={labelStyle}>Best Selection</label>
        </div>
        <div className="md:w-10/12">
          <p>
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeoffer;
