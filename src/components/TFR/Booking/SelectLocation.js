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
import TFRMenubarNonSpa from "../../Navbar/TFRMenubar";

export default function SelectLocation({
  step,
  setStep,
  setLocation,
  location,
}) {
  const [branch, setBranch] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(false);
  const { user } = useSelector((state) => state.record);
  const navigate = useNavigate();

  function handleBack() {
    navigate(routes.LandingGootopia);
  }

  function handleProceed() {
    setStep(2);
  }

  const handleSelectBranch = (data) => {
    if (selectedBranch !== data.id) {
      setSelectedBranch(data.id);
      setLocation(data.id);
    }
  };

  console.log(selectedBranch);

  useEffect(() => {
    getBranches(user.id, process.env.REACT_APP_TFR_KEY)
      .then((response) => {
        if (response.valid) {
          // const locationArray = Object.values(response.data);
          // setSelectedLocation(locationArray);
          setBranch(response.data);
        } else {
        }
      })
      .catch();
  }, []);

  return (
    <TFRContainer>
      <TFRMenubarNonSpa />
      <div
        className="max-h-full min-h-screen bg-[#252525] "
        style={{ fontFamily: "Nulshock, sans-serif" }}
      >
        <div className="flex flex-row justify-center mt-5">
          <span className=" text-tfr-yellow text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT A LOCATION
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div className="bg-white w-[300px] tablet:w-[400px] rounded-md p-3">
            <div>
              <div className="flex flex-row">
                {branch.map((data, index) => (
                  <div className="flex flex-col mr-3" key={index}>
                    <button
                      className={`outline-4 self-center ${
                        selectedBranch === data.id
                          ? "outline-[15px] text-tfr-pink"
                          : ""
                      }`}
                      onClick={() => handleSelectBranch(data)}
                    >
                      <img
                        className={`rounded-[7px] w-[75px] h-[75px] tablet:w-[120px] tablet:h-[120px] bg-black object-cover ${
                          selectedBranch === data.id
                            ? "outline text-tfr-pink"
                            : ""
                        }`}
                        src={data?.Image}
                        alt="gootopia"
                      />
                    </button>
                    <div className="text-tfr-pink text-[12px] tablet:text-[14px] font-poppins font-bold self-center mt-1">
                      {data?.Address}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-end">
                <div>
                  <button
                    onClick={() => handleBack()}
                    className=" cursor-default text-[12px] tablet:text-[14px] text-tfr-pink bg-[white] font-poppins px-3 py-1 rounded-3xl"
                  >
                    Back
                  </button>
                  {selectedBranch ? (
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
