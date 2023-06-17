import React, { useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";

import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import bookingCard from "../../../assets/Gootopia/Booking/BookingCard.png";
import routes from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { TicketBookingModal } from "../../Modal/Gootopia/TicketBookingModal";
import { getTicketGootopia } from "../../../functions/Tickets";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TFRContainer from "../../Container/TFRContainer";
import TFRMenubarNonSpa from "../../Navbar/TFRMenubar";
import booknow from "../../../assets/TFR/button BOOK NOW GAMES.png";
import BakebeContainer from "../../Container/BakebeContainer";
import BakebeMenubar from "../../Navbar/BakebeMenubar";
import express from "../../../assets/Bakebe/express.png";
import regular from "../../../assets/Bakebe/regular.png";
import clock from "../../../assets/Bakebe/clock.png";

let type = [
  {
    id: 1,
    Name: "Regular",
    Duration: "1 Hour - 3 Hours",
    Description: "Enjoy the baking experience from scratch.",
    src: regular,
  },
  {
    id: 2,
    Name: "Express",
    Duration: "1 Hour - 1 Hour and 30 minutes",
    Description:
      "Our Bakebe Express gives you the best baking experience for your precious time! If you're in a hurry, you can skip a couple of steps but still experience the fun on making your own cake or pastry from (almost) scratch! Our usual 2-3 hour baking time gets cut in half!",
    src: express,
  },
];

export default function SelectTypeOfBooking({
  setStep,
  location,
  setTicket,
  ticket,
}) {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState([]);

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.record);

  function handleBack() {
    setStep(1);
  }

  function handleNext() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setTicket("");
  }

  function handleProceed() {
    setStep(3);
    setShowModal(false);
  }

  useEffect(() => {
    getTicketGootopia(user.id, process.env.REACT_APP_BAKEBE_KEY, location)
      .then((response) => {
        if (response.valid) {
          setTickets(response.data);
        } else {
        }
      })
      .catch();
  }, [location, user]);

  return (
    <BakebeContainer>
      <BakebeMenubar />

      <TicketBookingModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        ticket={ticket}
        setStep={setStep}
        handleProceed={handleProceed}
      />

      <div
        className="max-h-full min-h-screen bg-white "
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="flex flex-col mt-5 ml-[4%]">
          <span className=" text-bakebe-orange text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k mt-8">
            TYPE OF BOOKING
          </span>
          <span
            style={{ fontFamily: "Gotham-Light, sans-serif" }}
            className="  text-[14px]  my-3 mb-8 tracking-wide"
          >
            What type of booking do you prefer?
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div className=" ">
            <div>
              <div className="flex flex-col laptopL:flex-row w-full">
                {type.map((item) => {
                  return (
                    <>
                      <div className=" bg-white border-[1px] border-pink-200 rounded-[20px] mx-[5%] laptopL:w-[430px] drop-shadow-xl mb-5 py-3 h-[auto]">
                        <div className=" flex flex-row justify-center tablet:items-center tablet:h-[270px] ">
                          <div className="w-[40%]">
                            <img src={item.src} className="w-[65px] tablet:w-[160px]  mt-5 mx-auto " />
                          </div>
                          <div className="w-[60%] h-[250px] flex flex-col my-[5%] gap-y-4">
                            <div className="text-bakebe-pink text-[20px]">
                              {item.Name}
                            </div>
                            <div
                              className="overflow-y-auto text-bakebe-pink text-[13px] tracking-wider mr-[40px]"
                              style={{ fontFamily: "Gotham-Light, sans-serif" }}
                            >
                              {item.Description}
                            </div>
                            <div className="text-bakebe-brown flex-row flex gap-3 flex-wrap text-[11px]  items-center mr-[40px]">
                              <img src={clock} />
                              <div className="">{item.Duration}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div className="flex flex-row justify-end">
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
          </div> */}
        </div>
      </div>
    </BakebeContainer>
  );
}
