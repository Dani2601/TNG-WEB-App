import React from "react";
import GootopiaContainer from "../../Container/GootopiaContainter";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import sumbit from "../../../assets/Gootopia/Contact/SubmitButton.png";
import connect from "../../../assets/Gootopia/Contact/Connect.png";

import { Accordion } from "../Accordion/Accordion";
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
export default function Faqs() {
  return (
    <GootopiaContainer>
      <div className="max-h-full min-h-screen bg-gootopia-purp ">
        <img class="w-full" src={dripping} alt="gootopialanding" />
        <div className="flex flex-row justify-center">
          <span className="font-flavors text-gootopia-pinkText text-[30px] tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k">
            CONTACT US
          </span>
        </div>

        <div className="laptop:flex laptop:justify-center laptop:flex-row-reverse ">
          <div className="flex flex-col">
            <div className="flex flex-row text-[12px] tablet:text-[15px] font-poppins text-[#F8E71C]   justify-center">
              <div className="flex flex-col  w-[280px] tablet:w-[400px]">
                <div className="mt-5">
                  10 am - 10pm daily starting August 5, 2022
                </div>
                <div className="mt-5">
                  ​3rd Floor, SM Central Business Park, SM Mall of Asia, Pasay
                  City Philippines
                </div>
                <div>gootopia@thenextperience.com</div>
              </div>
            </div>

            <div className="flex flex-row text-[12px] tablet:text-[15px] font-poppins text-[#F8E71C]  mt-5 justify-center">
              <div className="flex flex-col  w-[280px] tablet:w-[400px]">
                <label className="block font-bold ">Fullname:</label>
                <input
                  type="text"
                  // value={fullName}
                  // onChange={handleInputChange}
                  className="border-b-2 border-gray-500 outline-none px-2 py-1 mr-5"
                />
                <label className="block font-bold mb-2 ">Email:</label>

                <input
                  type="text"
                  // value={fullName}
                  // onChange={handleInputChange}
                  className="border-b-2 border-gray-500 outline-none px-2 py-1 mr-5"
                />

                <label className="block font-bold mb-2 ">Phone Number:</label>

                <input
                  type="text"
                  // value={fullName}
                  // onChange={handleInputChange}
                  className="border-b-2 border-gray-500 outline-none px-2 py-1 mr-5"
                />

                <label className="block font-bold mb-2 ">
                  Write your request:
                </label>
                <textarea
                  class="form-control mr-5"
                  id="textAreaExample6"
                  rows="3"
                ></textarea>

                <div className="self-center mt-5">
                  <img
                    class="w-[127px] laptop:w-[200px]"
                    src={sumbit}
                    alt="gootopialanding "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row text-[14px] laptop:text-[20px] font-flavors text-gootopia-green  mt-5 justify-center">
            <div className="flex flex-col gap-2 items-center  w-[280px] tablet:w-[400px]">
              <div className="mx-auto">
                {" "}
                <img
                  class="w-[139px] laptop:w-[200px]"
                  src={connect}
                  alt="gootopialanding "
                />
              </div>
              <div>Facebook</div>

              <div>Instagram</div>
              <div>Tiktok</div>
              <div>Youtube</div>
              <div>Twitter</div>
            </div>
          </div>
        </div>
        <img
          class="w-full rotate-180 laptop4k:mt-[200px]"
          src={dripping}
          alt="gootopialanding "
        />
      </div>
    </GootopiaContainer>
  );
}
