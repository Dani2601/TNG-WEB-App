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
import BakebeContainer from "../../Container/BakebeContainer";
import BakebeMenubar from "../../Navbar/BakebeMenubar";
import BakebeMenubarNonSpa from "../../Navbar/BakebeMenubarNonSpa";

export default function SelectLocationBakebe({
  step,
  setStep,
  setLocation,
  location,
  navigateToNextStep
}) {
  const [branch, setBranch] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(false);
  const { user } = useSelector((state) => state.record);
  const navigate = useNavigate();

  function handleBack() {
    navigate(routes.LandingBakebe);
  }

  function handleProceed() {
    navigateToNextStep()
  }

  const handleSelectBranch = (data) => {
    if (selectedBranch !== data.id) {
      setSelectedBranch(data.id);
      setLocation(data.id);
    }
  };


  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

    // getBranches(user?.id || '123', process.env.REACT_APP_BAKEBE_KEY)
    getBranches(accessToken, BAKEBE_KEY)
      .then((response) => {
        console.log("branch response", response);
        if (response.success) {
          setBranch(response.businessUnitBranchesArray);
        } else {
          console.error("Failed to fetch branches: Invalid response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching branches:", error);
      });
  }, []);

  return (
    <BakebeContainer>
      <BakebeMenubarNonSpa />
      <div
        className="max-h-full min-h-screen bg-white "
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="flex flex-col mt-5 ml-[4%]">
          <span className=" text-bakebe-orange text-[23px]  tablet:text-[28px] tablet:laptop:LaptopL:Laptop4k mt-8">
            CHOOSE LOCATION
          </span>
          <span style={{ fontFamily: "Gotham-Light, sans-serif" }} className="  text-[14px]  my-3 mb-8 tracking-wide">
            Choose where you want to book your appointment
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div className="bg-slate-200 w-[300px] tablet:w-[400px] rounded-md p-3">
            <div>
              <div className="flex flex-row">
                {branch.map((data, index) => (
                  <div className="flex flex-col mr-3 hoverEffects" key={index}>
                    <button
                      className={`outline-4 self-center ${selectedBranch === data.id
                        ? "outline-[15px] text-bakebe-pink"
                        : ""
                        }`}
                      onClick={() => handleSelectBranch(data)}
                    >
                      <img
                        className={`rounded-[7px] w-[75px] h-[75px] tablet:w-[120px] tablet:h-[120px] bg-black object-cover ${selectedBranch === data.id
                          ? "outline text-bakebe-pink"
                          : ""
                          }`}
                        src={data?.image}
                        alt=""
                      />
                    </button>
                    <div className="text-bakebe-pink text-[12px] tablet:text-[14px] w-[75px] tablet:w-[120px] text-center font-poppins font-bold self-center mt-1">
                      {data?.address}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-end">
                <div>
                  <button
                    onClick={() => handleBack()}
                    className=" cursor-default text-[12px] tablet:text-[14px] text-bakebe-pink bg-[white] font-poppins px-3 py-1 rounded-3xl"
                  >
                    Back
                  </button>
                  {selectedBranch ? (
                    <button
                      onClick={() => handleProceed()}
                      className="ml-3 text-white text-[12px] tablet:text-[14px] bg-bakebe-pink font-poppins px-3 py-1 rounded-3xl"
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
    </BakebeContainer>
  );
}
