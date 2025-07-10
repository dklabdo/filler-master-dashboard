"use client";

import React, { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Hero() {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    renderMode: "performance",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          origin: "center",
          perView: 1.5,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          origin: "center",
          perView: 1.7,
          spacing: 30,
        },
      },
    },
    created(slider) {
      setLoaded(true);
      setInterval(() => {
        if (slider) slider.next();
      }, 4000);
    },
  });
  return (
    <div className="p-3 mt-36 md:p-6 w-full   ">
      <div ref={sliderRef} className={`keen-slider ${loaded ? "zoom-in" : "opacity-0"}`} >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center bg-gray-300 text-white rounded-xl shadow-lg h-52 md:h-64"
          >
            <h2 className="text-xl md:text-2xl font-bold">Ad {i}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
