import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg size-12 shadow-lg transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          transition: "opacity 300ms, visibility 300ms",
        }}
      >
        <div className="text-3xl">↑</div>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
