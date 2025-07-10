import { MoveUp } from "lucide-react";
import Image from "next/image";
import React from "react";

function NewProduct() {
    const count = 35
  return (
    <div className=" w-full  mt-4 overflow-x-hidden xl:container mx-auto flex flex-col-reverse  gap-4 ">
      {/* <div className=" w-full  ">
        <Image
          className="w-full"
          alt="...."
          width={9000}
          height={2000}
          src="/bigimg.jpg"
        />
      </div> */}
      <div className=" lg:container  mx-auto lg:pb-2 pb-24 lg:h-[550px]  w-full flex flex-col gap-2   ">
        <div className="w-full p-4 flex justify-between md:px-3 items-center ">
          <div className="flex items-center ">
            <div className=" w-[15px] rounded-sm bg-primary h-[35px] "></div>
            <h2 className="text-xl font-semibold text-gray-800 px-3 ">
              New product
            </h2>
          </div>
          <div className="flex items-center gap-2 ">
            <button className="p-2 w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center   ">
              <MoveUp size={20} />
            </button>
          </div>
        </div>
        <div className=" w-full lg:scale-110 justify-center flex-col pt-12 lg:h-[420px] lg:flex-row flex gap-8  ">
          <div className="  mt-2 h-full flex flex-col ">
            <div className=" w-full flex justify-center lg:justify-end items-center   h-[80%] ">
              <Image
                className="w-fit scale-90 h-full object-contain"
                alt="new product"
                width={2000}
                height={2000}
                src="/new-product.jpg"
              />
            </div>
            <div className=" w-full pt-4 text-center h-[20%] ">
              <h3 className="text-lg font-semibold text-gray-800">
                New Product Title
              </h3>
              <p> 50000DA </p>
            </div>
          </div>
          <div className="w-full lg:w-[380px]  h-full flex flex-col gap-2 ">
            <div className="text-lg flex  px-2 lg:pl-1 gap-2 overflow-hidden flex-wrap font-semibold  text-primary w-full  h-[20%] ">
              {Array.from({ length: count }).map((_, index) => (
                <p key={index} className=" hidden lg:block ">
                  New
                </p>
              ))}
              
            </div>
            <div className=" w-full h-[80%]   ">
              <Image
                className="w-full  md:scale-90 lg:scale-100 min-w-full min-h-full h-full object-contain"
                alt="new product"
                width={2000}
                height={2000}
                src="/women.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
