import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="text-green-800 md:text-4xl font-bold text-center text-3xl pt-8 px-8">
        How The Platform Works?
      </div>
      <div className="flex flex-col lg:flex-row p-16 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col rounded-2xl w-full items-center justify-start py-8 px-2 gap-y-2 shadow-inner border-2 text-center">
            <span className="text-xl font-bold text-green-800">1. Sign-up</span>
            <div className="pt-4 text-sm">
              You need to sign up using your email to be able to start enjoying
              the wondeful features GrowGuide has to offer.
            </div>
          </div>
          <div className="flex flex-col rounded-2xl w-full items-center justify-start py-8 px-2 gap-y-2 shadow-inner border-2 text-center">
            <span className="text-xl font-bold text-green-800">2. Learn</span>
            <div className="pt-4 text-sm">
              Learn new skills and information that will help your crops,
              livestock and farm.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col rounded-2xl w-full items-center justify-start py-8 px-2 gap-y-2 shadow-inner border-2 text-center">
            <span className="text-xl font-bold text-green-800">3. Trade</span>
            <div className="pt-4 text-sm">
              Buy or sell products and services essential to agriculture using
              our platform.
            </div>
          </div>
          <div className="flex flex-col rounded-2xl w-full items-center justify-start py-8 px-2 gap-y-2 shadow-inner border-2 text-center">
            <span className="text-xl font-bold text-green-800">4. Rewards</span>
            <div className="pt-4 text-sm">
              Earn amazing rewards, win fantastic prizes, qualify for grants,
              Find job opportunities and more. We have exciting gifts to share
              with our loyal customers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
