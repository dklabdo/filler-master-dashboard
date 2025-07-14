"use client";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [log, setLog] = useState(false);
  return (
    <div className=" w-full flex-col lg:flex-row flex items-center lg:container h-dvh lg:p-5  ">
      <div className=" hidden lg:flex w-1/2  scale-90 p-4  justify-center items-center ">
        <Image src="/lady.png" width={400} height={300} alt="....." />
      </div>
      <div className=" flex mb-6 justify-center lg:hidden items-center w-full h-20 bg-primary ">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={50}
          className="object-contain  "
        />
      </div>
      {log ? <LogInForm log={setLog} /> : <Register log={setLog} />}
    </div>
  );
}

function LogInForm({ log }) {
  const [show, setshow] = useState(false);

  return (
    <form className="lg:scale-[.87] w-full lg:w-1/2 px-3 md:px-6 flex flex-col ">
      <h2 className=" font-eb-garamond font-semibold mb-5 text-3xl text-primary ">
        Welcome back{" "}
      </h2>

      <div className=" w-full flex flex-col gap-2 my-2  ">
        <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
          <Mail size={20} />
          Email
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
        />
      </div>
      <div className=" w-full flex flex-col gap-2 my-2  ">
        <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
          <Lock size={20} />
          Mot de pass
        </label>
        <div className="flex items-center -space-x-10 ">
          <input
            type={show ? "text" : "password"}
            placeholder="*********"
            className="w-full p-[10px] pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-primary "
          />
          {show ? (
            <EyeOff onClick={() => setshow(false)} className="text-gray-500" />
          ) : (
            <Eye onClick={() => setshow(true)} className="text-gray-500" />
          )}
        </div>
      </div>
      <a
        onClick={() => log(false)}
        className="font-light cursor-pointer py-2 text-sm text-primary underline  "
      >
        {" "}
        You don't have an account ?{" "}
      </a>

      <button className="lg:w-fit mt-6 py-3 px-8 rounded-md bg-primary text-white ">
        Register
      </button>
    </form>
  );
}
function Register({ log }) {
  const [show, setshow] = useState(false);

  return (
    <form className="lg:scale-[.87] w-full lg:w-1/2 px-3 md:px-6 flex flex-col ">
      <h2 className="font-eb-garamond font-semibold mb-5 text-3xl text-primary ">
        Welcome to ephyre
      </h2>

      <div className=" w-full flex  flex-col gap-2 my-2  ">
        <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
          <User size={20} />
          Full name
        </label>
        <input
          type="text"
          placeholder="First name last name"
          className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
        />
      </div>
      <div className=" w-full flex flex-col gap-2 my-2  ">
        <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
          <Phone size={20} />
          Phone number
        </label>
        <input
          type="number"
          placeholder="0X XX XX XX XX"
          className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
        />
      </div>

      <div className=" w-full flex flex-col gap-2 my-2  ">
        <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
          <Mail size={20} />
          Email
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
        />
      </div>
      <div className=" w-full flex flex-col gap-2 my-2  ">
        <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
          <Lock size={20} />
          Mot de pass
        </label>
        <div className="flex items-center -space-x-10 ">
          <input
            type={show ? "text" : "password"}
            placeholder="*********"
            className="w-full p-[10px] pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-primary "
          />
          {show ? (
            <EyeOff onClick={() => setshow(false)} className="text-gray-500" />
          ) : (
            <Eye onClick={() => setshow(true)} className="text-gray-500" />
          )}
        </div>
      </div>
      <a
        onClick={() => log(true)}
        className="font-light cursor-pointer py-2 text-sm text-primary underline  "
      >
        {" "}
        Already have an account ?{" "}
      </a>
      <button className="lg:w-fit mt-6 py-3 px-8 rounded-md bg-primary text-white ">
        Register
      </button>
    </form>
  );
}

export default page;
