import React from "react";

const Profitdetail = () => {
  return (
    <div className="flex m-12 w-full my-12 pt-16">
      <div className="md:w-1/2 w-10/12 shadow-lg rounded-xl bg-gradient-to-r from-blue-500/75 via-blue-700 to-blue-900 text-white p-10 md:space-x-10 flex justify-center">
        <div className="w-11/12 md:w-auto">
          <div className="space-y-4 md:pl-0 pl-10 ">
            <p className="md:text-3xl text-2xl font-bold md:tracking-wide">
              Make Money, Risk-Free
            </p>
            <p className="flex">You pay for fulfillment only when you make a sale</p>
          </div>
          <div className="bg-grey-700 p-6 text-center space-y-6">
            <div className="flex space-x-10 w-80">
              <p className="md:w-1/2">You sell a t-shirt</p>
              <p>$ 30</p>
            </div>
            <div className="flex space-x-10 md:w-80">
              <p className="md:w-1/2 ">You pay for its production</p>
              <p>$ 30</p>
            </div>
            <div className="flex border border-t-1 border-x-0 border-b-0 space-x-10 w-80 pt-10">
              <p className="text-white font-bold md:w-1/2">Your profit</p>
              <p>$ 18</p>
            </div>
          </div>
          <div className="pl-10 md:pl-0 py-10 md:py-4">
            <button className="w-28 rounded h-10 bg-green-600">Start selling</button>
          </div>
          <div className="flex pl-10 md:pl-0">
            <p>100% Free to use . 900+ Products . Largest prinnt network</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-1/2 rounded-full md:block hidden shadow-lg bg-blue-600/25 m-10">
        <video src="treemoney.mp4" autoPlay={true} className="rounded-full" />
      </div>
    </div>
  );
};

export default Profitdetail;
