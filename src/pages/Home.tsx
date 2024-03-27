import React from "react";

import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";
// import ProductCarousel from "../components/ProductCarousel";
import ScrollToTopButton from "../components/shared/ScrollToTopButton";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 flex flex-col">
        <div className="relative">
          <img
            src="/assets/hero.png"
            alt="Background"
            className="w-full object-cover"
          />
          <div
            id="#home"
            className="md:absolute top-0 left-1/2 right-0 bottom-0 flex flex-row justify-center items-center p-8 md:p-16 lg:p-24"
          >
            <div>
              <h1 className="font-bold text-left text-black text-3xl md:text-2xl lg:text-4xl">
                <span className="text-green-800">Learn </span> Farming Practices
                <br />
                <span className="text-green-800">Always.</span>
              </h1>
              <p className="text-black font-bold text-lg md:text-sm lg:text-base mt-4 text-left">
                With GrowGuide
              </p>
              <p className="text-black text-sm md:text-xs lg:text-sm mt-4 text-left">
                Visit the Shop and More...
              </p>
              <button className="mt-6 px-8 py-3  bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
                <p className="text-xs md:text-sm lg:text-base">
                  Visit the Shop
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-y-4 md:py-12">
          <div className="flex flex-col justify-center items-center gap-y-4 p-8">
            <span className="text-green-800 font-bold md:text-base text-sm">
              FEATURES
            </span>
            <span className="text-green-800 md:text-4xl font-bold text-center text-3xl">
              As Seen On
            </span>
            <span className="text-black text-sm text-center lg:px-64">
              Our commitment to excellence has garnered attention from top
              industry leaders. Featured by innovative platforms and trusted by
              global giants, we are proud to be recognized by Airbnb, HubSpot,
              Google, Microsoft, Walmart, and FedEx for our exceptional service
              and product quality.
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
        </div> */}

        <div
          id="about-us"
          className="flex flex-col justify-center items-center gap-y-4 px-12 py-8"
        >
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

        <div className="flex flex-col items-center justify-center px-4 gap-y-8 py-8 lg:flex-row">
          <div className="flex flex-col justify-center gap-y-8 px-8 lg:w-1/2">
            <div className="flex flex-row justify-start gap-x-4">
              <img src="/assets/save.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Learning</span>
                <br />
                <span className="text-xs">
                  With GrowGuide you can learn more about crops, livestock,
                  storage of agricultural products, essential farming techniques
                  to help your farming needs.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-x-4">
              <img src="/assets/reliable.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">MarketPlace</span>
                <br />
                <span className="text-xs">
                  You can purchase - seeds and grown crops for sale - little and
                  grown livestock for sale and breeding. - equipments for sale
                  and rent - lands for sale and rent etc.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-x-4">
              <img src="/assets/easy.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Online Support</span>
                <br />
                <span className="text-xs">
                  Our online support team are available to answer your
                  questions, guide you, assist you in solving various issues.
                </span>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col w-1/3 hidden">
            <img
              src="/assets/pexels-susanne-jutzeler-sujufoto-1172742.jpg"
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-y-8 px-8 lg:w-1/2">
            <div className="flex flex-row justify-start gap-x-4">
              <img src="/assets/save.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Top Quality</span>
                <br />
                <span className="text-xs">
                  We have a range of top quality products and services for your
                  farming needs.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-x-4">
              <img src="/assets/reliable.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">Security</span>
                <br />
                <span className="text-xs">
                  Our platform is very secure with state of the art protocols to
                  ensure imformation and personal data are well protected
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-x-4">
              <img src="/assets/easy.svg" alt="" className="w-16" />
              <div>
                <span className="text-base font-bold">
                  Prizes, Giveaways, Bonus
                </span>
                <br />
                <span className="text-xs">
                  We have amazing prices, giveways and bonus that will be given
                  to our esteemed customers regularly. Simply follow the
                  instructions to qualify for wonderful prizes.
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="text-green-800 md:text-4xl font-bold text-center text-3xl pt-8 px-8">
          How The Platform Works?
        </span>
        <div className="flex flex-col lg:flex-row p-16 gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col rounded-2xl w-full items-center justify-start p-8 gap-y-2 shadow-inner border-2 text-center">
              <span className="text-xl font-bold text-green-800">
                1. Sign-up
              </span>
              <div className="pt-4 text-sm">
                You need to sign up using your email to be able to start
                enjoying the wondeful features GrowGuide has to offer.
              </div>
            </div>
            <div className="flex flex-col rounded-2xl w-full items-center justify-start p-8 gap-y-2 shadow-inner border-2 text-center">
              <span className="text-xl font-bold text-green-800">2. Learn</span>
              <div className="pt-4 text-sm">
                Learn new skills and information that will help your crops,
                livestock and farm.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col rounded-2xl w-full items-center justify-start p-8 gap-y-2 shadow-inner border-2 text-center">
              <span className="text-xl font-bold text-green-800">3. Trade</span>
              <div className="pt-4 text-sm">
                Buy or sell products and services essential to agriculture using
                our platform.
              </div>
            </div>
            <div className="flex flex-col rounded-2xl w-full items-center justify-start p-8 gap-y-2 shadow-inner border-2 text-center">
              <span className="text-xl font-bold text-green-800">
                4. Rewards
              </span>
              <div className="pt-4 text-sm">
                Earn amazing rewards, win fantastic prizes, qualify for grants,
                Find job opportunities and more. We have exciting gifts to share
                with our loyal customers.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#FDF8F3] py-12">
          <div className="bg-[#FDF8F3] flex flex-col justify-center items-center gap-y-4 px-12  ">
            <span className="text-green-800 font-bold md:text-base text-sm">
              CATEGORY
            </span>
            <span className="md:text-4xl text-green-900 font-bold text-center text-3xl">
              Product Collection
            </span>
            <span className="text-green-900  text-sm text-center md:px-24">
              Explore the full range of our products, meticulously designed to
              meet all your needs with convenience and efficiency. Our selection
              caters to both personal and professional use, ensuring that
              whether you're nurturing a small garden or managing vast
              agricultural land, we have the right tool for you.
            </span>
          </div>
          <ProductCarousel />
        </div> */}

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

        <div className="bg-[#FDF8F3] flex flex-col justify-center items-center gap-y-4 p-12 my-8 ">
          {/* <span className="text-green-800 font-bold md:text-base text-sm">
            BRAND FEATURES
          </span>
          <span className="md:text-4xl font-bold text-center text-3xl">
            Petraltools Sprayers
          </span>
          <span className="text-black text-sm px-8 md:px-16 lg:px-32 text-center">
            Elevate your farming and gardening with the latest in our lineup of
            Petraltools Sprayers. Engineered for reliability, our sprayers
            deliver an unmatched balance of coverage and control. From delicate
            mists to powerful jets, cater to all your plants' needs with a
            simple twist of the nozzle. With ergonomic design and durable
            materials, Petraltools Sprayers are the trusted companion for your
            green ambitions.
          </span>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-xs md:text-sm lg:text-base">Shop Sprayers Now</p>
          </button> */}

          <div className="flex-col md:flex-row flex justify-center gap-x-8 py-2 md:px-4 px-12 gap-y-12">
            <div className="flex flex-col lg:flex-row p-2 gap-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/enrique-bancalari-uzuvLheGrTI-unsplash.jpg"
                    alt=""
                    className="w-[250px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/abhishek-kumar-ueuS6lkBq30-unsplash.jpg"
                    alt=""
                    className="md:w-[250px] rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/rayhan-hibatullah-tXX8psH_RVM-unsplash.jpg"
                    alt=""
                    className="md:w-[250px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full items-center justify-start gap-y-2 text-center">
                  <img
                    src="assets/www-zanda-photography-RBdE3jv5y68-unsplash.jpg"
                    alt=""
                    className="md:w-[250px] rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <span className="text-black text-sm px-8 md:px-16 lg:px-32 text-center">
            At GrowGuide, we believe in nurturing growth, both in your gardens
            and in your knowledge of farming. Our pricing plans are designed to
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
                <span className="text-sm ">
                  Products and Services as a Vendor
                </span>
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

        <div
          id="testimonials"
          className="flex flex-col justify-center items-center gap-y-4 px-12 my-12 "
        >
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
              <span className="text-xs">Verified 05/06/2023</span>
              <div className="flex flex-row">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
              <span className="text-xs font-bold">Essential Market Access</span>
              <span className="text-xs px-4">
                "As a small-scale organic farmer, GrowGuide's market has been
                invaluable. I've accessed a wide range of quality seeds and
                equipment that were previously out of reach. The platform's easy
                navigation and transaction process saved me time and effort."
              </span>
            </div>
            <div className="flex flex-col rounded-2xl w-full items-center justify-center p-4 gap-y-2 shadow-inner border-2 text-center">
              <img src="assets/customer2.svg" alt="" className="" />
              <span className="text-base font-bold">Jane Smith</span>
              <span className="text-xs">Verified 03/08/2023</span>
              <div className="flex flex-row">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
              <span className="text-xs font-bold">
                Unmatched Learning Resources
              </span>
              <span className="text-xs px-4">
                "GrowGuide's learning materials have been a game-changer for my
                farm. The multilingual tutorials allowed me to learn new farming
                techniques and apply them directly to my work. The difference in
                my yields has been remarkable."
              </span>
            </div>
            <div className="flex flex-col rounded-2xl w-full items-center justify-center p-4 gap-y-2 shadow-inner border-2 text-center">
              <img src="assets/customer3.svg" alt="" className="" />
              <span className="text-base font-bold">John Doe</span>
              <span className="text-xs">Verified 18/09/2023</span>
              <div className="flex flex-row">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
              <span className="text-xs font-bold">
                Community and Commerce Combined
              </span>
              <span className="text-xs px-4">
                "I've not only sold my products but also connected with other
                farmers, sharing insights and tips. GrowGuide is more than a
                marketplace; it's a community hub for knowledge and growth."
              </span>
            </div>
          </div>
          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-xl ">
            <p className="text-xs md:text-sm lg:text-base">Contact Us</p>
          </button>
        </div>

        <div
          id="download"
          className="flex flex-col justify-center items-center gap-y-4 px-12 my-12 "
        >
          <span className="md:text-4xl font-bold text-center text-3xl">
            {/* Download Our App Today! */}
            Coming Soon to App Stores!
          </span>
          <span className="text-black text-sm px-8 md:px-16 lg:px-32 text-center">
            You can now enjoy our wonderful platform on our exciting new mobile
            app available on google play store and IOS app store.
          </span>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <a
              href="https://www.apple.com/ios/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                alt="Download on the App Store"
                className="w-[250px] px-8"
              />
            </a>
            <a
              href="https://play.google.com/store/games"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                // src="/assets/google-play-badge-logo-svgrepo-com.svg"
                src="/assets/google-play-badge-2022-2.svg"
                alt="Download on the Google Play Store"
                className="w-[250px]"
              />
            </a>
          </div>
        </div>
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
            <img src="assets/mark2.svg" alt="" />
            <span className="test-sm">30-Day Money Back Guarantee</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="assets/mark2.svg" alt="" />
            <span className="test-sm">USA Based Company</span>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
