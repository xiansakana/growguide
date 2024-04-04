import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div
        id="about-us"
        className="flex flex-col justify-center items-center gap-y-4 md:px-12 sm:px-8 px-4 py-8"
      >
        <span className="text-green-800 font-bold md:text-base text-sm">
          BRAND FEATURES
        </span>
        <span className="text-green-800 md:text-4xl font-bold text-center text-3xl">
          Why GrowGuide?
        </span>
        <span className="text-green-900 text-sm text-center lg:px-64 md:px-32 sm:px-4">
          GrowGuide is a learning platform with a large online market where
          agricutural products and services can be purchased easily. You can buy
          or sell products on our platform, you can also learn new skills to
          help your farm using our learning materials available in various
          languages.
        </span>
      </div>
      <div className="flex flex-col items-between justify-between px-4 gap-y-8 gap-x-4 py-8 lg:flex-row">
        <div className="flex flex-col justify-center items-start gap-y-8 px-8 lg:w-1/2">
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
                grown livestock for sale and breeding. - equipments for sale and
                rent - lands for sale and rent etc.
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-x-4">
            <img src="/assets/easy.svg" alt="" className="w-16" />
            <div>
              <span className="text-base font-bold">Online Support</span>
              <br />
              <span className="text-xs">
                Our online support team are available to answer your questions,
                guide you, assist you in solving various issues.
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex w-1/2 h-1/2 hidden">
          <img
            src="/assets/pexels-susanne-jutzeler-sujufoto-1172742.jpg"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-y-8 px-8 lg:w-1/2">
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
                We have amazing prices, giveways and bonus that will be given to
                our esteemed customers regularly. Simply follow the instructions
                to qualify for wonderful prizes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
