import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { GrFacebookOption } from "react-icons/gr";

import { AiOutlineInstagram } from "react-icons/ai";

export default function BakebeFooter() {
  return (
    <>
      <div
        className="bg-tfr-yellow text-[10px] py-4"
        style={{ fontFamily: "Helvetica, sans-serif" }}
      >
        <div className="flex flex-row justify-center gap-3 text-[black] text-[25px] ">
          <div className="text-[20px]">CONNECT WITH US</div>
          <div className="rounded-full h-[30px] w-[30px] bg-black flex justify-center">
            <GrFacebookOption size={20} className="text-tfr-yellow my-auto" />
          </div>
          <div className="rounded-full h-[30px] w-[30px] bg-black flex justify-center">
            <AiOutlineInstagram size={25} className="text-tfr-yellow my-auto" />
          </div>
          <div className="rounded-full h-[30px] w-[30px] bg-black flex justify-center">
            <FaTiktok size={18} className="text-tfr-yellow my-auto" />
          </div>
        </div>
        <div className="flex flex-col mt-1 text-[10px] tablet:text-[13px] tablet:laptop:laptopL:laptop4k">
          <div className=" text-center">OPENING HOURS:</div>
          <div className=" text-center">7:00 PM to 3:00 AM</div>
          <div className=" text-center">
            +63 945-733-4256 | +63 956-369-7170
          </div>
          <div className=" text-center">email@thefunroof.com</div>
          <div className=" text-center">Mattheus Building</div>
          <div className=" text-center">
            5382 General Luna, Makati, 1210 Metro Manila
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-black  text-tfr-pink">
        <div className="text-center text-[16px] my-2">© 2023 The Fun Guty Corp.</div>
      </div>
    </>
  );
}
