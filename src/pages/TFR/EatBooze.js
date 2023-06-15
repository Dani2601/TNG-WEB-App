import React from 'react'
import Booze from "../../assets/TFR/BOOZE.png";
import Eats from "../../assets/TFR/EATS.png";

export default function EatBooze() {
  return (
    <div className="flex flex-col tablet:flex-row" id="booze">
    <div className="relative flex justify-center">
      <img src={Eats} alt={"eats"} />
      <button className="absolute bottom-5 bg-black w-[120px] h-[40px]">
        <div className="text-tfr-yellow">EATS </div>
      </button>
    </div>
    <div className="relative flex justify-center">
      <img src={Booze} alt={"eats"} />
      <button className="absolute bottom-5 bg-black w-[120px] h-[40px] ">
        <div className="text-tfr-yellow">BOOZE </div>
      </button>
    </div>
  </div>  )
}
