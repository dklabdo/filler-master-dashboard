import { Headset, PlusCircle, ShieldCheck, Truck } from "lucide-react";
import React from "react";

function Features() {
  return (
    <div className="flex-col md:flex-row w-full md:py-20 flex items-center justify-center gap-12 ">
      <div className="flex flex-col items-center ">
        <div className="scale-[.84] mb-3 w-20 flex justify-center items-center h-20 rounded-full bg-gray-300 ">
          <div className="flex justify-center text-white items-center w-14 h-14 rounded-full bg-primary ">
            <Truck size={25} />
          </div>
        </div>
        <h3 className="text-base font-bold text-black">FREE AND FAST DELIVERY</h3>
        <p className="text-sm text-gray-600 font-light">
          Free delivery for all orders
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <div className="scale-[.84] mb-3 w-20 flex justify-center items-center h-20 rounded-full bg-gray-300 ">
          <div className="flex justify-center text-white items-center w-14 h-14 rounded-full bg-primary ">
            <Headset size={25} />
          </div>
        </div>
        <h3 className="text-base font-bold text-black">24/7 CUSTOMER SERVICE</h3>
        <p className="text-sm text-gray-600 font-light">
          Friendly 24/7 customer support
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <div className="scale-[.84] mb-3 w-20 flex justify-center items-center h-20 rounded-full bg-gray-300 ">
          <div className="flex justify-center text-white items-center w-14 h-14 rounded-full bg-primary ">
            <ShieldCheck size={25} />
          </div>
        </div>
        <h3 className="text-base font-bold text-black">
          PRODUCT QUALITY 
        </h3>
        <p className="text-sm text-gray-600 font-light">
          We care about your feedback
        </p>
      </div>
    </div>
  );
}

export default Features;
