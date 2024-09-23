import React from "react";

const Profitdetail = () => {
  return (
    <div className="flex m-10 w-full my-12 pt-16">
      <div className="md:w-1/2 w-11/12 shadow-lg rounded-xl bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 text-white p-10 md:space-x-10 flex justify-center">
        <div>
          <div className="space-y-4 md:pl-0 pl-10">
            <p className="md:text-3xl text-2xl font-bold md:tracking-wide">
              Make Money, Risk-Free
            </p>
            <p className="flex">You pay for fulfillment only when you make a sale</p>
          </div>
          <div className="bg-grey-700 p-6 text-center space-y-6">
            <div className="flex space-x-10 w-80">
              <p className="w-1/2">You sell a t-shirt</p>
              <p>$ 30</p>
            </div>
            <div className="flex space-x-10 w-80">
              <p className="w-1/2">You pay for its production</p>
              <p>$ 30</p>
            </div>
            <div className="flex border border-t-1 border-x-0 border-b-0 space-x-10 w-80 pt-10">
              <p className="text-white font-bold w-1/2">Your profit</p>
              <p>$ 18</p>
            </div>
          </div>
          <div className="pl-10 md:pl-0">
            <button className="w-24 rounded h-10 bg-green-700">Start selling</button>
          </div>
          <div className="flex pl-10 md:pl-0">
            <p>100% Free to use . 900+ Products . Largest prinnt network</p>
          </div>
        </div>
      </div>
      <div className="p-10 w-1/2 rounded-full md:block hidden shadow-lg">
        <video src="treemoney.mp4" autoPlay={true} className="rounded-full" />
      </div>
    </div>
  );
};

export default Profitdetail;
