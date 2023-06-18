import React, { useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";

import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import bookingCard from "../../../assets/Gootopia/Booking/BookingCard.png";
import routes from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { getTicketGootopia } from "../../../functions/Tickets";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TFRContainer from "../../Container/TFRContainer";
import TFRMenubarNonSpa from "../../Navbar/TFRMenubar";
import booknow from "../../../assets/TFR/button BOOK NOW GAMES.png";
import BakebeContainer from "../../Container/BakebeContainer";
import clock from "../../../assets/Bakebe/clock.png";
import timer from "../../../assets/Bakebe/timer.png";
import { convertToHoursMinutes } from "../../../helper/DateTime";
import { TicketBookingModal } from "../../Modal/Bakebe/TicketBookingModal";

let ticket = [
  {
    id: 1,
    TicketName: "Entrance",
    OldPrice: "PHP 799.00",
    NewPrice: "699.00",
    Discount: "13% OFF",
    Description: "Your ticket to the Weird and Wonderful World of Gootopia!",
  },
  {
    id: 3,
    TicketName: "JANUARY BABIES ARE FREE!",
    OldPrice: "PHP 799.00",
    NewPrice: "699.00",
    Discount: "13% OFF",
    Description:
      "Just bring 1 paying friend! Valid within JANUARY 2023 ONLY. Celebrants must present their valid ID with date of Birth to avail the promo.",
  },
];

export default function SelectTicketBakebe({
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
    setStep(2);
  }

  function handleNext() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setTicket("");
  }

  function handleProceed() {
    setStep(4);
    setShowModal(false);
  }

  useEffect(() => {
    getTicketGootopia(user.id, process.env.REACT_APP_TFR_KEY, location)
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
      <TicketBookingModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        ticket={ticket}
        setStep={setStep}
        handleProceed={handleProceed}
      />

      <div
        className="h-auto w-full"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        {" "}
        <div className="h-auto flex flex-col mt-5 ml-[4%]">
          <span className=" text-bakebe-orange text-[23px]  tablet:text-[28px] tablet:laptop:LaptopL:Laptop4k mt-8">
            ALL PRODUCTS
          </span>
          <span
            style={{ fontFamily: "Gotham-Light, sans-serif" }}
            className="  text-[14px]  my-3 mb-8 tracking-wide"
          ></span>
        </div>
        <div className=" laptopL:flex laptopL:flex-row py-[10%]">
          <div className="flex flex-row flex-wrap laptopL:w-[75%] justify-center gap-4">
            {tickets.length > 0
              ? tickets.map((item) => {
                  return (
                    <>
                      <div class="border-[0.5px] group container border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px] content-div">
                        <div className="h-[70%] fd-cl group-hover:opacity-0">
                          <img
                            src={item.Image}
                            className="rounded-t-[30px] h-full w-full object-cover"
                          />
                        </div>
                        <div className="h-[30%] flex flex-col mx-[10px] gap-2 my-[10px] fd-cl group-hover:opacity-0">
                          <div className="truncate">{item.Name}</div>
                          <div className="flex flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                            <div className="flex flex-row truncate items-center">
                              <img src={clock} className="mr-1" />{" "}
                              {convertToHoursMinutes(item.Hours)}
                            </div>
                            <div className="flex flex-row items-center">
                              <img src={timer} className="mr-1" />
                              {item.Difficulty.slice(0, 1)}
                            </div>
                          </div>
                        </div>

                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                          <div class="py-4 border-[0.5px] group container border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px] content-div">
                            <div className="h-[10%] px-3 ">
                              <div className="truncate">{item.Name}</div>
                            </div>
                            <div className="h-[20%] flex flex-col mx-[10px] gap-2 my-[10px] ">
                              <div className="flex flex-col laptop:flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                                <div className="flex flex-row truncate items-center">
                                  <img src={clock} className="mr-1" />{" "}
                                  {convertToHoursMinutes(item.Hours)}
                                </div>
                                <div className="flex flex-row items-center">
                                  <img src={timer} className="mr-1" />
                                  {item.Difficulty.slice(0, 1)}
                                </div>
                              </div>
                            </div>
                            <div className="h-[40%] px-3 overflow-y-auto text-[13px] tracking-wide">
                              <div
                                className=""
                                style={{
                                  fontFamily: "Gotham-Light, sans-serif",
                                }}
                              >
                                {item.Description}
                              </div>
                            </div>
                            <div className="h-[20%] px-3 self-center -mt-[3%] laptop:-mt-[7%]">
                              <button
                                onClick={() => {
                                  handleNext();
                                  setTicket(item);
                                }}
                                className="rounded-full px-[24px] py-[10px] bg-bakebe-pink text-white mt-8 laptop4K:[30px]"
                              >
                                BOOK
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 
                  <div className="border-[0.5px] border-[#eeeeee] flex flex-col shadow-xl rounded-[30px] h-[322px]  w-[133px] mobileM:w-[167px] mobileL:w-[189px] tablet:w-[220px]  laptop:w-[290px] laptop4k:w-[350px] laptop:h-[270px]">
                    <div className="h-[70%]">
                      <img
                        src={item.Image}
                        className="rounded-t-[30px] h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-[30%] flex flex-col mx-[10px] gap-2 my-[10px]">
                      <div className="truncate">{item.Name}</div>
                      <div className="flex flex-row flex-wrap justify-between gap-2 text-bakebe-brown text-[12px] laptop:mx-[2%]">
                        <div className="flex flex-row truncate items-center">
                          <img src={clock} className="mr-1" />{" "}
                          {convertToHoursMinutes(item.Hours)}
                        </div>
                        <div className="flex flex-row items-center">
                          <img src={timer} className="mr-1" />
                          {item.Difficulty.slice(0, 1)}
                        </div>
                      </div>
                    </div>
                  </div> 
                  */}
                    </>
                  );
                })
              : "No Tickets Yet"}
          </div>
          <div className="hidden laptopL:block laptopL:w-[25%] ">
            Select Location
          </div>
        </div>
      </div>
    </BakebeContainer>
  );
}
