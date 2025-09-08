"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import Auth from "./components/Auth";
import Algo from "./components/Algo";
import Nav from "./components/Nav";

function page() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative h-dvh overflow-hidden w-full  ">
      <Nav page="algo" />
      <Algo />
    </div>
  );
}

export default page;
