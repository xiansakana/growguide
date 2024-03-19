// import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex gap-2 fixed z-10 justify-between shadow-md items-center px-8 w-full bg-white">
      <div>
        {isMobile ? (
          <div onClick={handleClickMenu}>
            <img
              loading="lazy"
              src="assets/gg_menu-left.svg"
              alt=""
              className="self-stretch my-auto size-6"
            />
          </div>
        ) : (
          <ul className="w-full justify-start flex gap-x-4">
            <li className="text-black hover:text-green-800">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-400 hover:text-green-800">Shop</li>
            <li className="text-gray-400 hover:text-green-800">Login</li>
            <li className="text-gray-400 hover:text-green-800">About us</li>
          </ul>
        )}
      </div>

      {isMenuOpen && isMobile ? (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md">
          <li className="text-black hover:text-green-800 p-4">
            <a href="/">Home</a>
          </li>
          <li className="text-gray-400 hover:text-green-800 p-4">Shop</li>
          <li className="text-gray-400 hover:text-green-800 p-4">Login</li>
          <li className="text-gray-400 hover:text-green-800 p-4">About us</li>
        </ul>
      ) : null}

      <div className="md:mr-28">
        <img
          loading="lazy"
          src="assets/logo.png"
          alt=""
          className="my-auto w-16"
        />
      </div>
      <div className="flex gap-1 justify-end items-center">
        <img
          loading="lazy"
          src="assets/Search 1.svg"
          alt=""
          className="self-stretch my-auto size-6"
        />
        <img
          loading="lazy"
          src="assets/Sample_User_Icon 1.svg"
          alt=""
          className="self-stretch my-auto size-6"
        />
        <img
          loading="lazy"
          src="assets/Cart 1.svg"
          alt=""
          className="self-stretch my-auto size-6"
        />
      </div>
    </nav>
  );
};
