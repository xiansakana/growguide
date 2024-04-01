import React from "react";

const Testimonials = () => {
  return (
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
            techniques and apply them directly to my work. The difference in my
            yields has been remarkable."
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
  );
};

export default Testimonials;
