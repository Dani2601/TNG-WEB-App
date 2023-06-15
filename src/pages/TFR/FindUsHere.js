import React from 'react'
import events from "../../assets/TFR/EVENTS BANNER.png";
import findushere from "../../assets/TFR/FindUSHERE.png";
export default function FindUsHere() {
  return (
    <div className="flex flex-col relative" id="find">
    <img src={findushere} alt={"Events"} className="w-screen" />
    {/* <img
    src={buttonfindushere}
    alt={"Events"}
    className="absolute top-[85px] right-[230px] h-[10px] mobileM:top-[98px] mobileM:right-[280px]
mobileL:top-[109px] mobileL:right-[325px]
tablet:top-[195px] tablet:right-[575px] tablet:h-[20px]
laptop:top-[265px] laptop:right-[747px] laptop:h-[30px]
laptopL:top-[370px] laptopL:right-[1065px] laptopL:h-[40px]
laptop4k:top-[660px] laptop4k:right-[1948px] laptop4k:h-[60px]"
  /> */}

    <img
      src={events}
      alt={"Events"}
      className="w-screen -my-2 tablet:-my-4 laptop:-my-9  laptop4k:-my-10"
    />
  </div>  )
}
