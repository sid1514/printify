import React from "react";

const DesignIntro = () => {
  return (
    <div className="p-10 md:flex justify-center w-full p-10 mt-10">
      <div className="shadow-lg relative rounded-full bg-blue-600 h-1/2 md:w-[50%] w-full md:flex text-white shadow-lg align-center">
        <img src="tshirts.png" className="md:w-1/2 md:h-full" alt="" />
        <label className="absolute md:left-[50%] md:top-[33%] md:text-3xl font-bold">
          Implement your thinking into design
        </label>
      </div>
      <div className="w-50% p-10">
        <p>Easily add your design to a wide range of products</p>
        <p>
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products
        </p>
        <button className="flex text-teal-500 font-semibold">
          <p>All products</p>
          <img
            src="arrow.png"
            alt="https://icons8.com/icon/eeWxgmSLnbcq/up-left"
            className="h-6 w-10 pt-1 pl-2"
          />
        </button>
      </div>
    </div>
  );
};

export default DesignIntro;
