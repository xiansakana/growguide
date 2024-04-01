import React from "react";

const Guarantee = () => {
  return (
    <div className="bg-[#FDF8F3] flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-12 p-12 lg:px-32 text-green-800 font-bold text-center">
      <div className="flex flex-col justify-center items-center">
        <img src="assets/mark1.svg" alt="" className=" " />
        <span className="test-sm pt-2">Excellent Customer Service</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="assets/mark2.svg" alt="" />
        <span className="test-sm">FREE Shipping For Above $35 Orders</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="assets/mark3.svg" alt="" />
        <span className="test-sm">30-Day Money Back Guarantee</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="assets/mark4.svg" alt="" />
        <span className="test-sm">USA Based Company</span>
      </div>
    </div>
  );
};

export default Guarantee;
