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
import { useDispatch, useSelector } from "react-redux";
import { ConfirmationCartModal } from "../../Modal/ConfirmationCartModal";
import { setCart } from "../../../store/action";
import { SignInModal } from "../../Modal/SignInModal";

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

export default function SelectTicket({ setStep, location, setTicket, ticket, navigateToLocation }) {
  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.record);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false)

  function handleBack() {
    if (cart.length > 0) {
      setVisible(true);
    } else {
      navigateToLocation()
    }
  }

  function handleNext() {
    if (user?.id) {
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
    getTicketGootopia(accessToken, process.env.REACT_APP_GOOTOPIA_KEY, location)
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
  }, [location, user]);

  function handleCart() {
    if (cart.length > 0) {
      dispatch(setCart([]));
    }
    navigateToLocation()
  }

  return (
    <GootopiaContainer>
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
              <div className="flex flex-row flex-wrap justify-center cursor-pointer  items-center pb-5 tablet:pb-10 py-4 gap-4 tablet:mx-[10%]">
                {tickets.length > 0 ? (
                  tickets.map((item) => {
                    return (
                      <>
                        <div
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                          key={item.id}
                          className="flex flex-col items-center border-[2px] border-gootopia-green h-[300px] w-[200px] rounded-xl hoverEffects"
                        >
                          <div className="h-[70%] w-full flex flex-col items-center relative">
                            <div className="relative">
                              <img
                                src={item?.Image}
                                className="relative w-[196px]  h-[178px]  object-cover rounded-2xl"
                                alt={item?.Image}
                              />
                            </div>
                            <div className="absolute inset-x-0 bottom-[-7px] flex flex-col items-center justify-center gap-1 px-4">
                              <div className="font-bold text-center flex justity-center w-full place-items-center items-center text-gootopia-yellowText bg-gootopia-darkPurp shadow-xl">
                                <p className="mx-auto">PHP{item?.Price}</p>
                              </div>
                              {
                                item?.OldPrice &&
                                <div className="font-bold text-center flex justity-center w-full place-items-center items-center line-through text-gootopia-pinkText bg-gootopia-darkPurp shadow-xl">
                                  <p className="mx-auto">PHP{item?.OldPrice}</p>
                                </div>
                              }
                            </div>
                          </div>
                          <div className="h-[30%] w-full flex flex-col gap-2 items-center pt-4 overflow-x-auto">
                            <div className=" text-center font-bold tablet:text-[18px] text-tfr-yellow text-[12px] px-2">
                              {item?.Name}
                            </div>
                            <div className=" text-center  text-gootopia-green text-[8px] px-2 tablet:text-[14px]">
                              {item?.Description}
                            </div>
                          </div>
                        </div>
                      </>
                      // <div className="flex flex-row hoverEffects" key={index}>
                      //   <button
                      //     className=" self-center"
                      //     onClick={() => {
                      //       handleNext();
                      //       setTicket(data);
                      //     }}
                      //   >
                      //     <div className="relative">
                      //       <img
                      //         src={bookingCard}
                      //         alt="bookingCard"
                      //         className="h-[214px] w-[320px] tablet:w-[480px] tablet:h-[351px]"
                      //       />
                      //       <div className="absolute top-[40px] left-[53px]  tablet:top-[60px]  tablet:left-[75px] text-left flex justify-center items-center font-poppins">
                      //         <div className=" w-[132px] h-[112px] tablet:w-[180px] tablet:h-[222px] flex flex-col overflow-y-auto">
                      //           <div className="text-gootopia-pinkText text-[14px] tablet:text-[17px] font-bold mb-1">
                      //             {data.Name}
                      //           </div>
                      //           <div className="flex flex-row flex-wrap  text-[12px] tablet:text-[14px] mb-2">
                      //             <div className="text-black  font-bold mr-1  line-through">
                      //               ₱{data.OldPrice}
                      //             </div>
                      //             <div className="text-black  font-bold mr-1  ">
                      //               ₱{data.Price}
                      //             </div>
                      //             <div className="text-gootopia-purp font-bold mr-1 mb-1">
                      //               {data.Notes} {data.Notes && "%"}
                      //             </div>
                      //           </div>
                      //           <div className="text-black text-[12px] tablet:text-[17px] ">
                      //             {data.Description}
                      //           </div>
                      //         </div>
                      //       </div>
                      //     </div>
                      //   </button>
                      // </div>
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
