"use client";
import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import TopSales from "./components/TopSales";
import Stat from "./components/Stat";
import AllProduct from "./components/AllProduct";
import Comment from "./components/Comment";
import NewProduct from "./components/NewProduct";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { AppContext } from "./Provider/AppProvider";
import Aos from "aos";

function page() {
  const { locale, messages } = useContext(AppContext);
  useEffect(() => {
    Aos.init(); 
  }, []);
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === "fr" ? "ltr" : "rtl"} className=" w-full  h-dvh   ">
        <Header />
        <Nav />
        <Hero />
        <Discover />
        <TopSales />
        <Stat />
        <AllProduct />
        <Comment />
        <NewProduct />
        <Features />
        <Feedback />
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}

export default page;
