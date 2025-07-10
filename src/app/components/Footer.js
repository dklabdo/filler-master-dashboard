import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-full pt-6 pb-6 bg-primary">
      <div className="w-full py-10 flex justify-center items-center ">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          className="scale-90"
          alt="..."
        />
      </div>
      <hr className="w-[80%] mx-auto bg-white outline-none border-none   h-[1px] " />
      <div className="px-4 w-full md:pl-12 justify-center pt-10 flex flex-wrap">
        <div className="flex w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-white text-lg font-semibold ">Contact</h1>
          <a className="text-white text-sm font-medium ">+213 6 99 65 34</a>
          <a className="text-white text-sm font-medium ">ephyre@gmail.com</a>
          <a className="text-white text-sm font-medium ">sidi bel-abbes</a>
        </div>
        <div className="flex w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-white text-lg font-semibold ">Legal</h1>
          <a className="text-white text-sm font-medium ">Privacy Policy</a>
          <a className="text-white text-sm font-medium ">Terms & Services</a>
          <a className="text-white text-sm font-medium ">Team</a>
        </div>
        <div className="flex w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-white text-lg font-semibold ">Quick Links</h1>
          <a className="text-white text-sm font-medium ">Products</a>
          <a className="text-white text-sm font-medium ">Log-in</a>
          <a className="text-white text-sm font-medium ">News</a>
        </div>
        <div className="flex  w-1/2 md:w-1/4 flex-col py-6 px-5 gap-4 ">
          <h1 className="text-white text-lg font-semibold ">Social media</h1>
          <Image
            src="/qr.png"
            width={60}
            height={60}
            className=""
            alt="k-linker"
          />
          <div className="flex gap-2">
            <a className="text-white text-sm font-medium ">
                <Facebook />
            </a>
            <a className="text-white text-sm font-medium ">
                <Instagram />
            </a>
          </div>
        </div>
        <div className="w-full pt-6 text-sm text-center pr-4  flex justify-center text-white">
          &copy;Copyright <br />
          All right reserved to ArcDev 2025
        </div>
      </div>
    </div>
  );
}

export default Footer;
