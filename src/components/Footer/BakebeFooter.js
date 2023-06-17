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
        className="bg-bakebe-footerpink text-[11px] py-4"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="flex flex-row justify-between text-white  mx-[3%]">
          <div className="">© Bakebe Baking Studio 2023</div>
          <div className="text-right">
            Terms and Conditions | Privacy Policy
          </div>
        </div>
      </div>
    </>
  );
}
