"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu, Pencil, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddRecomondation from "./AddRecomondation";
import axios from "axios";

function Algo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://filermaster.onrender.com/api/recommendations"
        );
        setData(res.data);
        console.log("✅ Data:", res.data);
      } catch (err) {
        console.error("❌ Error:", err.response?.data || err.message);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="w-full  h-full      ">
      <div className="flex h-full pb-36 overflow-auto gap-8 p-4 flex-col">
        {data &&
          data.data.map((rec) => (
            <RecemondationLine data={rec} key={rec._id} />
          ))}
      </div>
      <Dialog className=" w-full  ">
        <DialogTrigger className="absolute  bottom-4 right-4 text-white p-2 bg-black rounded-md  ">
          {" "}
          Add a recomondation{" "}
        </DialogTrigger>
        <DialogContent className={"min-w-[80%] "}>
          <AddRecomondation />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function RecemondationLine({ data }) {
  console.log(data);

  return (
    <div className="w-full relative rounded-md py-6 p-4 bg-gray-50 shadow-lg shadow-black/5  items-center flex gap-2 ">
      <div className=" w-full flex flex-col gap-2 ">
        <div className=" w-full flex-col lg:flex-row flex gap-2 ">
          <div className=" w-full lg:w-[33%] flex flex-col gap-3  ">
            <p className=" font-semibold  "> Forme generale du visage  </p>
            <p className=" font-extralight text-xs bg-black text-white w-fit  p-2 rounded-md ">
              {data.form.faceForm}
            </p>
          </div>
          <div className=" w-full lg:w-[33%] flex flex-col gap-3  ">
            <p className=" font-semibold  "> Volume des joues (mid face)  </p>
            <p className=" font-extralight text-xs bg-black text-white w-fit  p-2 rounded-md ">
              {data.form.Volume}
            </p>
          </div>
          <div className=" w-full lg:w-[33%] flex flex-col gap-3  ">
            <p className=" font-semibold  "> Relachement cutané  </p>
            <p className=" font-extralight text-xs bg-black text-white w-fit  p-2 rounded-md ">
              {data.form.relachement ? "Oui" : "Non"}
            </p>
          </div>
        </div>
        <div className=" flex whitespace-nowrap items-center gap-2 my-4  ">
          <p> Recommandation et volume: </p>
          <div className=" h-[1.5px] w-full bg-black "></div>
        </div>
        <div className="gap-3 w-full flex flex-wrap ">
          {data.RecommandationsTitle.map((rec, index) => (
            <p className=" font-extralight text-sm bg-black text-white w-fit  p-2 rounded-md ">
              <span className="font-bold ">
                {" "}
                {rec.map((text, ind) => {
                  return text + `${ind < rec.length - 1 ? " , " : " "}`;
                })}{" "}
                /{" "}
              </span>
              {data.Volume[index]}
            </p>
          ))}
        </div>
        <div className=" flex whitespace-nowrap items-center gap-2 my-4  ">
          <p> Zone a eviter : </p>
          <div className=" h-[1.5px] w-full bg-black "></div>
        </div>
        <div className="gap-3 w-full flex flex-wrap ">
          {data.ZoneEviter.map((rec, index) => (
            <Bubble key={index} title={rec.title} text={rec.description} />
          ))}
        </div>
        <div className=" flex whitespace-nowrap items-center gap-2 my-4  ">
          <p> Mesure de securité : </p>
          <div className=" h-[1.5px] w-full bg-black "></div>
        </div>
        <div className="gap-3 w-full flex flex-wrap ">
          {data.securite.map((rec, index) => (
            <Bubble key={index} title={rec.title} text={rec.description} />
          ))}
        </div>
        <div className=" flex whitespace-nowrap items-center gap-2 my-4  ">
          <p> Objective: </p>
          <div className=" h-[1.5px] w-full bg-black "></div>
        </div>
        <div className="gap-3 w-full flex flex-wrap ">
          {data.objective.map((obj, index) => (
            <p className=" font-extralight text-sm bg-black text-white w-fit  p-2 rounded-md ">
              {obj}
            </p>
          ))}
        </div>
      </div>
      {/* <Menubar className="p-0 bg-transparent border-none outline-none shadow-none absolute top-2 right-2 ">
        <MenubarMenu>
          <MenubarTrigger className="">
            {" "}
            <button className="bg-black  text-white p-2 w-8 h-8 rounded-full flex items-center justify-center ">
              <Menu />
            </button>{" "}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Suprimer</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Modifier</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar> */}
    </div>
  );
}

function Bubble({ title, text }) {
  return (
    <p className=" font-extralight text-sm bg-black text-white w-fit  p-2 rounded-md ">
      <span className="font-bold "> {title} : </span>
      {text}
    </p>
  );
}

export default Algo;
