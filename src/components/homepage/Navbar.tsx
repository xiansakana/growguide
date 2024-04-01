import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = [
      "home",
      "about-us",
      "shop",
      "pricing",
      "testimonials",
      "download",
    ];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const scrollPosition = window.scrollY + window.innerHeight;
        return (
          scrollPosition >= element.offsetTop &&
          scrollPosition <= element.offsetTop + element.offsetHeight
        );
      }
      return false;
    });
    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex gap-2 fixed z-10 justify-between shadow-md items-center px-8 w-full bg-white">
      <div className="flex">
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
          <ul className="w-full flex gap-x-4">
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "home" ? "text-green-800" : ""
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "about-us" ? "text-green-800" : ""
              }`}
            >
              <a href="#about-us">About us</a>
            </li>
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "pricing" ? "text-green-800" : ""
              }`}
            >
              <a href="#pricing">Pricing</a>
            </li>
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "testimonials" ? "text-green-800" : ""
              }`}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "download" ? "text-green-800" : ""
              }`}
            >
              <a href="#download">Download</a>
            </li>
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "login" ? "text-green-800" : ""
              }`}
            >
              <a href="/">Login</a>
            </li>
            <li
              className={`text-gray-400 hover:text-green-800 ${
                activeSection === "sign-up" ? "text-green-800" : ""
              }`}
            >
              <a href="/">Sign up</a>
            </li>
          </ul>
        )}
        {isMenuOpen && isMobile ? (
          <ul className="absolute top-full left-0 pl-4 w-full bg-white shadow-md">
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "home" ? "text-green-800" : ""
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "about-us" ? "text-green-800" : ""
              }`}
            >
              <a href="#about-us">About us</a>
            </li>
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "pricing" ? "text-green-800" : ""
              }`}
            >
              <a href="#pricing">Pricing</a>
            </li>
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "testimonials" ? "text-green-800" : ""
              }`}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "download" ? "text-green-800" : ""
              }`}
            >
              <a href="#download">Download</a>
            </li>
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "login" ? "text-green-800" : ""
              }`}
            >
              <a href="/">Login</a>
            </li>
            <li
              onClick={handleClickMenu}
              className={`text-gray-400 hover:text-green-800 p-4 ${
                activeSection === "sign-up" ? "text-green-800" : ""
              }`}
            >
              <a href="/">Sign up</a>
            </li>
          </ul>
        ) : null}
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
        <img
          loading="lazy"
          src="assets/logo.png"
          alt=""
          className="my-auto w-16"
        />
      </div>
    </nav>
  );
};
