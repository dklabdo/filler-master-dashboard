import Image from "next/image";
import React from "react";

function Stat() {
  return (
    <div className="mx-auto py-8 flex-col p-4 md:flex-row  my-16 md:w-[85%] justify-center gap-4 md:h-[460px] rounded-2xl scale-95 bg-secondary flex  ">
      <div className=" w-full md:w-[25%] gap-4 justify-center flex flex-col  h-full  ">
        <h3 className="text-2xl font-semibold ">
          Subscribe For <br /> Latest Newsletter
        </h3>
        <p className=" text-sm text-gray-700 " >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <button className="px-3 text-sm w-fit py-3 rounded-md bg-primary text-white  " > Learn more </button>
      </div>
      <div className="w-full md:w-[25%] flex justify-center items-center h-full  ">
        <Image src="/lady.png" width={200} height={150} alt="....." />
      </div>
      <div className="md:pl-4 w-full md:w-[26%]  h-full flex flex-col justify-center gap-6 py-8 ">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-black ">1M +</h3>
          <p className="text-sm text-gray-600 font-light  ">
            Things on a very small that you have any direct
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-black ">98%</h3>
          <p className="text-sm text-gray-600 font-light  ">
            Things on a very small that you have any direct
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-black ">4.9</h3>
          <p className="text-sm text-gray-600 font-light  ">
            Things on a very small that you have any direct
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
