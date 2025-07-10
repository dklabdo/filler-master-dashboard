import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProductCard() {
  const count = 4;
  return (
    <div className=" keen-slider__slide min-w-[300px] w-full max-w-[360px] h-[480px]  ">
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
          CeraVe Gel-Crème Hydratant Oil Control Crème Hydratant Oil Control{" "}
        </h3>
        <div className="w-full py-2 flex gap-2 items-center ">
          {Array.from({ length: count }).map((_, index) => (
            <span key={index} className=" text-yellow-500 ">
              <Star size={20} className="fill-yellow-500" />
            </span>
          ))}
          <p className="text-gray-700"> (88) </p>
        </div>
        <div className=" w-full flex justify-between items-center   ">
          <div>
            <h4 className="text-lg text-primary font-semibold  ">12000000 DA</h4>
            <p className="text-base line-through text-gray-700 font-medium  ">
              1000 DA
            </p>
          </div>
          <button className="px-4 scale-90 hover:scale-95 flex items-center gap-2 w-fit bg-primary text-white py-3 rounded-lg hover:bg-primary-dark cursor-pointer transition ">
            <ShoppingCart size={18} className="text-white" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
