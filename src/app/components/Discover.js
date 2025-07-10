import Image from "next/image";
import React from "react";

function Discover() {
  return (
    <div className="container my-2 overflow-hidden mx-auto p-4 flex flex-col  ">
      <div className=" w-full flex flex-col gap-3 py-3 relative  ">
        <h2 className="font-eb-garamond text-4xl md:text-5xl  text-primary  ">
          Explore Our Shop
        </h2>
        <p className=" text-lg font-light text-gray-800  ">
          From skincare to makeup, our platform features a wide range of
          products that cater to all your beauty needs.
        </p>
      </div>
      <div className=" md:scale-90 overflow-hidden  w-full mx-auto flex-col lg:flex-row flex justify-center    ">
        <DisplayCard img={1} main={true} title="LA MOUSSE" />
        <div className=" flex flex-col md:flex-row lg:flex-col " >
          <DisplayCard img={2} main={false} title="POWERMATTE LIPSTICK" />
          <DisplayCard img={3} main={false} title="VITAMIN CREAM" />
          <DisplayCard img={1} main={false} title="DÉMAQUILLANT YEUX INTENSE" />
        </div>
      </div>
    </div>
  );
}

function DisplayCard({img , main, title }) {
  return (
    <div
      className={`border-4 border-white bg-secondary  ${
        main ? " h-[400px] md:h-[660px] md:w-[660px] " : " h-[220px] md:w-[220px]  "
      } flex flex-col justify-center p-3 gap-5 items-center `}
    >
        <Image className={`   ${main ? "  " : " w-32 h-32  "} `} src={`/p${img}.png`} width={300} height={300} alt="..." />
        <p className={`line-clamp-2 text-center ${main ? " text-xl md:text-3xl" : " text-sm "}  text-black font-semibold `} > {title} </p>
    </div>
  );
}

export default Discover;
