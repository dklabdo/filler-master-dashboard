"use client";

import "aos/dist/aos.css";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import { Star } from "lucide-react";

function Bokala() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div dir="ltr" className="w-full -translate-y-10 scale-95 flex justify-center  ">
      <Swiper
        className="w-full   swiper "
        modules={[Autoplay, Pagination]}
        initialSlide={1}
        effect="coverflow"
        coverflowEffect={{ slideShadows: false }}
        spaceBetween={0} // Creates overlap for partial visibility
        slidesPerView={1} // Number of slides per view
        centeredSlides={true} // Keeps the active slide in the center
        loop={true} // Enables infinite looping
        autoplay={{
          delay: 3000, // Continuous movement
          duration: 2500, // Speed of the animation
          disableOnInteraction: false,
          reverseDirection: false, // Ensures bidirectional scrolling
        }}
        watchSlidesProgress={true} // Ensures visibility tracking
        watchSlidesVisibility={true} // Keeps slides visible
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          1024: {
            slidesPerView: 1.9,
            spaceBetween: -130,
          },
        }}
      >
        {commentData.map((comment, index) => (
          <SwiperSlide
            key={index}
            className={` transition-all py-8 duration-1000 ${
              activeIndex === index ? "z-20" : "z-10"
            } `}
          >
            <BokalaBox
              active={activeIndex === index}
              content={comment.comment}
              name={comment.name}
              count={4}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function BokalaBox({count , name, content, active, id }) {
  return (
    <div
      className={`cursor-pointer w-[90%] md:w-[70%] shadow-lg shadow-black/5 mx-auto lg:w-full translate-y-8 ${
        active ? "shadow-2xl z-20 " : "scale-75 blur-xs z-10  "
      } rounded-xl p-4 md:px-10 bg-white md:h-[300px] flex flex-col md:flex-row  gap-4`}
    >
      
      <div className="flex py-8 px-2 flex-col gap-2 w-full  h-full  ">
        <q className=" w-full text-gray-700 text-base font-light ">{content}</q>
        <div className="w-full py-2 flex gap-2 items-center ">
          {Array.from({ length: count }).map((_, index) => (
            <span key={index} className=" text-yellow-500 ">
              <Star size={18} className="fill-yellow-500" />
            </span>
          ))}
        </div>
        <div className=" w-32 md:w-72 mt-2 mb-5 h-[1px] bg-gray-400 "></div>
        <p className="font-eb-garamond text-2xl font-semibold text-primary " > {name} </p>
      </div>
    </div>
  );
}

export const commentData = [
  {
    name: "Amira Benkacem",
    comment:
      "Grâce à la formation UI/UX, j’ai pu créer mon propre portfolio et décrocher un stage dans une agence digitale. Merci Kick Education !",
  },
  {
    name: "Yassine Haddadi – Oran",
    comment:
      "La formation en développement web m’a permis de passer de débutant à développeur freelance en quelques mois seulement.",
  },
  {
    name: "Nour El Houda",
    comment:
      "Je n’avais jamais touché à la 3D avant, maintenant je crée des objets animés pour des projets réels. Une vraie révélation.",
  },
  {
    name: "Bilal Saidi",
    comment:
      "React et Tailwind m’ont toujours fait peur, mais avec l’approche de Kick Education, j’ai tout compris étape par étape.",
  },
  {
    name: "Kenza Djenane",
    comment:
      "La formation UI/UX est bien structurée, et Figma est devenu mon outil préféré. Je recommande à 100%.",
  },
];

export default Bokala;
