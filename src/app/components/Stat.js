"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Stat() {
  const t = useTranslations("stat")
  return (
    <div data-aos="zoom-in" id="sub" className="mx-auto py-8 flex-col p-4 md:flex-row  my-16 md:w-[85%] justify-center gap-4 md:h-[460px] rounded-2xl scale-95 bg-bg flex  ">
      <div className=" w-full md:w-[25%] gap-4 justify-center flex flex-col  h-full  ">
        <h3 className="text-2xl font-semibold ">
          {t("title")}
        </h3>
        <p className=" text-sm text-gray-700 " >
          {t("text")}
        </p>
        <Link href="/subscribe" className="px-3 text-sm w-fit py-3 rounded-md bg-primary text-white  " > {t("register")} </Link>
      </div>
      <div className=
      
      "w-full md:w-[25%] flex justify-center items-center h-full  ">
        <Image src="/lady.png" width={450} height={300} alt="....." />
      </div>
      <div className="md:pl-4 w-full md:w-[26%]  h-full flex flex-col justify-center gap-6 py-8 ">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-black ">12K</h3>
          <p className="text-sm text-gray-600 font-light  ">
            {t("users")}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-black ">+1000</h3>
          <p className="text-sm text-gray-600 font-light  ">
            {t("products")}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-black ">15K</h3>
          <p className="text-sm text-gray-600 font-light  ">
            {t("orders")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
