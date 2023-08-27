import React, { useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";

import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import GootopiaContainer from "../../Container/GootopiaContainter";
import bookingCard from "../../../assets/InflatableIsland/img/ticketbg.png";
import routes from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { TicketBookingModal } from "../../Modal/Gootopia/TicketBookingModal";
import { getTicketGootopia } from "../../../functions/Tickets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TISContainer from "../../Container/TISContainer";
import { setCart } from "../../../store/action";
import { ConfirmationCartModal } from "../../Modal/ConfirmationCartModal";

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

export default function InflatableSelectTicket({
  setStep,
  location,
  setTicket,
  ticket,
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
    } else {
      setStep(1);
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
    getTicketGootopia(user.id, process.env.REACT_APP_INFLATABLE_KEY, location)
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

  return (
    <TISContainer>
      <TicketBookingModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        ticket={ticket}
        setStep={setStep}
        handleProceed={handleProceed}
      />
      <ConfirmationCartModal
        showModal={visible}
        handleCloseModal={() => setVisible(false)}
        handleProceed={handleCart}
      />
      <div className="max-h-full min-h-[600px]">
        <div className="flex flex-row justify-center">
          <span className="font-inflatable font-bold text-[#20422b] text-xl  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            SELECT A TICKET
          </span>
        </div>

        <div className="flex flex-row justify-center">
          <div>
            <div className="flex flex-col">
              <div className="self-center text-[#EBACB3] font-poppins mb-10 font-bold text-center mx-5 text-[12px] tablet:text-[16px]">
                Start your adventure by choosing one of our ticket types below
              </div>
              <div className="flex flex-row flex-wrap justify-center">
                {tickets.length > 0 ? (
                  tickets?.map((data, index) => {
                    return (
                      <div className="flex flex-row hoverEffects" key={index}>
                        <button
                          className=" self-center"
                          onClick={() => {
                            handleNext();
                            setTicket(data);
                          }}
                        >
                          <div className="relative">
                            <img
                              src={bookingCard}
                              alt="bookingCard"
                              className="h-[224px] w-[320px] tablet:w-[410px] tablet:h-[250px] rounded-lg"
                            />
                            <div className="absolute top-[20px] left-[20px]  text-left flex justify-center items-center font-poppins">
                              <div className=" w-[280px] h-[204px] tablet:w-[360px] flex flex-col ">
                                <div className="text-black text-lg tablet:text-[15px] font-bold mb-1">
                                  {data.Name}
                                </div>
                                <div className="flex flex-row flex-wrap  text-[12px] tablet:text-[12px] mb-2">
                                  <div className="text-black  font-bold mr-1  line-through">
                                    ₱{data.OldPrice}
                                  </div>
                                  <div className="text-white font-bold mr-1  ">
                                    ₱{data.Price}
                                  </div>
                                  <div className="text-red-500 font-bold mr-1 mb-1">
                                    {data.Notes} {data.Notes && "%"}
                                  </div>
                                </div>
                                <div className="text-black text-[12px] tablet:text-[12px] overflow-y-auto">
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
              </div>

              <div className="flex flex-row justify-center w-full">
                <button
                  onClick={handleBack}
                  className="cursor-default text-[12px] py-2 px-10 font-bold tablet:text-[14px] text-[#E677AA] bg-[white] font-poppins rounded-3xl text-center mt-10"
                >
                  {" "}
                  Back{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TISContainer>
  );
}
