import React from "react";

import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";
import ProductCarousel from "../components/ProductCarousel";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col">
        <div className="relative">
          <img
            src="/assets/1.svg"
            alt="Background"
            className="w-full object-cover"
          />
          <div className="md:absolute top-0 left-1/2 right-0 bottom-0 flex flex-row justify-center items-center p-8 md:p-16 lg:p-24">
            <div>
              <h1 className="font-bold text-left text-black text-3xl md:text-2xl lg:text-4xl">
                <span className="text-green-800">Green grass</span> on your side
                of the fence.
                <br />
                <span className="text-green-800">Always.</span>
              </h1>
              <p className="text-black font-bold text-lg md:text-sm lg:text-base mt-4 text-left">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-black text-sm md:text-xs lg:text-sm mt-4 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus hic quas, sit reprehenderit quam molestiae quod
                maiores officiis tenetur nihil?
              </p>
              <button className="mt-6 px-8 py-3  bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
                <p className="text-xs md:text-sm lg:text-base">
                  Visit the Shop
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:py-12">
          <div className="flex flex-col justify-center items-center gap-y-4 px-12">
            <span className="text-green-800 font-bold md:text-base text-sm">
              FEATURES
            </span>
            <span className="text-green-800 md:text-4xl font-bold text-center text-3xl">
              As Seen On
            </span>
            <span className="text-black text-base text-center lg:px-64">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
              eum.
            </span>
          </div>
          <div className="border-b border-t">
            <div className="flex flex-col md:flex-row justify-between px-8 py-4 items-center gap-y-4">
              <div>
                <img src="/assets/Airbnb logo.svg" alt="" className="w-full" />
              </div>
              <div>
                <img src="/assets/Hubspot logo.svg" alt="" className="w-full" />
              </div>
              <div>
                <img src="/assets/Google logo.svg" alt="" className="w-full" />
              </div>
              <div>
                <img
                  src="/assets/Microsoft logo.svg"
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <img src="/assets/Walmart logo.svg" alt="" className="w-full" />
              </div>
              <div>
                <img src="/assets/FedEx logo.svg" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-4 px-12 py-8">
          <span className="text-green-800 font-bold md:text-base text-sm">
            BRAND FEATURES
          </span>
          <span className="text-green-800 md:text-4xl font-bold text-center text-3xl">
            Why GrowGuide?
          </span>
          <span className="text-green-900 text-sm text-center lg:px-64 md:px-32 sm:px-8">
            GrowGuide is a learning platform with a large online market where
            agricutural products and services can be purchased easily. You can
            buy or sell products on our platform, you can also learn new skills
            to help your farm using our learning materials available in various
            languages.
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-8 gap-y-8 py-8 lg:flex-row">
          <div className="flex flex-col justify-center gap-y-8 px-8">
            <div className="flex flex-row justify-center gap-x-4">
              <img src="/assets/save.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Save</span>
                <br />
                <span className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolores et omnis tempore labore repellat quasi aut esse
                  nesciunt rerum.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-x-4">
              <img src="/assets/reliable.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Reliable</span>
                <br />
                <span className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolores et omnis tempore labore repellat quasi aut esse
                  nesciunt rerum.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-x-4">
              <img src="/assets/easy.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Easy</span>
                <br />
                <span className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolores et omnis tempore labore repellat quasi aut esse
                  nesciunt rerum.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <img src="/assets/2.svg" alt="" />
          </div>
          <div className="flex flex-col justify-center gap-y-8 px-8">
            <div className="flex flex-row justify-center gap-x-4">
              <img src="/assets/save.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Save</span>
                <br />
                <span className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolores et omnis tempore labore repellat quasi aut esse
                  nesciunt rerum.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-x-4">
              <img src="/assets/reliable.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Reliable</span>
                <br />
                <span className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolores et omnis tempore labore repellat quasi aut esse
                  nesciunt rerum.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-x-4">
              <img src="/assets/easy.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Easy</span>
                <br />
                <span className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae dolores et omnis tempore labore repellat quasi aut esse
                  nesciunt rerum.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FDF8F3] py-12">
          <div className="bg-[#FDF8F3] flex flex-col justify-center items-center gap-y-4 px-12  ">
            <span className="text-green-600 font-bold md:text-base text-sm">
              CATEGORY
            </span>
            <span className="md:text-4xl text-green-900 font-bold text-center text-3xl">
              Product Collection
            </span>
            <span className="text-green-900  text-sm text-center md:px-24">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              laudantium facere esse vero autem voluptatum aspernatur minima
              velit eveniet expedita!
            </span>
          </div>
          <ProductCarousel />
        </div>

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

        <div className="flex flex-col justify-center items-center gap-y-4 px-12 my-12 ">
          <span className="text-green-800 font-bold md:text-base text-sm">
            BEST SELLERS
          </span>
          <span className="md:text-4xl font-bold text-center text-3xl">
            Highlighted Products
          </span>
          <span className="text-black text-sm text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            laudantium facere esse vero autem voluptatum aspernatur minima velit
            eveniet expedita!
          </span>
          <div className="flex flex-row"></div>

          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-xl ">
            <p className="text-xs md:text-sm lg:text-base">
              Visit All Products
            </p>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-4 px-12  ">
          <span className="text-green-800 font-bold md:text-base text-sm">
            STEPS TO START
          </span>
          <span className="md:text-4xl font-bold text-center text-3xl">
            A SPRING VEGETABLE GARDEN
          </span>
          <span className="text-black text-sm text-center">
            If you're looking to start a spring vegetable garden, there are a
            few things you need to know.
          </span>
          <div className="flex flex-row"></div>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">
              Visit All Products
            </p>
          </button>
        </div>

        <div className="rounded overflow-hidden lg:px-64 py-12 md:px-32 px-16">
          <div className="relative shadow-lg ">
            <img className="w-full" src="/assets/img1.png" alt="Gardening" />
            <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-green-600 bg-opacity-50 border-t-4 border-green-900 p-4">
              <div className="font-bold text-white text-sm md:text-xl mb-2">
                Vivamus Integer Id Velit
              </div>
              <p className="text-white text-xs md:text-base">
                Blandit aliquam libero dapibus in laoreet metus. Mauris et
                scelerisque et, massa pulvinar volutpat pulvinar tortor. Orci,
                dolor non magna rutrum diam platea nascetur.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col text-white items-center justify-center w-full gap-8 p-8">
          <div className="flex flex-col bg-green-600 rounded-lg w-64 h-40 items-center justify-center p-2 gap-y-2">
            <img src="assets/clock.svg" alt="" className="w-12 " />
            <span className="text-xs">Weekdays: 8AM - 5PM (EST)</span>
            <span className="text-xs">Wddkend: 9AM - 5PM (EST)</span>
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

        <div className="bg-[#FDF8F3] flex flex-col justify-center items-center gap-y-4 p-12 my-8 ">
          <span className="text-green-800 font-bold md:text-base text-sm">
            BRAND FEATURES
          </span>
          <span className="md:text-4xl font-bold text-center text-3xl">
            Petraltools Sprayers
          </span>
          <span className="text-black text-sm text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quia!
          </span>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Shop Sprayers Now</p>
          </button>
          <div className="flex-col md:flex-row flex justify-center gap-x-8 py-8 md:px-24 px-12 gap-y-12">
            <div className="flex">
              <img src="assets/img2.svg" alt="" className="" />
            </div>
            <div className="flex flex-col justify-between items-center gap-y-12">
              <img src="assets/img3.svg" alt="" className="md:w-auto w-full" />
              <img src="assets/img4.svg" alt="" className="md:w-auto w-full" />
              <img src="assets/img5.svg" alt="" className="md:w-auto w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-4 px-12 my-12 ">
          <span className="text-green-800 font-bold md:text-base text-sm">
            TESTIMONIALS
          </span>
          <span className="md:text-4xl font-bold text-center text-3xl">
            Our Happy Customers
          </span>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col rounded-2xl w-full items-center justify-center p-4 gap-y-2 shadow-inner border-2 text-center">
              <img src="assets/customer1.svg" alt="" className="" />
              <span className="text-base font-bold">Sam</span>
              <span className="text-xs">Verified 12/12/2021</span>
              <div className="flex flex-row">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
              <span className="text-xs font-bold">Useful Products</span>
              <span className="text-xs px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, voluptatem.
              </span>
            </div>
            <div className="flex flex-col rounded-2xl w-full items-center justify-center p-4 gap-y-2 shadow-inner border-2 text-center">
              <img src="assets/customer2.svg" alt="" className="" />
              <span className="text-base font-bold">Jane Smith</span>
              <span className="text-xs">Verified 12/12/2021</span>
              <div className="flex flex-row">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
              <span className="text-xs font-bold">Useful Products</span>
              <span className="text-xs px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, voluptatem.
              </span>
            </div>
            <div className="flex flex-col rounded-2xl w-full items-center justify-center p-4 gap-y-2 shadow-inner border-2 text-center">
              <img src="assets/customer3.svg" alt="" className="" />
              <span className="text-base font-bold">John Doe</span>
              <span className="text-xs">Verified 12/12/2021</span>
              <div className="flex flex-row">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
              <span className="text-xs font-bold">Useful Products</span>
              <span className="text-xs px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, voluptatem.
              </span>
            </div>
          </div>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-xl ">
            <p className="text-xs md:text-sm lg:text-base">Contact Us</p>
          </button>
        </div>

        <div className="bg-[#FDF8F3] flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-12 p-12 mt-8 lg:px-32 text-green-800 font-bold text-center">
          <div className="flex flex-col justify-center items-center">
            <img src="assets/mark1.svg" alt="" className=" " />
            <span className="test-sm pt-2">Excellent Customer Service</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="assets/mark2.svg" alt="" />
            <span className="test-sm">FREE Shipping For Abover $35 Orders</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="assets/mark2.svg" alt="" />
            <span className="test-sm">30-Day Money Back Guarantee</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="assets/mark2.svg" alt="" />
            <span className="test-sm">USA Based Company</span>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
