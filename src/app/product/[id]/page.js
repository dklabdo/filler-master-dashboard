"use client";
import React, { useContext, useEffect } from "react";

import { NextIntlClientProvider } from "next-intl";
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import { AppContext } from "@/app/Provider/AppProvider";
import ProductDetailsPage from "@/app/components/ProductDetailsPage";
import { useParams } from "next/navigation";
import TopSales from "@/app/components/TopSales";
import Feedback from "@/app/components/Feedback";
import Footer from "@/app/components/Footer";
import Aos from "aos";

function page() {
  const { locale, messages } = useContext(AppContext);
  const {id} = useParams();
  useEffect(() => {
      Aos.init(); 
    }, []);
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === "fr" ? "ltr" : "rtl"} className=" w-full   h-dvh   ">
        <Nav isSearch={false} />
        <ProductDetailsPage id={id} />
        <TopSales/>
        <Feedback/>
        <Footer/>
      </div>
    </NextIntlClientProvider>
  );
}

export default page;
