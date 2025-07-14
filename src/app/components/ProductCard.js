"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { CirclePlus, Plus, ShoppingCart, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AppContext } from "../Provider/AppProvider";

function ProductCard() {
  const t = useTranslations("shop");
  const [rating, setRating] = useState(3); // default selected = 3
  const { locale } = useContext(AppContext);

  const handleChange = (event) => {
    console.log(event.target.value);

    setRating(parseInt(event.target.value));
  };

  const count = 4;
  return (
    <div
      data-aos="zoom-in"
      className=" keen-slider__slide min-w-[300px] w-full max-w-[360px] h-[480px]  "
    >
      <div className="flex scale-[.85] justify-center items-center pt-8  w-full h-[60%] bg-[#F9F9F9] relative rounded-2xl ">
        <p className=" w-fit py-2 px-4 scale-90 rounded-2xl bg-white text-primary absolute top-1 left-0 ">
          {" "}
          Promotion : 50%{" "}
        </p>

        <Image src="/p1.png" width={160} height={160} alt="...." />
      </div>
      <div className="scale-[.85] w-full flex gap-3 flex-col p-1 h-[40%]  ">
        <h3 className="text-lg pt-2 line-clamp-3 ">
          {" "}
          Cerivla Gel-Crème Hydratant Oil Control Crème Hydratant Oil Control{" "}
        </h3>
        <div className="w-full py-2 flex justify-between py-1 items-center ">
          <div className="flex gap-2 items-center">
            {Array.from({ length: count }).map((_, index) => (
              <span key={index} className=" text-yellow-500 ">
                <Star size={20} className="fill-yellow-500" />
              </span>
            ))}
          </div>

          <AlertDialog className=" ">
            <AlertDialogTrigger>
              <CirclePlus
                size={26}
                className="cursor-pointer animate-pulse text-primary mx-2 "
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="w-full text-center ">
                  {" "}
                  {t("question")}{" "}
                </AlertDialogTitle>
                <AlertDialogDescription className="w-full text-center ">
                  {t("callToAction")}
                </AlertDialogDescription>
                <AlertDialogDescription className="w-full flex justify-center py-5 ">
                  <div onChange={(e) => handleChange(e)} class="rating">
                    <input value="5" name="rate" id="star5" type="radio" />
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio" />
                    <label title="text" for="star4"></label>
                    <input
                      value="3"
                      name="rate"
                      id="star3"
                      type="radio"
                      checked=""
                    />
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio" />
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio" />
                    <label title="text" for="star1"></label>
                  </div>
                </AlertDialogDescription>
                <AlertDialogDescription>
                  <textarea
                    placeholder={t("commentLabel")}
                    className="w-full p-[10px] border border-gray-300 h-28 min-h-28 rounded-md focus:outline-none focus:border-primary"
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel> {t("cancel")} </AlertDialogCancel>
                <AlertDialogAction> {t("confirm")} </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className=" w-full flex justify-between items-center   ">
          <div>
            <h4 className="text-lg text-primary font-semibold  ">
              12000000 DA
            </h4>
            <p className="text-base line-through text-gray-700 font-medium  ">
              1000 DA
            </p>
          </div>
          <button className="px-4 scale-90 hover:scale-95 flex items-center gap-2 w-fit bg-primary text-white py-3 rounded-lg hover:bg-primary-dark cursor-pointer transition ">
            <ShoppingCart size={18} className="text-white" /> {t("addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
