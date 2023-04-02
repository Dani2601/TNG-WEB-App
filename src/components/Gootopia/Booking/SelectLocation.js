import React, { useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import moa from "../../../assets/Gootopia/Booking/SmMoa.png";
import routes from "../../../constants/routes";
import { Link } from "react-router-dom";

let location = [
  {
    Moa: "SM MOA",
  },
  {
    Moa: "SM MOA",
  },
];

export default function SelectLocation() {
  // const [location, setLocation] = useState(location)
  const [selectedLocation, setSelectedLocation] = useState(false)

  const handleSelectLocation = () => {
    setSelectedLocation(!selectedLocation)
  }

  console.log(selectedLocation)

  return (
    <GootopiaContainer>
      <div className="max-h-full min-h-screen bg-gootopia-purp ">
        <img class="w-full" src={dripping} alt="gootopialanding" />
        <div className="flex flex-row justify-center">
          <span className="font-flavors text-gootopia-pinkText text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT A LOCATION
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div className="bg-white w-[300px] rounded-md p-3">
            <div>
              <div className="flex flex-row">
                {location.map((data, index) => {
                  return (
                    <button className="mr-2 outline-4 " onClick={()=> handleSelectLocation()} key={index}>
                      <img
                        className={`rounded-[7px] w-[75px] h-[75px] ${selectedLocation === true ? "border-[3px] border-[#E677AA]" : ""} `}
                        src={moa}
                        alt="gootopialanding "
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-row justify-end">
                <div>
                  <button className="text-white bg-[#E677AA] font-poppins px-3 py-1 rounded-3xl">
                    <Link to={routes.Home}>
                    Next
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-80">
          <img
            class="w-full rotate-180 "
            src={dripping}
            alt="gootopialanding "
          />
        </div>
      </div>
    </GootopiaContainer>
  );
}
