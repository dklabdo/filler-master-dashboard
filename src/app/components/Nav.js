import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav({ page }) {
  return (
    <div className=" w-full  items-center flex justify-between px-4 ">
      {page === "algo" && (
        <>
          <Image
            src="/logo.jpg"
            className="mt-2"
            width={70}
            height={80}
            alt="...."
          />
          {/* <div className="flex h-fit py-[10px]  items-center border-[1.8px] border-gray-700 rounded-md px-4 -space-x-10    ">
            <Search className="text-gray-700" size={22} />
            <input
              type="text"
              placeholder="Search..."
              className=" outline-none  py-0 pl-12 min-w-72 border-none   "
            />
          </div> */}
          <div className=" flex items-center gap-3 ">
            <Link
              href="/algo"
              className="bg-black text-sm rounded-md py-3 px-3 text-white font-medium "
            >
              Recemondation
            </Link>
            {/* <Link
              href="/blogs"
              className=" bg-gray-100 text-sm rounded-md py-2 px-3 text-black font-medium "
            >
              Article
            </Link> */}
          </div>
        </>
      )}
      {page === "blogs" && (
        <>
          <Image
            src="/logo.jpg"
            className="mt-2"
            width={70}
            height={80}
            alt="...."
          />
          <div className="flex h-fit py-[10px]  items-center border-[1.8px] border-gray-700 rounded-md px-4 -space-x-10    ">
            <Search className="text-gray-700" size={22} />
            <input
              type="text"
              placeholder="Search..."
              className=" outline-none  py-0 pl-12 min-w-72 border-none   "
            />
          </div>
          <div className=" flex items-center gap-3 ">
            <Link
              href="/algo"
              className=" bg-gray-100 text-sm rounded-md py-2 px-3 text-black font-light "
            >
              Recemondation
            </Link>
            {/* <Link
              href="/blogs"
              className="bg-black text-sm rounded-md py-2 px-3 text-white font-light "
            >
              Article
            </Link> */}
          </div>
        </>
      )}
    </div>
  );
}

export default Nav;
