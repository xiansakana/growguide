import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-green-800 text-center text-white">
      <div className="flex flex-col justify-center items-center py-8 gap-y-4 px-8">
        <span className="md:text-2xl font-bold text-xl">
          Sign Up For Exclusive Offers, Care Tips, Newsletters And More!
        </span>
        <span className="md:text-sm text-xs">
          Sign up to our newsletter to save 15% OFF your order!
        </span>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-64 px-4 py-2 border-2 border-white rounded-lg placeholder-white focus:ring-2 focus:ring-green-300 focus:border-transparent"
            style={{ background: "rgba(255, 255, 255, 0)" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-64 px-4 py-2 border-2 border-white rounded-lg placeholder-white focus:ring-2 focus:ring-green-300 focus:border-transparent"
            style={{ background: "rgba(255, 255, 255, 0)" }}
          />
          <button
            type="submit"
            className="w-64 bg-white text-green-600 font-bold py-2 px-6 rounded-lg hover:bg-green-200"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
