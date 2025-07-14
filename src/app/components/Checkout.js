import { Building2, Mail, MapPin, Phone, Ticket, User } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const wilayas = [
  "01 - Adrar",
  "02 - Chlef",
  "03 - Laghouat",
  "04 - Oum El Bouaghi",
  "05 - Batna",
  "06 - Béjaïa",
  "07 - Biskra",
  "08 - Béchar",
  "09 - Blida",
  "10 - Bouira",
  "11 - Tamanrasset",
  "12 - Tébessa",
  "13 - Tlemcen",
  "14 - Tiaret",
  "15 - Tizi Ouzou",
  "16 - Alger",
  "17 - Djelfa",
  "18 - Jijel",
  "19 - Sétif",
  "20 - Saïda",
  "21 - Skikda",
  "22 - Sidi Bel Abbès",
  "23 - Annaba",
  "24 - Guelma",
  "25 - Constantine",
  "26 - Médéa",
  "27 - Mostaganem",
  "28 - M'Sila",
  "29 - Mascara",
  "30 - Ouargla",
  "31 - Oran",
  "32 - El Bayadh",
  "33 - Illizi",
  "34 - Bordj Bou Arréridj",
  "35 - Boumerdès",
  "36 - El Tarf",
  "37 - Tindouf",
  "38 - Tissemsilt",
  "39 - El Oued",
  "40 - Khenchela",
  "41 - Souk Ahras",
  "42 - Tipaza",
  "43 - Mila",
  "44 - Aïn Defla",
  "45 - Naâma",
  "46 - Aïn Témouchent",
  "47 - Ghardaïa",
  "48 - Relizane",
  "49 - El M'Ghair",
  "50 - El Menia",
  "51 - Ouled Djellal",
  "52 - Bordj Badji Mokhtar",
  "53 - Béni Abbès",
  "54 - Timimoun",
  "55 - Touggourt",
  "56 - Djanet",
  "57 - In Salah",
  "58 - In Guezzam",
];

function Checkout({outline = false}) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          {" "}
          <button className={outline ? "whitespace-nowrap w-full justify-center lg:w-fit py-[11px] cursor-pointer font-medium text-primary px-4 bg-white border-[1.5px] border-primary hidden md:block rounded-sm" : "px-4 hidden md:block w-72  bg-primary text-white py-[10px] rounded-xs  transition"}  >
            {" "}
            Commander{" "}
          </button>{" "}
        </DialogTrigger>
        <DialogContent className="p-2 py-4 " >
          <div className=" w-full  h-[360px] mt-4 overflow-y-auto flex flex-col gap-3  ">
            <form className=" w-full  md:px-2 flex flex-col ">
              <h2 className=" font-eb-garamond font-semibold  text-2xl text-primary ">
                Commander
              </h2>
              <h3 className=" font-eb-garamond font-medium mb-4 text-lg text-primary ">
                5000DA
              </h3>

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
                  <Phone size={18} />
                  Numero de telephone
                </label>
                <input
                  type="number"
                  placeholder="example@gmail.com"
                  className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
                />
              </div>
              <div className=" w-full flex flex-col gap-2 my-2  ">
                <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
                  <Building2 size={20} />
                  Willaya
                </label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choisir votre Wilaya" />
                  </SelectTrigger>
                  <SelectContent className="max-h-64 overflow-y-auto">
                    {wilayas.map((wilaya, index) => (
                      <SelectItem key={index} value={wilaya}>
                        {wilaya}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className=" w-full flex flex-col gap-2 my-2  ">
                <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
                  <MapPin size={20} />
                  Localisation
                </label>
                <input
                  type="text"
                  placeholder="localisation "
                  className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
                />
              </div>
              <div className=" w-full flex flex-col gap-2 my-2  ">
                <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
                  <Ticket size={20} />
                  Coppon
                </label>
                <input
                  type="text"
                  placeholder="XXXXXX "
                  className="w-full  px-1 p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
                />
              </div>

              <div
                onClick={() => log(false)}
                className="font-light cursor-pointer flex items-center gap-2 py-2 text-sm text-primary  "
              >
                <input type="checkbox" />
                <p>
                  Accepter les{" "}
                  <span className="underline">
                    {" "}
                    conditions de ventes generales{" "}
                  </span>
                </p>
              </div>

              <button className="lg:w-fit mt-6 py-2 px-8 rounded-md bg-primary text-white ">
                Commander
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <Drawer  >
        <DrawerTrigger className="w-full m-0 p-0 " >
          <button className={outline ? "whitespace-nowrap w-full justify-center lg:w-fit py-[11px] cursor-pointer font-medium text-primary px-4 bg-white border-[1.5px] border-primary md:hidden rounded-sm" : "px-4  md:hidden w-72  bg-primary text-white py-[10px] rounded-xs  transition"} >
            {" "}
            Commander{" "}
          </button>{" "}
        </DrawerTrigger>
        <DrawerContent >
          <div className="px-3 w-full h-[380px] my-4 overflow-y-auto flex flex-col gap-3  ">
            <form className=" w-full  md:px-6 flex flex-col ">
              <h2 className=" font-eb-garamond font-semibold  text-2xl text-primary ">
                Commander
              </h2>
              <h3 className=" font-eb-garamond font-medium mb-4 text-lg text-primary ">
                5000DA
              </h3>

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
                  <Phone size={18} />
                  Numero de telephone
                </label>
                <input
                  type="number"
                  placeholder="example@gmail.com"
                  className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
                />
              </div>
              <div className=" w-full flex flex-col gap-2 my-2  ">
                <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
                  <Building2 size={20} />
                  Willaya
                </label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choisir votre Wilaya" />
                  </SelectTrigger>
                  <SelectContent className="max-h-64 overflow-y-auto">
                    {wilayas.map((wilaya, index) => (
                      <SelectItem key={index} value={wilaya}>
                        {wilaya}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className=" w-full flex flex-col gap-2 my-2  ">
                <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
                  <MapPin size={20} />
                  Localisation
                </label>
                <input
                  type="text"
                  placeholder="localisation "
                  className="w-full p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
                />
              </div>
              <div className=" w-full flex flex-col gap-2 my-2  ">
                <label className="flex text-primary pl-1 items-center gap-2 font-medium text-base ">
                  <Ticket size={20} />
                  Coppon
                </label>
                <input
                  type="text"
                  placeholder="XXXXXX "
                  className="w-full  px-1 p-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-primary "
                />
              </div>

              <div
                onClick={() => log(false)}
                className="font-light cursor-pointer flex items-center gap-2 py-2 text-sm text-primary  "
              >
                <input type="checkbox" />
                <p>
                  Accepter les{" "}
                  <span className="underline">
                    {" "}
                    conditions de ventes generales{" "}
                  </span>
                </p>
              </div>

              <button className="lg:w-fit mt-6 py-2 px-8 rounded-md bg-primary text-white ">
                Commander
              </button>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Checkout;
