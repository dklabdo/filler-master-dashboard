"use client";
import { ShoppingBag, X } from "lucide-react";
import React from "react";

function Chart() {
  return (
    <div className="w-[350px] flex flex-col  h-[430px]     bg-white">
        <div className=" w-full px-3 py-2 pt-4 border-b-[1px] border-gray-300  ">
            <h1 className="text-base font-medium flex items-center gap-2 text-gray-800"> <ShoppingBag  /> Chart </h1>
        </div>
        <div className="w-full px-2 my-4 overflow-y-auto h-full flex flex-col gap-2  " >
            <ChartComponent img="/product.png" title="CAUDALIE Hydratant 3-en-1 VineActiv Soin Hydratant" price={29.99} quantity={2} />
            <ChartComponent img="/product.png" title="CAUDALIE Hydratant 3-en-1 VineActiv Soin Hydratant" price={29.99} quantity={2} />
            <ChartComponent img="/product.png" title="CAUDALIE Hydratant 3-en-1 VineActiv Soin Hydratant" price={29.99} quantity={2} />
            <ChartComponent img="/product.png" title="CAUDALIE Hydratant 3-en-1 VineActiv Soin Hydratant" price={29.99} quantity={2} />
            
        </div>
        <div className=" w-full px-3 py-3  border-t-[1px] border-gray-300  ">

            <div className=" w-full px-1 flex justify-between items-center  " >
                <p className=" text-gray-700 text-sm font-medium " > Total : </p>
                <p className=" text-primary  font-semibold " > 1200DA </p>
            </div>
            <button className=" w-full mt-3 bg-primary text-white py-2 rounded-xs hover:bg-primary-dark transition " >
                Checkout
            </button>
           
            
        </div>
    </div>
  );
}

function ChartComponent({img , title , price , quantity}) {
    function handleRemoveItem(){
        // Logic to remove item from chart
        console.log("Item removed");
    }
    return (
        <div className=" w-full min-h-24 " >
            <div className=" flex items-center gap-4 h-full ">
                <img src={img} alt={title} className=" w-16 h-16 object-contain " />
                <div className="w-full flex flex-col gap-1 ">
                    <h1 className=" text-xs font-semibold text-primary ">{title}</h1>
                    <span className=" text-xs text-gray-600 ">{quantity} X {price} DA</span>
                </div>
                <button onClick={() => handleRemoveItem()} className="text-primary cursor-pointer " > <X/> </button>
            </div>
        </div>
    )
}


export default Chart;
