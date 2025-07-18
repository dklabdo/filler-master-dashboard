"use client";
import { Copy, Eye, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { commentData } from "./Comment";
import Checkout from "./Checkout";

const productReviews = [
  {
    comment: "Amazing quality! I use it every day and love the results.",
    stars: 5,
  },
  {
    comment: "Good product overall, but delivery was a bit slow.",
    stars: 4,
  },
  {
    comment: "It’s okay, not the best I’ve tried.",
    stars: 3,
  },
  {
    comment: "Didn’t work as expected and had a weird smell.",
    stars: 2,
  },
  {
    comment: "Terrible experience. Totally disappointed.",
    stars: 1,
  },
];

function ProductDetailsPage({ id }) {
  const count = 5;
  const [quantity, setquantity] = useState(1);
  return (
    <div dir="ltr" className="   w-full  flex-col scale-95 lg:scale-[.85] lg:flex-row lg:mt-0 lg:pt-28 flex pb-32 mt-22 lg:px-3 h-full   ">
      <div className="w-full lg:w-[45%] min-h-[470px] px-4 lg:h-full flex gap-3 flex-col ">
        <div className=" w-full  h-[70%] bg-gray-200 "></div>
        <div className="scrollbar-thin-white pb-3 w-full flex overflow-x-auto gap-3 h-[30%]  ">
          <div className=" min-w-32 h-full bg-gray-200 "></div>
          <div className=" min-w-32 h-full bg-gray-200 "></div>
          <div className=" min-w-32 h-full bg-gray-200 "></div>
          <div className=" min-w-32 h-full bg-gray-200 "></div>
          <div className=" min-w-32 h-full bg-gray-200 "></div>
          <div className=" min-w-32 h-full bg-gray-200 "></div>
          <div className=" min-w-32 h-full bg-gray-200 "></div>
        </div>
      </div>
      <div className="w-full lg:w-[55%] lg:p-5 p-3 lg:pl-8  h-full flex flex-col ">
        <div className=" w-full  flex items-center gap-1 ">
          {Array.from({ length: count }).map((_, index) => (
            <span key={index} className=" text-yellow-500 ">
              <Star size={18} className="fill-yellow-500" />
            </span>
          ))}
          <p className=" text-gray-400 px-2 font-light ">
            {" "}
            (21.239) user feedbacks{" "}
          </p>
        </div>
        <h2 className="w-full text-2xl font-bold text-gray-900 py-3 ">
          CeraVe Gel-Crème Hydratant Oil Control
        </h2>
        <p className=" w-full line-clamp-none  cursor-pointer hover:line-clamp-none text-sm text-justify font-light text-gray-700 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a typwcwxce specimen book. It has survived not only
          five centuries, but also
        </p>
        <div className=" w-full flex items-center gap-6 ">
          <div className=" flex gap-2 mt-4 ">
            {" "}
            <p className=" text-primary font-semibold ">Brand :</p>{" "}
            <span className=" text-gray-600 font-light ">Cerave</span>{" "}
          </div>
          <div className=" flex gap-2 mt-4 ">
            {" "}
            <p className=" text-primary font-semibold ">Category :</p>{" "}
            <span className=" text-gray-600 font-light "> Cosmetics </span>{" "}
          </div>
        </div>
        <div className="w-full items-center pt-5 flex justify-between ">
          <div className="flex items-center gap-2">
            <p className="  text-xl text-primary font-bold "> 1500DA </p>
            <p className="text-gray-500 line-through text-lg "> 1000DA </p>
          </div>
          <p className=" bg-[#EFD33D] text-gray-900 font-semibold  text-base py-[8px] px-3 rounded-sm  ">
            {" "}
            21% Off{" "}
          </p>
        </div>
        <div className=" w-full h-[.6px] bg-gray-400 my-6 "></div>
        <div className=" flex flex-wrap items-center gap-3 ">
          <div className="font-light w-[47.5%] justify-center lg:w-fit flex-row-reverse border-[.7px] border-gray-400 flex items-center gap-4 py-3 px-2 rounded-sm ">
            <button
              className="cursor-pointer"
              onClick={() => setquantity(quantity + 1)}
            >
              {" "}
              <Plus />{" "}
            </button>
            <span> 0{quantity} </span>
            <button
              className="cursor-pointer"
              onClick={() => {
                quantity > 1 && setquantity(quantity - 1);
              }}
            >
              {" "}
              <Minus />{" "}
            </button>
          </div>
          <button className="whitespace-nowrap text-sm w-[47.5%] justify-center lg:w-fit py-[13px] cursor-pointer text-white px-6 flex items-center gap-2 bg-primary rounded-sm ">
            Ajouter <ShoppingCart size={20} />
          </button>
          <Checkout outline={true} />
        </div>
        <div className=" w-full pt-5 gap-2 text-gray-600 font-medium flex justify-between items-center  ">
          <AlertDialog className=" ">
            <AlertDialogTrigger>
              <p className=" flex items-center gap-2 ">
                {" "}
                Voir les Commentaire <Eye size={22} />{" "}
              </p>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="w-full text-center ">
                  Commentaire
                </AlertDialogTitle>

                <AlertDialogDescription className="p-2 lg:p-4 h-80 w-full overflow-y-auto ">
                    {
                        productReviews.map((com , index) => {
                            return (
                                <CommentBox comment={com.comment} star={com.stars} />
                            )
                        })
                    }
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel> Close </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <p className=" flex items-center gap-2 ">
            {" "}
            Partager <Copy size={20} />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function CommentBox({ comment, star }) {
  return (
    <div className="text-gray-50 px-3 py-4 my-2 rounded-lg shadow-md shadow-black/5 w-full flex flex-col gap-3  ">
      <p className="text-justify line-clamp-6 text-gray-800 "> {comment} </p>
      <div className=" w-full flex items-center gap-1  ">
        {Array.from({ length: star }).map((_, index) => (
          <span key={index} className=" text-yellow-500 ">
            <Star size={13} className="fill-yellow-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
