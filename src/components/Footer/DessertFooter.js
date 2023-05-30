import React from "react";
import {
  desertlogo,
  email,
  fb,
  insta,
  marker,
  phone,
  twitter,
} from "../../assets/Dessert";

export function DessertFooter() {
  return (
    <div className="flex flex-col md:flex-row py-5 items-center">
      <div className="hidden xs:block sm:hidden md:block w-full sm:w-1/4 md:w-1/3 px-10 lg:px-14">
        <img alt="" className="w-86 object-contain" src={desertlogo} />
        <div className="text-justify text-sm">
          The Dessert Museum is an interactive eat as you play and learn
          experience where the sights are just as delicious as the sweets. You
          will gobble your way through 8 mouthwatering rooms of sugar-filled
          happiness. There are only two things on the menu - sugar and selfies.
          Welcome to the Dessert Museum. Please don't eat the furniture.
        </div>
      </div>
      <div className="w-full md:w-1/3 lg:w-1/2 px-10 md:px-0">
        <div className="text-[#FF98C3] text-2xl">Contact Us!</div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-5">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-[#F2F5BE] p-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-[#F2F5BE] p-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-2 border-[#F2F5BE] p-2"
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Message"
              className="border-2 border-[#F2F5BE] p-2 w-full h-[145px]"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="px-4 py-1 border-2 border-[#FF98C3] text-[#FF98C3]">
            Submit
          </button>
        </div>
      </div>
      <div className="flex w-full sm:w-full md:w-1/3">
        <div className="w-full hidden sm:block md:hidden md:w-full px-10 lg:px-14">
          <img alt="" className="w-86 object-contain" src={desertlogo} />
          <div className="text-justify text-sm">
            The Dessert Museum is an interactive eat as you play and learn
            experience where the sights are just as delicious as the sweets. You
            will gobble your way through 8 mouthwatering rooms of sugar-filled
            happiness. There are only two things on the menu - sugar and
            selfies. Welcome to the Dessert Museum. Please don't eat the
            furniture.
          </div>
        </div>
        <div className="flex flex-col justify-center w-full px-10 lg:px-4 gap-3">
          <div className="flex items-center">
            <img src={phone} alt="" className="object-contain h-7 w-7 mr-10" />
            <span className="text-sm">(+63) 966 210 6010</span>
          </div>
          <div className="flex items-center">
            <img src={email} alt="" className="object-contain h-7 w-7 mr-10" />
            <span className="text-sm">hello@thedessertmuseum.com</span>
          </div>
          <div className="flex items-center">
            <img src={marker} alt="" className="object-contain h-7 w-7 mr-10" />
            <span className="text-sm">
              Unit 124, 126, 127a, Coral Way,
              <br />S Maison Mall, Conrad Hotel
              <br />
              Manila, Mall of Asia Complex,
              <br />
              Pasay City
            </span>
          </div>
          <div className="flex gap-4">
            <a href={"https://www.facebook.com/thedessertmuseum/"} target="">
              <img src={fb} alt="facebook" />
            </a>
            <a href={"https://www.instagram.com/dessertmuseum/"} target="">
              <img src={insta} alt="insta" />
            </a>
            <a href={"https://twitter.com/dessertmuseumPH"} target="">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
