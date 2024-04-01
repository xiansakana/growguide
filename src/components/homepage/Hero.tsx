const Hero = () => {
  return (
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
            <p className="text-xs md:text-sm lg:text-base">Visit the Shop</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
