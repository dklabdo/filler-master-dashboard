import React from "react";

function Feedback() {
  return (
    <div className="py-8 md:py-16 bg-primary mt-10 md:px-12 lg:rounded-lg w-full lg:container lg:mx-auto ">
      <div className="flex flex-col gap-4 scale-95 py-6 p-3 md:p-6   w-full bg-white rounded-md h-full  ">
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-800  ">
            We value your feedback
          </h2>
          <p className="text-gray-600  ">
            Your opinion matters to us. Please share your thoughts about our
            products and services.
          </p>
        </div>
        <div className=" w-full flex flex-col gap-3  ">
          <div className=" w-full flex gap-3 items-center  ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
            />
            <button
              type="submit"
              className="px-4 py-[11px] bg-primary text-white rounded-md hover:bg-primary-dark "
            >
              Send
            </button>
          </div>
          <div className=" w-full py-2 " >
            <textarea
              placeholder="Your Feedback"
              className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary h-32 resize-none "
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
