"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductCard from "./ProductCard";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function TopSales() {
  const t = useTranslations('shop');

  const [sliderRef , slider] = useKeenSlider({
    loop: false,
    
    mode: "snap",
    slides: {
      perView: "auto", // allow natural card width (330px)
      spacing: 8,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: "auto", // allow natural card width (330px)
          spacing: 8,
          origin: "auto", // scroll from left on mobile
        },
      },
    },
  });

  function handlePrev() {
    if (slider.current) {
      slider.current.prev();
    }
  }

  function handleNext() {
    if (slider.current){
        slider.current.next();
    }
  }
  return (
    <div id="top" className="md:px-5 my-10 flex-col w-full flex gap-3 ">
      <div className="w-full px-3 flex justify-between md:px-3 items-center ">
        <div className="flex items-center ">
          <div className=" w-[15px] rounded-sm bg-primary h-[35px] "></div>
          <h2 className="text-xl font-semibold text-gray-800 px-3 ">
            {t('topSales')}
          </h2>
        </div>
        <div className="flex items-center gap-2 ">
          <button
            onClick={() => handlePrev()}
            className="p-2 w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center   "
          >
            <MoveLeft size={20} />
          </button>
          <button
            onClick={() => handleNext()}
            className=" p-2 w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center   "
          >
            <MoveRight size={20} />
          </button>
        </div>
      </div>
      <div dir="ltr" ref={sliderRef} className="keen-slider md:scale-95 mt-4 w-full ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full py-3 pt-12 flex justify-center  ">
        <a
          href="/"
          className=" py-3 text-white bg-primary px-4 rounded-lg  "
        >
          {t('allProducts')}
        </a>
      </div>
    </div>
  );
}

export default TopSales;
