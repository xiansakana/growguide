import React from "react";

const Download = () => {
  return (
    <div
      id="download"
      className="flex flex-col justify-center items-center gap-y-4 px-12 my-12 "
    >
      <span className="md:text-4xl font-bold text-center text-3xl">
        {/* Download Our App Today! */}
        Coming Soon to App Stores!
      </span>
      <span className="text-black text-sm px-8 md:px-16 lg:px-32 text-center">
        Very soon you can enjoy our wonderful platform on our exciting new
        mobile app available on google play store and IOS app store.
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
  );
};

export default Download;
