import React from 'react'
import booknow2 from "../../assets/TFR/button BOOK NOW-W BG.png";

export default function BookNow() {
  return (
    <div className="flex flex-col bg-tfr-pink  items-center justify-center" id="booknow">
    <img
      src={booknow2}
      alt={"Events"}
      className="h-[30px] my-3 tablet:h-[50px] tablet:my-6 laptopL:h-[80px] laptopL::my-8 "
    />
  </div>  )
}
