"use client";
import { ChartAreaIcon, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
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

function Nav() {
  return (
    <nav className="fixed top-12 left-0 z-50 bg-white w-full border-b-[1.5px] border-gray-300 py-4 flex px-4 md:px-8 justify-between items-center  ">
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
      <ul className="hidden md:flex  items-center pl-6 gap-6 ">
        <a className=" transition hover:underline text-gray-800 hover:text-primary cursor-pointer ">
          Home
        </a>

        <a className=" transition hover:underline text-gray-800 hover:text-primary cursor-pointer ">
          Services
        </a>
        <a className=" transition hover:underline text-gray-800 hover:text-primary cursor-pointer ">
          Contact
        </a>
      </ul>
      <br />
      <div className="flex  items-center md:gap-2 ">
        <div className="hidden md:flex bg-gray-100 rounded-lg py-1  items-center  ">
          <input
            type="text"
            placeholder="Search..."
            className=" px-4 py-2 outline-none bg-transparent "
          />
          <button className=" pr-3 py-2  text-gray-900 rounded-r hover:bg-primary-dark ">
            {" "}
            <Search />{" "}
          </button>
        </div>
        <button className=" md:hidden py-2  text-gray-900 rounded-r hover:bg-primary-dark ">
          {" "}
          <Search />{" "}
        </button>
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
        <button className=" md:hidden py-2  text-gray-900 rounded-r hover:bg-primary-dark ">
          {" "}
          <Menu />{" "}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
