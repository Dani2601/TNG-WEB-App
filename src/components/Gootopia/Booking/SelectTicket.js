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

export default function SelectTicket({
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
    navigate(1);
  }

  function handleNext() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setTicket("")
  }

  function handleProceed() {
    setStep(3);
    setShowModal(false);
  }

  useEffect(() => {
    getTicketGootopia(
      user.id,
      process.env.REACT_APP_GOOTOPIA_KEY,
      location
    )
      .then((response) => {
        if (response.valid) {
          setTickets(response.data);
        } else {
        }
      })
      .catch();
  }, [location, user]);

  return (
    <GootopiaContainer>
      <TicketBookingModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        ticket={ticket}
        setStep={setStep}
        handleProceed={handleProceed}
        
      />

      <div className="max-h-full min-h-screen bg-gootopia-purp ">
        <img class="w-full" src={dripping} alt="gootopialanding" />
        <div className="flex flex-row justify-center">
          <span className="font-flavors text-gootopia-pinkText text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT A TICKET
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div>
            <div className="flex flex-col">
              <div className="self-center text-[#F8E71C] font-poppins mb-10 font-bold text-center mx-5 text-[12px] tablet:text-[16px]">
                Start your adventure by choosing one of our ticket types below
              </div>
              {tickets.length > 0 ? (
                tickets?.map((data, index) => {
                  return (
                    <div className="flex flex-col" key={index}>
                      <button className=" self-center" onClick={()=> {handleNext(); setTicket(data)}}>
                        <div className="relative">
                          <img
                            src={bookingCard}
                            alt="Your Image"
                            className="h-[214px] w-[320px] tablet:w-[610px] tablet:h-[446px]"
                          />
                          <div className="absolute top-[40px] left-[53px]  tablet:top-[80px]  tablet:left-[100px] text-left flex justify-center items-center font-poppins">
                            <div className=" w-[132px] h-[112px] tablet:w-[252px] tablet:h-[252px] flex flex-col overflow-y-auto">
                              <div className="text-gootopia-pinkText text-[14px] tablet:text-[18px] font-bold mb-1">
                                {data.Name}
                              </div>
                              <div className="flex flex-row flex-wrap  text-[12px] tablet:text-[14px] mb-2">
                                <div className="text-black  font-bold mr-1  line-through">
                                  ₱{data.OldPrice}
                                </div>
                                <div className="text-black  font-bold mr-1  ">
                                  ₱{data.Price}
                                </div>
                                <div className="text-gootopia-purp font-bold mr-1 mb-1">
                                  {data.Notes} {data.Notes && "%"}
                                </div>
                              </div>
                              <div className="text-black text-[12px] tablet:text-[14px] ">
                                {data.Description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })
              ) : (
                <div>No available Tickets yet.</div>
              )}
              <button
                onClick={handleBack}
                className="cursor-default text-[12px] tablet:text-[14px] text-[#E677AA] bg-[white] font-poppins px-1 py-1 rounded-3xl text-center mt-10"
              >
                {" "}
                Back{" "}
              </button>
              <div className="flex flex-row justify-end"></div>
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
