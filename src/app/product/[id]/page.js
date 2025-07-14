"use client";
import React, { useContext } from "react";

import { NextIntlClientProvider } from "next-intl";
import Header from "@/app/components/Header";
import Nav from "@/app/components/Nav";
import { AppContext } from "@/app/Provider/AppProvider";
import ProductDetailsPage from "@/app/components/ProductDetailsPage";
import { useParams } from "next/navigation";

function page() {
  const { locale, messages } = useContext(AppContext);
  const {id} = useParams()
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={locale === "fr" ? "ltr" : "rtl"} className=" w-full overflow-hidden h-dvh   ">
        <Nav isSearch={false} />
        <ProductDetailsPage id={id} />
      </div>
    </NextIntlClientProvider>
  );
}

export default page;
