import React, { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Battery Backpack Sprayer",
    price: "$199.99",
    imageUrl: "assets/product1.svg",
    visibleOn: "lg",
  },
  {
    id: 2,
    name: "Battery Powered Sprayer",
    price: "$149.99",
    imageUrl: "assets/product2.svg",
    visibleOn: "",
  },
  {
    id: 3,
    name: "Battery Sprayer with Custom Cart",
    price: "$399.99",
    imageUrl: "assets/product3.svg",
    visibleOn: "md",
  },
  {
    id: 4,
    name: "Battery Sprayer with Reel Cart",
    price: "$199.99",
    imageUrl: "assets/product4.svg",
    visibleOn: "lg",
  },
  {
    id: 5,
    name: "Battery Backpack Sprayer",
    price: "$199.99",
    imageUrl: "assets/product1.svg",
    visibleOn: "lg",
  },
  {
    id: 6,
    name: "Battery Powered Sprayer",
    price: "$149.99",
    imageUrl: "assets/product2.svg",
    visibleOn: "",
  },
  {
    id: 7,
    name: "Battery Sprayer with Custom Cart",
    price: "$399.99",
    imageUrl: "assets/product3.svg",
    visibleOn: "md",
  },
  {
    id: 8,
    name: "Battery Sprayer with Reel Cart",
    price: "$199.99",
    imageUrl: "assets/product4.svg",
    visibleOn: "lg",
  },
];

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // lg and above
        setItemsToShow(4);
      } else if (width >= 768 && width < 1024) {
        // md to lg
        setItemsToShow(2);
      } else {
        // md and below
        setItemsToShow(1);
      }
    };

    updateItemsToShow(); // Initial check
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handlePreviousClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - itemsToShow)
    );
  };

  const visibleProducts = products.slice(
    Math.max(activeIndex, 0),
    Math.min(activeIndex + itemsToShow, products.length)
  );

  return (
    <div className="flex justify-center items-center gap-x-8 p-8">
      <div className="w-12">
        <button onClick={handlePreviousClick} disabled={activeIndex === 0}>
          <img
            src="assets/arrow-left.svg"
            alt=""
            className="rounded-2xl object-cover"
          />
        </button>
      </div>

      {visibleProducts.map((product, index) => (
        <div key={product.id} className={"lg:flex flex-col w-64  md:block"}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-2xl w-auto h-auto object-contain"
          />
          <div className="flex justify-between items-center text-green-950">
            <div className="text-sm sm:text-xs flex justify-between">
              {product.name}
            </div>
            <div className="">
              <span className="font-bold flex justify-end">
                {product.price}
              </span>
              <div className="flex flex-row justify-end">
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
                <img src="assets/star_filled.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="w-12">
        <button
          onClick={handleNextClick}
          disabled={activeIndex === products.length - 1}
        >
          <img
            src="assets/arrow-right.svg"
            alt=""
            className="rounded-2xl object-cover"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
