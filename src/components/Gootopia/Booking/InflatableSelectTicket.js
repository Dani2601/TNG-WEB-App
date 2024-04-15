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
import { SignInModal } from "../../Modal/SignInModal";

// let ticket = [
//   {
//     id: 1,
//     TicketName: "Entrance",
//     OldPrice: "PHP 799.00",
//     NewPrice: "699.00",
//     Discount: "13% OFF",
//     Description: "Your ticket to the Weird and Wonderful World of Gootopia!",
//   },
//   {
//     id: 3,
//     TicketName: "JANUARY BABIES ARE FREE!",
//     OldPrice: "PHP 799.00",
//     NewPrice: "699.00",
//     Discount: "13% OFF",
//     Description:
//       "Just bring 1 paying friend! Valid within JANUARY 2023 ONLY. Celebrants must present their valid ID with date of Birth to avail the promo.",
//   },
// ];

export default function InflatableSelectTicket({
  setStep,
  location,
  setTicket,
  ticket,
  navigateToLocation
}) {
  const [showModal, setShowModal] = useState(false);
  // const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.record);
  const [ticketInfo, setTickets] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch();

  function handleBack() {
    if (cart.length > 0) {
      setVisible(true);
    } else {
      navigateToLocation()
    }
  }

  const accessToken = localStorage.getItem('accessToken')
  function handleNext() {
    console.log(accessToken)
    if (accessToken) {
      setShowModal(true);
    }
    else {
      setModalVisible(true)
    }
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
    const accessToken = localStorage.getItem('accessToken');
    getTicketGootopia(accessToken, process.env.REACT_APP_INFLATABLE_KEY, location)
      .then((response) => {
        if (response.success) {
          setTickets(response.ticketInfo);
        } else {
          console.error('Failed to fetch tickets:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, [location]);

  function handleCart() {
    if (cart.length > 0) {
      dispatch(setCart([]));
    }
    navigateToLocation()
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
      <SignInModal
        showModal={modalVisible}
        handleCloseModal={() => setModalVisible(false)}
        handleProceed={handleProceed}
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
              <div className="flex flex-row flex-wrap justify-center cursor-pointer  items-center pb-5 py-4 gap-4 ">
                {ticketInfo.length > 0 ? (
                  ticketInfo.map((item) => {
                    return (
                      <div
                        className="flex flex-row hoverEffects w-[300px] tablet:w-full justify-center"
                        key={item.id}
                      >
                        <button
                          className=" self-center"
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                        >
                          <div className="relative h-[224px] w-[320px] tablet:w-[410px] tablet:h-[250px] rounded-lg bg-[#EBACB3]">
                            <div className="absolute top-[20px] inset-x-0   text-left flex justify-center items-center font-poppins overflow-y-auto">
                              <div className=" w-[280px] h-[204px] tablet:w-[360px] flex flex-col ">
                                <div className="flex flex-row justify-center mb-3 shadow-sm border-[1px] border-[#FF98C3] object-cover">
                                  <img
                                    src={item.image}
                                    alt="bookingCard"
                                    className="h-[100px] w-full object-cover tablet:h-[150px]"
                                  />
                                </div>
                                <div className="text-black text-lg tablet:text-[15px] font-bold mb-1">
                                  {item.ticketName}
                                </div>
                                <div className="flex flex-row flex-wrap  text-[12px] tablet:text-[12px] mb-2">
                                  <div className="text-black  font-bold mr-1  line-through">
                                    ₱{item.oldPrice}
                                  </div>
                                  <div className="text-white font-bold mr-1  ">
                                    ₱{item.price}
                                  </div>
                                  <div className="text-red-500 font-bold mr-1 mb-1">
                                    {item.notes} {item.notes && "%"}
                                  </div>
                                </div>
                                <div className="text-black text-[12px] tablet:text-[12px] ">
                                  {item.description}
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
                  className="cursor-default text-[12px] py-2 pb-10 px-10 font-bold tablet:text-[14px] text-[#E677AA] bg-[white] font-poppins rounded-3xl text-center mt-10"
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
