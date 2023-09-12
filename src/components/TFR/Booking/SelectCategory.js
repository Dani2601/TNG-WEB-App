import React, { useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import moa from "../../../assets/Gootopia/Booking/SmMoa.png";
import routes from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { getBranches } from "../../../functions/Branches";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import TFRContainer from "../../Container/TFRContainer";
import TFRMenubar from "../../Navbar/TFRMenubar";
import TFRMenubarNonSpa from "../../Navbar/TFRMenubarNonSpa";
import banner2 from "../../../assets/TFR/Home.png";

let CategoriesData = [
  {
    id: "1",
    title: "Entrance And Events",
    description: "Entry to The Fun Roof",
  },
  {
    id: "2",
    title: "Games",
    description: "Entrance Ticket Required if applicable (Thurs-Saturday)",
  },
  {
    id: "3",
    title: "Table Bookings",
    description: "Advance booking is recommended",
  },
];

export default function SelectCategory({
  step,
  setStep,
  setCategories,
  categories,
}) {
  // const [branch, setBranch] = useState([]);
  // const { user } = useSelector((state) => state.record);

  const [selectedCategories, setSelectedCategories] = useState(false);
  const navigate = useNavigate();

  function handleBack() {
    setStep(2);
  }

  function handleProceed() {
    setStep(3);
  }

  const handleSelectTicket = (data) => {
    if (selectedCategories !== data.id) {
      setSelectedCategories(data.id);
      setCategories(data.title);
    }
  };


  return (
    <TFRContainer>
      <TFRMenubarNonSpa />
      <div
        className="max-h-full min-h-screen bg-[#252525] "
        style={{ fontFamily: "Nulshock, sans-serif" }}
      >
        <div className="flex flex-row justify-center mt-5">
          <span className=" text-tfr-yellow text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT CATEGORY
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div className="bg-white w-[300px] tablet:w-[400px] rounded-md p-3">
            <div>
              <div className="flex flex-col gap-3">
                {CategoriesData.map((data, index) => (
                  <div className="flex flex-col mr-3 hoverEffects" key={index}>
                    <button
                      className={`outline-2 self-center rounded-[7px] w-[150px] h-[85px] tablet:w-[175px] tablet:h-[130px] bg-black object-cover ${
                        selectedCategories === data.id
                          ? "outline text-tfr-pink"
                          : ""
                      } ${
                        selectedCategories === data.id
                          ? "outline-[15px] text-tfr-pink"
                          : ""
                      }`}
                      onClick={() => handleSelectTicket(data)}
                    >
                      {/* <img
                        className={`rounded-[7px] w-[75px] h-[75px] tablet:w-[120px] tablet:h-[120px] bg-black object-cover ${
                          selectedCategories === data.id
                            ? "outline text-tfr-pink"
                            : ""
                        }`}
                        src={banner2}
                        alt="gootopia"
                      /> */}
                      <div className="flex flex-col w-full h-full items-center py-1 px-1">
                        <div className="text-tfr-pink my-auto text-[12px] tablet:text-[14px] font-poppins font-bold self-center h-[40%]">
                          {data?.title}
                        </div>
                        <div className="text-slate-400 my-auto text-[10px] tablet:text-[12px] font-poppins font-bold self-center h-[60%]">
                          {data?.description}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-end mt-2">
                <div>
                  <button
                    onClick={() => handleBack()}
                    className=" cursor-default text-[12px] tablet:text-[14px] text-tfr-pink bg-[white] font-poppins px-3 py-1 rounded-3xl"
                  >
                    Back
                  </button>
                  {selectedCategories ? (
                    <button
                      onClick={() => handleProceed()}
                      className="ml-3 text-white text-[12px] tablet:text-[14px] bg-tfr-pink font-poppins px-3 py-1 rounded-3xl"
                    >
                      Next
                    </button>
                  ) : (
                    <button className="ml-3 text-white cursor-default text-[12px] tablet:text-[14px] bg-[#777777] font-poppins px-3 py-1 rounded-3xl">
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TFRContainer>
  );
}
