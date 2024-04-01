import React from "react";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col justify-center items-center gap-y-4 px-12 my-12 "
    >
      <span className="text-green-800 font-bold md:text-base text-sm">
        Pricing
      </span>
      <span className="md:text-4xl font-bold text-center text-3xl">
        Our Pricing Options
      </span>
      <span className="text-black text-sm md:px-16 lg:px-32 text-center">
        At GrowGuide, we believe in nurturing growth, both in your gardens and
        in your knowledge of farming. Our pricing plans are designed to
        accommodate both budding enthusiasts and seasoned agriculturists.
      </span>
      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <div className="flex flex-col rounded-2xl w-full items-center justify-start p-8 gap-y-2 shadow-inner border-2 text-center">
          <span className="text-base font-bold pb-4">Free</span>
          <span className="text-6xl font-bold">$0 Free</span>
          <span className="text-xs font-bold">Per Month</span>
          <div className="pt-4"></div>
          <div className="border-b border-t p-2">
            <span className="text-sm text-green-500">Learn </span>
            <span className="text-sm ">Farming Introduction</span>
          </div>
          <div className="border-b p-2">
            <span className="text-sm text-green-500 ">Buy </span>
            <span className="text-sm ">Products and Services</span>
          </div>
          <div className="border-b p-2">
            <span className="text-sm text-green-500 ">Win Rewards </span>
            <span className="text-sm ">Refer A Friend</span>
          </div>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Get Started</p>
          </button>
        </div>
        <div className="flex flex-col rounded-2xl w-full items-center justify-center p-8 gap-y-2 shadow-inner border-2 text-center">
          <span className="text-base font-bold pb-4">Pro Plan</span>
          <span className="text-6xl font-bold">$3.99</span>
          <span className="text-xs font-bold">Per Month</span>
          <div className="pt-4"></div>
          <div className="border-b border-t p-2">
            <span className="text-sm text-green-500">Learn </span>
            <span className="text-sm ">
              Choose from our wide range of farm training full courses
            </span>
          </div>
          <div className="border-b p-2">
            <span className="text-sm text-green-500 ">Sell </span>
            <span className="text-sm ">Products and Services as a Vendor</span>
          </div>
          <div className="border-b p-2">
            <span className="text-sm text-green-500 ">Buy </span>
            <span className="text-sm ">Products and Services</span>
          </div>
          <div className="border-b p-2">
            <span className="text-sm text-green-500 ">Win Rewards </span>
            <span className="text-sm ">Refer A Friend</span>
          </div>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
