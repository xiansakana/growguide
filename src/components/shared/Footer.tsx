import React from "react";

export const Footer = () => {
  return (
    <div className="text-white bg-[#2D2D36]">
      <div className="flex max-sm:flex-col sm:justify-between justify-center flex-wrap items-start gap-12 p-12">
        <div className="flex flex-col items-center text-center">
          <a href="/">
            <img src="assets/logo.png" alt="" className="m-0 w-20" />
          </a>
          <p className="mt-6 text-sm leading-7 font-montserrat text-white-400 sm:max-w-sm">
            GrowGuide is a learning platform with a large online market where
            agricutural products and services can be purchased easily.
          </p>
        </div>

        <div className="flex flex-1 justify-between flex-wrap  text-white">
          <div>
            <h4 className="text-2xl font-bold">Our Company</h4>
            <div>
              <div className="mt-3 flex flex-1 gap-x-4 ">
                <a href="/">Home</a>
              </div>
              <div className="mt-3 flex flex-1 gap-x-4 ">
                <a href="#about-us">About us</a>
              </div>
              <div className="mt-3 flex flex-1 gap-x-4 ">
                <a href="#pricing">Pricing</a>
              </div>
              <div className="mt-3 flex flex-1 gap-x-4 ">
                <a href="#testimonials">Testimonials</a>
              </div>
              <div className="mt-3 flex flex-1 gap-x-4 ">
                <a href="#download">Download</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between flex-wrap text-white">
          <div>
            <h4 className=" text-2xl font-bold ">Get in touch</h4>
            <div className="flex flex-1 gap-x-4 ">
              <img src="assets/clock.svg" width={24} height={24} alt="" />
              <div className="flex flex-col gap-y-2 mt-3">
                <span>Weekday 8AM - 5PM</span>
                <span>Weekend 9AM - 5PM</span>
              </div>
            </div>
            <div className="flex flex-1 gap-x-4 mt-3">
              <img src="assets/envelope.svg" width={24} height={24} alt="" />

              <span>growguideint@gmail.com</span>
            </div>
            {/* <div className="flex flex-1 gap-x-4 mt-3">
              <img src="assets/telephone.svg" width={24} height={24} alt="" />
              <span>1 (800) 613-6889</span>
            </div> */}
          </div>
        </div>

        <div className="flex flex-1 justify-between flex-wrap text-white">
          <div>
            <h4 className="text-2xl font-bold ">Don't Miss Out!</h4>
            <div className="flex flex-1 gap-x-4 mt-3">
              <span>Sign up to our newsletter to save 15% OFF your order!</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 jsutify-between mt-3">
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-64 px-4 py-2 border-2 text-black border-black rounded-lg placeholder-black focus:ring-2 focus:ring-green-300 focus:border-transparent"
                style={{ background: "rgba(255, 255, 255, 100)" }}
              />
              <button
                type="submit"
                className="w-32 bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-white pb-12 px-12">
        <p>Copyright © GrowGuide 2024 All rights reserved.</p>
      </div>
    </div>
  );
};
