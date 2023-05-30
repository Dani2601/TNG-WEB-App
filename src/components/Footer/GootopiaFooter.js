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
    <div className="bg-[#BDCA7A] font-poppins text-[10px] py-4">
      <div className="flex flex-row justify-center gap-3 text-[#474747] text-[25px] ">
        <a href=" https://www.facebook.com/GootopiaPh" target="_blank">
          <FaFacebookSquare />
        </a>

        <a href=" https://www.instagram.com/gootopiaph/" target="_blank">
          <FaInstagramSquare />
        </a>
        <a href="https://www.tiktok.com/@gootopia" target="_blank">
          <FaTiktok />
        </a>
        {/* <a href="" target="">
          <FaTwitter />
        </a> */}
        <a href="https://www.youtube.com/watch?v=ehZqlrxfg-k" target="__blank">
          <FaYoutube />
        </a>
      </div>
      <div className="flex flex-col mt-1 text-[10px] tablet:text-[13px] tablet:laptop:laptopL:laptop4k">
        <div className=" text-center">
          3rd Floor, SM Central Business Park, SM Mall of Asia, Pasay City
          Philippines | gootopia@thenextperience.com
        </div>
      </div>
      <div className="font-bold text-center mt-1">
        Copyright © 2023 | Gootopia
      </div>

      <div className="flex flex-row mt-1 justify-center">
        <div className="text-center">Terms and Condition | Privacy Policty</div>
      </div>
    </div>
  );
}
