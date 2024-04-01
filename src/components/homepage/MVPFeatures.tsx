import React from "react";
import LazyLoadFadeIn from "../shared/LazyLoadFadeIn";
const MVPFeatures = () => {
  return (
    <div className="">
      {/* Market Place */}
      <LazyLoadFadeIn>
        <div className="bg-[#FDF8F3] flex flex-col justify-center gap-y-4 items-center p-8">
          <span className="text-green-800 font-bold md:text-base text-sm">
            BRAND FEATURES
          </span>
          <span className="md:text-4xl font-bold text-center text-3xl">
            Market Place
          </span>
          <span className="text-black text-sm md:px-8 lg:px-16 text-center">
            Embark on a journey of horticultural prowess with our Marketplace
            Module. Link up with esteemed local horticulture experts and access
            premium gardening tools. Our in-house drop-shipping streamlines your
            operations, with direct links to Alibaba, Amazon, Home Depot, and
            Lowes. Enhance your visibility, grow your client base, and benefit
            from our rewarding affiliate program. Register as a professional and
            thrive with us. Join now for endless opportunities and success in
            the green industry!
          </span>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Shop Now</p>
          </button>
          <div className="flex-col md:flex-row flex justify-center gap-x-8 py-2 md:px-4 px-12 gap-y-12">
            <div className="md:flex flex-col lg:flex-row p-2 gap-12 hidden">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/enrique-bancalari-uzuvLheGrTI-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/abhishek-kumar-ueuS6lkBq30-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/rayhan-hibatullah-tXX8psH_RVM-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/www-zanda-photography-RBdE3jv5y68-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadFadeIn>
      {/* E-learning */}
      <LazyLoadFadeIn>
        <div className="bg-[#FDF8F3] flex flex-col justify-center gap-y-4 items-center p-8">
          <span className="md:text-4xl font-bold text-center text-3xl mt-8">
            E-Learning
          </span>
          <span className="text-black text-sm md:px-8 lg:px-16 text-center">
            This comprehensive digital encyclopedia offers detailed guides on
            the 40 most commonly gardened crops in the U.S. Dive into a wealth
            of information covering hardiness zones, optimal seeding times,
            proper planting techniques, and much more. Whether it's sun/shade
            requirements, watering schedules, companion planting, or exploring
            medicinal benefits, our Species Guide is your go-to resource for
            cultivating your garden with confidence and expertise.
          </span>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Start Now</p>
          </button>
          <div className="flex-col md:flex-row flex justify-center gap-x-8 py-2 md:px-4 px-12 gap-y-12">
            <div className="md:flex flex-col lg:flex-row p-2 gap-12 hidden">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/andrew-neel-cckf4TsHAuw-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/markus-winkler-Kn_l9o5220Y-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadFadeIn>
      {/* AI-Chatbot */}
      <LazyLoadFadeIn>
        <div className="bg-[#FDF8F3] flex flex-col justify-center gap-y-4 items-center p-8">
          <span className="md:text-4xl font-bold text-center text-3xl mt-8">
            AI-Chatbot
          </span>
          <span className="text-black text-sm md:px-8 lg:px-16 text-center">
            Dive into the green world with our AI chatbot, your personal
            conversational AI assistant. Designed to extend the capabilities of
            our codex, this smart assistant is ready to tackle all your
            gardening inquiries. From the nuances of plant care to advanced
            horticultural advice, get accurate, detailed answers instantly.
            Whether you're a seasoned gardener or just starting, our AI Chatbot
            is here to support your horticultural journey every step of the way.
          </span>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Ask Now</p>
          </button>
          <div className="flex-col md:flex-row flex justify-center gap-x-8 py-2 md:px-4 px-12 gap-y-12">
            <div className="md:flex flex-col lg:flex-row p-2 gap-12 hidden">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/istockphoto-1480095855-612x612.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/istockphoto-1488105257-612x612.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/istockphoto-1494104649-612x612.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/istockphoto-1495736381-1024x1024.jpg"
                    alt=""
                    className="md:h-[200px] rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoadFadeIn>
    </div>
  );
};

export default MVPFeatures;
