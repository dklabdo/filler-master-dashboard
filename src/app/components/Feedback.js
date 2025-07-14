import "aos/dist/aos.css";

import { useTranslations } from "next-intl";
import React from "react";

function Feedback() {
  const t = useTranslations("feedback");

  return (
    <div
      data-aos="zoom-in"
      id="contact"
      className="py-8 md:py-16 bg-primary mt-10 md:px-12 lg:rounded-lg w-full lg:container lg:mx-auto "
    >
      <div className="flex flex-col gap-4 scale-95 py-10 p-3 md:p-6   w-full bg-white rounded-md h-full  ">
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-2xl pt-4 font-semibold text-gray-800  ">
            {t("title")}
          </h2>
          <p className="text-gray-600  ">{t("text")}</p>
        </div>
        <div className=" w-full flex flex-col gap-3  ">
          <div className=" w-full flex gap-3 items-center  ">
            <input
              type="text"
              placeholder={t("name")}
              className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
            />
            <button
              type="submit"
              className="px-4 hidden md:block py-[11px] bg-primary  text-white rounded-md hover:bg-primary-dark "
            >
              {t("send")}
            </button>
          </div>
          <div className=" w-full py-2 ">
            <textarea
              placeholder={t("input")}
              className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary h-32 resize-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4  md:hidden py-[11px] bg-primary text-white rounded-md hover:bg-primary-dark "
          >
            {t("send")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
