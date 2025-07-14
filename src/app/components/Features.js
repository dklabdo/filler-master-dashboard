
import "aos/dist/aos.css";

import { Headset, PlusCircle, ShieldCheck, Truck } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

function Features() {
  const t = useTranslations("services");
  return (
    <div className="flex-col py-10 md:flex-row w-full  flex items-center justify-center gap-12 ">
      <div       data-aos="zoom-in"
 className="flex flex-col items-center ">
        <div className="scale-[.84] mb-3 w-20 flex justify-center items-center h-20 rounded-full bg-gray-300 ">
          <div className="flex justify-center text-white items-center w-14 h-14 rounded-full bg-primary ">
            <Truck size={25} />
          </div>
        </div>
        <h3 className="text-base font-bold text-black">
          {" "}
          {t("delivery.title")}{" "}
        </h3>
        <p className="text-sm text-gray-600 font-light">{t("delivery.text")}</p>
      </div>
      <div       data-aos="zoom-in"
 className="flex flex-col items-center ">
        <div className="scale-[.84] mb-3 w-20 flex justify-center items-center h-20 rounded-full bg-gray-300 ">
          <div className="flex justify-center text-white items-center w-14 h-14 rounded-full bg-primary ">
            <Headset size={25} />
          </div>
        </div>
        <h3 className="text-base font-bold text-black">
          {" "}
          {t("support.title")}{" "}
        </h3>
        <p className="text-sm text-gray-600 font-light">{t("support.text")}</p>
      </div>
      <div       data-aos="zoom-in"
 className="flex flex-col items-center ">
        <div className="scale-[.84] mb-3 w-20 flex justify-center items-center h-20 rounded-full bg-gray-300 ">
          <div className="flex justify-center text-white items-center w-14 h-14 rounded-full bg-primary ">
            <ShieldCheck size={25} />
          </div>
        </div>
        <h3 className="text-base font-bold text-black">{t("quality.title")}</h3>
        <p className="text-sm text-gray-600 font-light">{t("quality.text")}</p>
      </div>
    </div>
  );
}

export default Features;
