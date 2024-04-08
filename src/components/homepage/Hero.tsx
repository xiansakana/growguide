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
        className="absolute left-1/2 pl-4 sm:pl-12 lg:pl-16 h-full w-1/2 top-0 p-4 flex flex-col justify-center items-start sm:gap-y-1 md:gap-y-2 lg:gap-y-12"
      >
        <div className="font-bold text-left text-black text-[10px] sm:text-xl md:text-2xl lg:text-5xl flex flex-col md:gap-y-2">
          <span className="sm:text-sm text-green-700">
            WELCOME TO GROWGUIDE
          </span>
          <span className="text-green-800">Learn Farming</span>
          <span className="text-green-800">Practices</span>
          <span className="text-green-800">Visit the Market</span>
          <span className="text-green-800">and More...</span>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap md:gap-4 gap-1">
          <button className="flex mt-1 px-1 sm:px-4 md:px-8 lg:px-16 py-[3px] sm:py-2 lg:py-4 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-[4px] md:text-sm lg:text-base">Visit the Shop</p>
          </button>
          <button className="flex mt-1 px-1 sm:px-4 md:px-8 lg:px-16 py-[3px] sm:py-2 lg:py-4 bg-orange-500 text-white rounded-lg shadow-xl hover:bg-green-600 transition-colors ">
            <p className="text-[4px] md:text-sm lg:text-base">
              <a href="#download">Download App</a>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
