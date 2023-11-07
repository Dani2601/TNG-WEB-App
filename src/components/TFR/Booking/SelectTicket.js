/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";

import { Link, useNavigate } from "react-router-dom";
import { TicketBookingModal } from "../../Modal/Gootopia/TicketBookingModal";
import { getTicketGootopia } from "../../../functions/Tickets";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TFRContainer from "../../Container/TFRContainer";
import booknow from "../../../assets/TFR/button BOOK NOW GAMES.png";
import { ConfirmationCartModal } from "../../Modal/ConfirmationCartModal";
import { setCart } from "../../../store/action";
import { useMemo } from "react";
import TFRMenubarNonSpa from "../../Navbar/TFRMenubarNonSpa";
import routes from "../../../constants/routes";
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
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch();

  function handleBack() {
    if (cart.length > 0) {
      setVisible(true);
      setCategories("Games");
    } else {
      setStep(1);
      setCategories("Games");
    }
  }

  function handleNext() {
    if(user?.id){
      setShowModal(true);
    }
    else{
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
    getTicketGootopia(user?.id || '123', process.env.REACT_APP_BAKEBE_KEY, location)
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

  const handleCategories = useCallback(
    (e) => setCategories(e.target.value),
    [setCategories]
  );

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
      <SignInModal
        showModal={modalVisible}
        handleCloseModal={() => setModalVisible(false)}
        handleProceed={handleProceed}
      />
      <div
        className="max-h-full min-h-screen bg-[#252525] "
        style={{ fontFamily: "Nulshock, sans-serif" }}
      >
        <div className="flex flex-col items-center justify-center">
          <span className=" text-tfr-yellow text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k mt-8">
            SELECT A TICKET
          </span>
          <div className="self-center text-tfr-purple font-poppins mb-10 font-bold text-center mx-5 text-[12px] tablet:text-[16px]">
            Start your adventure by choosing one of our ticket types below
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              {/* {tickets?.filter((item) => item.Category === "Table Bookings")
                  .length > 0 && (
                  <>
                    <div className="text-slate-300 text-[23px] text-center">
                      Entrance And Events
                    </div>
                    <div className="text-slate-400  text-center">
                      Door charge on Thursdays - Saturdays
                    </div>
                  </>
                )} */}
              <div className="text-tfr-yellow text-[23px] text-center">
                Entrance And Events
              </div>
              <div className="text-slate-400  text-center w-1/2">
                {/* Door charge on Thursdays - Saturdays */}
                {/* No entrance fee on sun, tues & wed. door charge from thurs-sat. */}
                closed on mondays. entry fees subject to change without prior
                notice.
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="cursor-pointer flex flex-wrap justify-center items-center pb-5 tablet:pb-10 py-4 gap-4 tablet:mx-[10%]">
                {tickets.length > 0 ? (
                  tickets
                    ?.filter((item) => item.Category === "Entrance And Events")
                    .sort((a, b) => a.Name.localeCompare(b.Name))
                    .map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                          key={item.id}
                          className="flex flex-col items-center border-[2px] border-tfr-yellow h-[300px] w-[200px] rounded-xl hoverEffects"
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
                              <div className="font-bold text-center flex justity-center w-full place-items-center items-center text-tfr-yellow bg-[#4e4e4e] shadow-xl">
                                <p className="mx-auto">PHP{item?.Price}</p>
                              </div>
                              {item?.OldPrice && (
                                <div className="font-bold text-center flex justity-center w-full place-items-center items-center line-through text-tfr-pink bg-[#4e4e4e] shadow-xl">
                                  <p className="mx-auto">PHP{item?.OldPrice}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="h-[30%] w-full flex flex-col gap-2 items-center pt-4 overflow-x-auto">
                            <div className=" text-center  text-tfr-yellow text-[12px] px-2">
                              {item?.Name}
                            </div>
                            <div className=" text-center  text-slate-400 text-[8px] px-2">
                              {item?.Description}
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div>No available Tickets yet.</div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              {/* {tickets?.filter((item) => item.Category === "Table Bookings")
                  .length > 0 && (
                  <>
                    <div className="text-slate-300 text-[23px] text-center">
                      Entrance And Events
                    </div>
                    <div className="text-slate-400  text-center">
                      Door charge on Thursdays - Saturdays
                    </div>
                  </>
                )} */}
              <div className="text-tfr-yellow text-[23px] text-center">
                Games
              </div>
              <div className="text-slate-400  text-center w-1/2">
                {/* Play the most insane drinking games */}
                Play the most insane drinking games. Drinks can be purchased
                separately depending on the game.
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="cursor-pointer flex flex-wrap justify-center items-center pb-5 tablet:pb-10 py-4 gap-4 tablet:mx-[10%]">
                {tickets.length > 0 ? (
                  tickets
                    ?.filter((item) => item.Category === "Games")
                    .sort((a, b) => a.Name.localeCompare(b.Name))
                    .map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                          key={item.id}
                          className="flex flex-col items-center border-[2px] border-tfr-yellow h-[300px] w-[200px] rounded-xl hoverEffects"
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
                              <div className="font-bold text-center flex justity-center w-full place-items-center items-center text-tfr-yellow bg-[#4e4e4e] shadow-xl">
                                <p className="mx-auto">PHP{item?.Price}</p>
                              </div>
                              {item?.OldPrice && (
                                <div className="font-bold text-center flex justity-center w-full place-items-center items-center line-through text-tfr-pink bg-[#4e4e4e] shadow-xl">
                                  <p className="mx-auto">PHP{item?.OldPrice}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="h-[30%] w-full flex flex-col gap-2 items-center pt-4 overflow-x-auto">
                            <div className=" text-center  text-tfr-yellow text-[12px] px-2">
                              {item?.Name}
                            </div>
                            <div className=" text-center  text-slate-400 text-[8px] px-2">
                              {item?.Description}
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div>No available Tickets yet.</div>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center">
              {/* {tickets?.filter((item) => item.Category === "Table Bookings")
                  .length > 0 && (
                  <>
                    <div className="text-slate-300 text-[23px] text-center">
                      Entrance And Events
                    </div>
                    <div className="text-slate-400  text-center">
                      Door charge on Thursdays - Saturdays
                    </div>
                  </>
                )} */}
              <div className="text-tfr-yellow text-[23px] text-center">
                Table Bookings
              </div>
              <div className="text-slate-400  text-center w-1/2">
                {/* Advance reservations recommended */}
                Advance Reservations Recommended. All prices are consumable and
                can be used for food, drinks and games.
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center ">
              <div className="cursor-pointer flex flex-wrap justify-center items-center pb-5 tablet:pb-10 py-4 gap-4 tablet:mx-[10%]">
                {tickets.length > 0 ? (
                  tickets
                    ?.filter((item) => item.Category === "Table Bookings")
                    .sort((a, b) => a.Name.localeCompare(b.Name))
                    .map((item, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleNext();
                            setTicket(item);
                          }}
                          key={item.id}
                          className="flex flex-col items-center border-[2px] border-tfr-yellow h-[300px] w-[200px] rounded-xl hoverEffects"
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
                              <div className="font-bold text-center flex justity-center w-full place-items-center items-center text-tfr-yellow bg-[#4e4e4e] shadow-xl">
                                <p className="mx-auto">PHP{item?.Price}</p>
                              </div>
                              {item?.OldPrice && (
                                <div className="font-bold text-center flex justity-center w-full place-items-center items-center line-through text-tfr-pink bg-[#4e4e4e] shadow-xl">
                                  <p className="mx-auto">PHP{item?.OldPrice}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="h-[30%] w-full flex flex-col gap-2 items-center pt-4 overflow-x-auto">
                            <div className=" text-center  text-tfr-yellow text-[12px] px-2">
                              {item?.Name}
                            </div>
                            <div className=" text-center  text-slate-400 text-[8px] px-2">
                              {item?.Description}
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div>No available Tickets yet.</div>
                )}
              </div>
            </div>

            <div className="flex flex-row justify-center w-full mb-10">
              <button
                onClick={handleBack}
                className="cursor-default text-[12px] py-2 px-10 font-bold tablet:text-[14px] text-tfr-pink bg-[white] font-poppins rounded-3xl text-center mt-10"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </TFRContainer>
  );
}
