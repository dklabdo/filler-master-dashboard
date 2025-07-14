"use client";

import "aos/dist/aos.css";

import { ChevronDown, Languages, Menu, Phone } from "lucide-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../Provider/AppProvider";


function Header() {
  const {locale , setLocale} = useContext(AppContext)
  return (
    <div  dir="ltr" className=" fixed  z-50 top-0 left-0 w-full h-12 md:h-16 flex items-center justify-between md:px-6 bg-primary text-white ">
      <div className=" flex scale-90 pl-2 items-center gap-2 ">
        <Phone size={18} className=" text-white " />
        <span className=" text-sm mt-[2px] ">+213 234 567 890</span>
      </div>
      <div>
        <button onClick={() => setLocale(locale === 'fr' ? 'ar' : 'fr')} className="pr-4 text-lg flex  gap-1 items-center" >
          <Languages size={18} />
          {locale}
        </button>
      </div>
    </div>
  );
}

export default Header;
