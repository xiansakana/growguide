import React from "react";

const Shop = () => {
  return (
    <div>
      <div
        id="shop"
        className="flex flex-col justify-center items-center gap-y-4 p-12  "
      >
        <span className="text-green-800 font-bold md:text-base text-sm">
          STEPS TO START
        </span>
        <span className="md:text-4xl font-bold text-center text-3xl">
          A SPRING VEGETABLE GARDEN
        </span>
        <span className="text-black text-sm text-center">
          If you're looking to start a spring vegetable garden, there are a few
          things you need to know.
        </span>
        <div className="flex flex-row"></div>
        <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
          <p className="text-xs md:text-sm lg:text-base">Visit All Products</p>
        </button>
      </div>
      <div className="rounded overflow-hidden lg:px-48 lg:mx-36 py-12 md:px-48 px-16">
        <div className="relative shadow-lg ">
          <img className="w-full" src="/assets/img1.png" alt="Gardening" />
          {/* <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-green-600 bg-opacity-50 border-t-4 border-green-900 p-4">
        <div className="font-bold text-white text-sm md:text-xl mb-2">
          Vivamus Integer Id Velit
        </div>
        <p className="text-white text-xs md:text-base">
          Blandit aliquam libero dapibus in laoreet metus. Mauris et
          scelerisque et, massa pulvinar volutpat pulvinar tortor. Orci,
          dolor non magna rutrum diam platea nascetur.
        </p>
      </div> */}
        </div>
      </div>
      <div className="flex md:flex-row flex-col text-white items-center justify-center w-full gap-8 p-8">
        <div className="flex flex-col bg-green-600 rounded-lg w-64 h-40 items-center justify-center p-2 gap-y-2">
          <img src="assets/clock.svg" alt="" className="w-12 " />
          <span className="text-xs">Weekdays: 8AM - 5PM (EST)</span>
          <span className="text-xs">Weekend: 9AM - 5PM (EST)</span>
        </div>
        <div className="flex flex-col bg-green-600 rounded-lg w-64 h-40 items-center justify-center p-2 gap-y-2">
          <img src="assets/telephone.svg" alt="" className="w-12 " />
          <span className="text-xs">Weekdays: 8AM - 5PM (EST)</span>
          <span className="text-xs">Wddkend: 9AM - 5PM (EST)</span>
        </div>
        <div className="flex flex-col bg-green-600 rounded-lg w-64 h-40 items-center justify-center p-2 gap-y-2">
          <img src="assets/envelope.svg" alt="" className="w-12 " />
          <span className="text-xs">Weekdays: 8AM - 5PM (EST)</span>
          <span className="text-xs">Wddkend: 9AM - 5PM (EST)</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;
