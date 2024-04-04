const Hero = () => {
  return (
    <div className="relative h-full w-full top-0 left-0">
      <img
        src="/assets/hero.png"
        alt="Background"
        className="w-full object-cover"
      />
      <div
        id="#home"
        className="absolute left-1/2 pl-4 sm:pl-12 lg:pl-16 h-full w-1/2 top-0 flex flex-col justify-center items-start sm:gap-y-1 md:gap-y-2 lg:gap-y-4"
      >
        <div className="font-bold text-left text-black text-[12px]  sm:text-xl md:text-2xl lg:text-4xl">
          <span className="text-green-800">Learn </span> Farming Practices
          <br />
          <span className="text-green-800">Always.</span>
        </div>
        <p className="text-black font-bold text-[10px] md:text-sm lg:text-base ">
          With GrowGuide
        </p>
        <p className="text-black text-[10px] md:text-sm lg:text-base">
          Visit the Shop and More...
        </p>
        <div className="flex flex-wrap md:gap-4 gap-1">
          <button className="flex mt-1 px-1 sm:px-4 md:px-8 py-1 sm:py-2 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-[8px] md:text-sm lg:text-base">Visit the Shop</p>
          </button>
          <button className="flex mt-1 px-1 sm:px-4 md:px-8 py-1 sm:py-2 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <a href="#download">
              <p className="text-[8px] md:text-sm lg:text-medium">
                Download App
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
