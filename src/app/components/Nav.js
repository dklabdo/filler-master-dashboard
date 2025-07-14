"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { ChartAreaIcon, Menu, Search, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Chart from "../ui/Chart";
import { useTranslations } from "next-intl";

function Nav({ isSearch = true }) {
  const [opensearch, setopensearch] = useState(false);
  const t = useTranslations("nav");

  return (
    <nav
      dir="ltr"
      className={` fixed ${isSearch ? "top-12 lg:top-[60px]" : "top-0"} left-0 z-50 bg-white w-full border-b-[1.5px] border-gray-300 py-4 flex px-4 md:px-8 justify-between items-center `}
    >
      {opensearch ? (
        <div className="flex bg-gray-100 rounded-lg py-1 w-full items-center  ">
          <input
            type="text"
            placeholder="Search..."
            className=" px-4 py-2 w-full outline-none bg-transparent "
          />
          <button
            onClick={() => setopensearch(false)}
            className=" pr-3 py-2  text-gray-900 rounded-r  "
          >
            {" "}
            <X />{" "}
          </button>
        </div>
      ) : (
        <>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="object-contain md:mr-12 lg:mr-32 hidden md:block "
          />
          <Image
            src="/logo2.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain rounded-xl md:hidden "
          />
          <ul className="hidden md:flex  items-center lg:gap-10 gap-4 px-3 ">
            <a
              href="/#home"
              className=" transition  hover:underline text-gray-800 hover:text-primary cursor-pointer "
            >
              {t("home")}
            </a>

            <a
              href="/#products"
              className=" transition hover:underline text-gray-800 hover:text-primary cursor-pointer "
            >
              {t("products")}
            </a>
            <a
              href="/#sub"
              className=" transition hover:underline text-gray-800 hover:text-primary cursor-pointer "
            >
              {t("subscription")}
            </a>
            <a
              href="/#contact"
              className=" transition hover:underline text-gray-800 hover:text-primary cursor-pointer "
            >
              {t("contact")}
            </a>
          </ul>
          <br />
          <div className="flex  items-center md:gap-2 ">
            {isSearch && (
              <div className="hidden md:flex bg-gray-100 rounded-lg py-1  items-center  ">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" px-4 py-2 outline-none bg-transparent "
                />
                <button className=" pr-3 py-2  text-gray-900 rounded-r  ">
                  {" "}
                  <Search />{" "}
                </button>
              </div>
            )}
            {isSearch && (
              <button
                onClick={() => setopensearch(true)}
                className=" md:hidden py-2  text-gray-900 rounded-r  "
              >
                {" "}
                <Search />{" "}
              </button>
            )}
            <Menubar className="border-none shadow-none  outline-none ">
              <MenubarMenu>
                <MenubarTrigger className=" p-0 outline-none border-none ">
                  <button className="bg-white border-none outline-none px-2 ">
                    {" "}
                    <ShoppingCart />{" "}
                  </button>
                </MenubarTrigger>
                <MenubarContent className="p-0 shadow-lg mr-2 md:mr-6 mt-5 shadow-gray-200 border-none  ">
                  <MenubarItem
                    onSelect={(e) => {
                      e.preventDefault();
                    }}
                    className="bg-white p-0 "
                  >
                    <Chart />
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <Menubar className="border-none md:hidden scale-95 outline-none ">
              <MenubarMenu className="border-none outline-none ">
                <MenubarTrigger className="p-0 border-none outline-none ">
                  {" "}
                  <button className="  bg-white outline-none border-none py-2  text-gray-900 rounded-r  ">
                    {" "}
                    <Menu />{" "}
                  </button>{" "}
                </MenubarTrigger>
                <MenubarContent className="text-gray-800 mr-6 p-2 border-none bg-white ">
                  <MenubarItem>
                    <a
                      href="/#home"
                      className="hover:bg-primary w-full text-center hover:text-white "
                    >
                      {t("home")}
                    </a>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <a
                      href="/#products"
                      className="hover:bg-primary w-full text-center hover:text-white "
                    >
                      {t("products")}
                    </a>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <a
                      href="/#top"
                      className="hover:bg-primary w-full text-center hover:text-white "
                    >
                      {t("topSales")}
                    </a>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <a
                      href="/#sub"
                      className="hover:bg-primary w-full text-center hover:text-white "
                    >
                      {t("subscription")}
                    </a>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <a
                      href="/#contact"
                      className="hover:bg-primary w-full text-center hover:text-white "
                    >
                      {t("contact")}
                    </a>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </>
      )}
    </nav>
  );
}

export default Nav;
