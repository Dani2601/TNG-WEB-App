import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function GootopiaFooter() {
  return (
    <div className="bg-[#BDCA7A] font-poppins">
      <div className="flex flex-row justify-center gap-5 text-[#474747] text-[35px] mt-6">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTiktok />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="flex flex-col mt-3 mx-10">
        <div className="">
          3rd Floor, SM Central Business Park, SM Mall of Asia, Pasay City
          Philippines
        </div>
        <div className="">gootopia@thenextperience.com</div>
      </div>
      <div className="flex flex-row justify-between mt-4 mx-10 pb-3">
        <div className="">Terms and Condition</div>
        <div className="font-bold">Copyright © 2023 | Gootopia</div>
        <div className="">Privacy Policty</div>
      </div>
    </div>
  );
}
