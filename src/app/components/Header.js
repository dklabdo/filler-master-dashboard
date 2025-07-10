"use client";
import { ChevronDown, Menu, Phone } from "lucide-react";
import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Header() {
  const [selected, setSelected] = useState(0);
  const selectArray = ["En", "Fr", "Ar"];
  return (
    <div className=" fixed md:pb-3 z-50 top-0 left-0 w-full h-12 md:h-16 flex items-center justify-between md:px-6 bg-primary text-white ">
      <div className=" flex scale-90 pl-2 items-center gap-2 ">
        <Phone size={18} className=" text-white " />
        <span className=" text-sm mt-[2px] ">+213 234 567 890</span>
      </div>
      <div>
        <Menubar className="border-none scale-95 outline-none " >
          <MenubarMenu className="border-none outline-none ">
            <MenubarTrigger className="p-0 border-none outline-none " > <button className="px-2 flex  items-center text-base  gap-1 bg-primary " > {selectArray[selected]} <ChevronDown size={20} />  </button> </MenubarTrigger>
            <MenubarContent className="text-gray-800 p-2 border-none bg-white ">
              <MenubarItem className="hover:bg-primary hover:text-white " onClick={() => setSelected(0)} > {selectArray[0]} </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="hover:bg-primary hover:text-white " onClick={() => setSelected(1)} >{selectArray[1]}  </MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="hover:bg-primary hover:text-white " onClick={() => setSelected(2)} >{selectArray[2]}   </MenubarItem>
              
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}

export default Header;
