import React, { useCallback, useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";

import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import bookingCard from "../../../assets/Gootopia/Booking/BookingCard.png";
import routes from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { TicketBookingModal } from "../../Modal/Gootopia/TicketBookingModal";
import { getTicketGootopia } from "../../../functions/Tickets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TFRContainer from "../../Container/TFRContainer";
import TFRMenubarNonSpa from "../../Navbar/TFRMenubar";
import booknow from "../../../assets/TFR/button BOOK NOW GAMES.png";
import { ConfirmationCartModal } from "../../Modal/ConfirmationCartModal";
import { setCart } from "../../../store/action";
import { useMemo } from "react";

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
  categories,
  setCategories,
}) {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.record);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function handleBack() {
    if (cart.length > 0) {
      setVisible(true);
      setCategories("Games")
    } else {
      setStep(1);
      setCategories("Games")

    }
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

  function handleCart() {
    if (cart.length > 0) {
      dispatch(setCart([]));
    }
    setStep(1);
  }

  const handleCategories = useCallback((e) => setCategories(e.target.value), [setCategories]);

 
  return (
    <TFRContainer>
      <TFRMenubarNonSpa />
      <ConfirmationCartModal
        showModal={visible}
        handleCloseModal={() => setVisible(false)}
        handleProceed={handleCart}
      />
      <TicketBookingModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        ticket={ticket}
        setStep={setStep}
        handleProceed={handleProceed}
      />

      <div
        className="max-h-full min-h-screen bg-[#252525] "
        style={{ fontFamily: "Nulshock, sans-serif" }}
      >
        {" "}
        <div className="flex flex-row justify-center">
          <span className=" text-tfr-yellow text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT A TICKET
          </span>
        </div>
        <div className="flex flex-row justify-center">
          <div>
            <div className="flex flex-col">
              <div className="self-center text-tfr-purple font-poppins mb-10 font-bold text-center mx-5 text-[12px] tablet:text-[16px]">
                Start your adventure by choosing one of our ticket types below
              </div>
              <select onChange={e => handleCategories(e)} className="self-center text-tfr-purple font-poppins mb-10 font-bold text-center mx-5 text-[12px] tablet:text-[16px] px-2 py-4 rounded-2xl">
                <option value="Games"> Games </option>
                <option value="Entrance And Events"> Entrance and Events </option>
                <option value="Table Bookings"> Table Bookings </option>
              </select>
              <div className="flex flex-row flex-wrap justify-center">
                {/* {tickets.length > 0 ? ( */}
                <div className="cursor-pointer flex flex-wrap justify-center items-center laptop:mx-[20%] pb-5 tablet:pb-10 ">
                  {tickets
                    .filter((item) => item.Category === categories)
                    .map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="relative mx-4 my-4 hoverEffects"
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                        >
                          <img
                            src={item.Image}
                            className="relative w-[150px] tablet:w-[260px] h-[141px] tablet:h-[245px] object-cover"
                            alt={"Ticket_Image"}
                          />
                          <div className="absolute inset-x-0 bottom-2 tablet:bottom-6 flex items-center justify-center">
                            <div className="self-center tablet:pt-1 text-center font-poppins font-bold bg-[#3b3b3b] text-tfr-yellow h-[20px] w-[80px] tablet:h-[30px] z-10 tablet:rounded-[10px] rounded-[5px] shadow-xl">
                              ₱ {item.Price}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                  {/* {tickets.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="relative mx-4 my-4 hoverEffects"
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                        >
                          <img
                            src={item.Image}
                            className="relative w-[150px] tablet:w-[260px] h-[141px] tablet:h-[245px] object-cover"
                            alt={"Ticket_Image"}
                          />
                          <div className="absolute inset-x-0 bottom-2 tablet:bottom-6 flex items-center justify-center">
                            <div className="self-center tablet:pt-1 text-center font-poppins font-bold bg-[#3b3b3b] text-tfr-yellow h-[20px] w-[80px] tablet:h-[30px] z-10 tablet:rounded-[10px] rounded-[5px] shadow-xl">
                              ₱ {item.Price}
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
                </div>
                {tickets.filter((item) => item.Category === categories)
                  .length === 0 && <div>No available Tickets yet.</div>}
              </div>

              <div className="flex flex-row justify-center w-full">
                <button
                  onClick={handleBack}
                  className="cursor-default text-[12px] py-2 px-10 font-bold tablet:text-[14px] text-tfr-pink bg-[white] font-poppins rounded-3xl text-center mt-10"
                >
                  {" "}
                  Back{" "}
                </button>
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
    </TFRContainer>
  );
}
