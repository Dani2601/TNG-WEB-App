import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { logo, nx, tnglogo } from "../../assets/Dessert";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import { MdRestoreFromTrash } from "react-icons/md";
import { useEffect } from "react";
import { getBranches } from "../../functions/Branches";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { format, parse, setDate } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getBookingsByTicketID } from "../../functions/Tickets";
import { setCart } from "../../store/action";
import { number } from "yup";
import moment from "moment-timezone";
import { current } from "@reduxjs/toolkit";

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

const business_unit = {
  BakeBe: BAKEBE_KEY,
  Gootopia: GOOTOPIA_KEY,
  TFR: TFR_KEY,
  Dessert: DESSERT_KEY,
  Inflatable: TIS_KEY,
};

const personCount = [1, 2];
const currentTime = moment().tz("Asia/Manila"); // Get the current time in the Philippines timezone

export function TFRBookingDetails({
  setStep,
  ticket,
  location,
  pax,
  setPax,
  bookingDate,
  setBookingDate,
  bookingTime,
  setBookingTime,
  business = "TFR",
  handleOptionChange,
  selectedOption,
  total = 0,
  setLocation,
  setCategories,
}) {
  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.record);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [intervals, setIntervals] = useState([]);
  const [reserve, setReserve] = useState([]);
  const dispatch = useDispatch();
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [slotIdentifier, setSlotIdentifier] = useState(null);
  const [paxCount, setPaxCount] = useState(null);
  const [allowedDays, setAllowedDays] = useState([]);

  function handleBack() {
    setStep(2);
    setCategories("Games");
  }

  function handleNext() {
    const booking = {
      BusinessUnitID: business_unit[business],
      Location: selectedLocation,
      Ticket: ticket,
      BookingDate: bookingDate ? format(bookingDate, "yyyy-MM-dd") : "",
      BookingTime: bookingTime,
      Pax: parseInt(pax),
      Option: selectedOption,
    };
    if (cart.length > 0) {
      let checkItem = cart.find(
        (item) =>
          item.Ticket?.id === booking?.Ticket?.id &&
          item.BookingDate === booking?.BookingDate &&
          item.BookingTime === booking?.BookingTime
      );
      if (checkItem) {
        dispatch(
          setCart(
            cart.map((item) => {
              if (item.Ticket?.id === booking?.Ticket?.id) {
                return {
                  ...item,
                  Pax: item?.Pax + booking?.Pax,
                };
              } else {
                return item;
              }
            })
          )
        );
      } else {
        dispatch(setCart([...cart, booking]));
      }
    } else {
      dispatch(setCart([...cart, booking]));
    }
    setBookingDate("");
    setBookingTime("");
    setPax("");
    setStep(4);
  }

  useEffect(() => {
    if (ticket?.Day.length > 0) {
      setAllowedDays(ticket?.Day);
    }
  }, [ticket]);

  useEffect(() => {
    if (business === "TFR") {
      getBranches(user.id, TFR_KEY)
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(
              locationArray.find((item) => item?.id === location)
            );
          }
        })
        .catch((error) => {
          // Handle error case
        });
    }
  }, [business, user, location]);

  useEffect(() => {
    if (ticket?.id && bookingDate) {
      getBookingsByTicketID(
        location,
        ticket?.id,
        format(bookingDate, "yyyy-MM-dd")
      )
        .then((res) => {
          if (res.valid) {
            setReserve(res.data);
          } else {
            setReserve([]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [ticket, bookingDate, location]);

  function handleBookingDate(date) {
    setBookingDate(date);
    setPax("");
  }

  useEffect(() => {
    if (bookingDate) {
      setIntervals(
        ticket?.CreatedInterval.map((item) => {
          let reservation = reserve?.filter(
            (res) => res.BookingTime === item.timeInterval
          );
          let cartReserve = cart?.filter(
            (cartItem) =>
              cartItem.BookingTime === item.timeInterval &&
              cartItem.Ticket?.id === ticket?.id
          );
          if (reservation.length > 0) {
            const sumOfCart = cartReserve.reduce(
              (total, item) => total + item.Pax,
              0
            );
            return {
              value: item.timeInterval,
              slot:
                parseInt(item.slot) - (sumOfCart + (reservation.length || 0)),
              label: `${item.timeInterval} - ${
                parseInt(item.slot) - (sumOfCart + (reservation.length || 0))
              } slot(s)`,
            };
          } else {
            const sumOfCart = cartReserve.reduce(
              (total, item) => total + item.Pax,
              0
            );

            return {
              value: item.timeInterval,
              slot: parseInt(item.slot) - sumOfCart,
              label: `${item.timeInterval} - ${item.slot - sumOfCart} slot(s)`,
            };
          }
        })
      );
    } else {
      setIntervals([]);
    }
  }, [bookingDate, ticket, reserve]);

  function handleClear() {
    setBookingDate(null);
    setBookingTime(null);
    setPax("");
  }

  function handlePax(e) {
    if (business !== "BakeBe") {
      let input = e.target.value !== "" ? parseInt(e.target.value) : ""; // Parse input as integer if not empty
      if (input === "" || (input > 0 && input <= maxPerInterval)) {
        // Check if input is empty or within the allowed range
        setPax(input);
      }
    } else {
      let intervalData = intervals?.find((item) => item.value === bookingTime);

      if (intervalData.slot <= 1) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }

  function handlePersons(e) {
    let input = parseInt(e.target.value);
    setNumberOfPersons(input);
  }

  useEffect(() => {
    if (business !== "BakeBe") {
      handleOptionChange("");
    }
  }, [pax, business]);

  const maxPerInterval = useMemo(() => {
    let max = "";
    if (bookingDate && bookingTime && intervals) {
      let intervalData = intervals?.find((item) => item.value === bookingTime);
      max = intervalData?.slot;
    }
    return max;
  }, [bookingTime, bookingDate, intervals]);

  function handleBookingTime(e) {
    if (e.target.value) {
      const data = JSON.parse(e.target.value);
      setBookingTime(data?.value ? data?.value : null);
      setPax(1);
      setDisabled(false);
      setSlotIdentifier(data?.slot);
    } else {
      setBookingTime(null);
      setPax(0);
      setDisabled(true);
      setSlotIdentifier(null);
    }
  }

  function handleCart() {
    const booking = {
      BusinessUnitID: business_unit[business],
      Location: selectedLocation,
      Ticket: ticket,
      BookingDate: bookingDate ? format(bookingDate, "yyyy-MM-dd") : "",
      BookingTime: bookingTime,
      Pax: parseInt(pax),
      Option: selectedOption,
    };

    setBookingDate("");
    setBookingTime("");
    setPax("");
    dispatch(setCart([...cart, booking]));
    setStep(2);
    setCategories("Games");
  }

  const handleBothFunctions = (event) => {
    handlePax(event);
    handlePersons(event);
  };

  const getBookingDate = moment(bookingDate, "ddd MMM DD YYYY HH:mm:ss ZZ");
  const formattedBookingDate = getBookingDate.format("MMM DD YYYY");

  function getCurrentDateInPhilippines() {
    // Get the current date in the Philippines
    const currentDateInPhilippines = moment().utcOffset("+0800");

    // Format the current date to the desired format (Aug 09 2023)
    const formattedCurrentDate = currentDateInPhilippines.format("MMM DD YYYY");

    return formattedCurrentDate;
  }

  const currentDateInPhilippines = getCurrentDateInPhilippines();

  const hideDateSelection = useMemo(
    () =>
      (ticket?.Category === "Games" &&
        (ticket?.SubCategory === "DrunkenPinball" ||
          ticket?.SubCategory === "BoomBattleShot" ||
          ticket?.SubCategory === "ExtremeBasketBall" ||
          ticket?.SubCategory === "StarBlase" ||
          ticket?.SubCategory === "RingTheBell")) ||
      (ticket?.Category === "Entrance And Events" &&
        ticket?.SubCategory === "Entrance"),
    [ticket]
  );

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-[80vw] sm:w-[50vw]">
        <div className="text-center flex gap-6 flex-col justify-center items-center">
          <img src={nx} className="w-[60px] object-contain" alt="nx" />
          <img src={tnglogo} className="w-[400px] object-cover" alt="tng" />
        </div>
        <div className="flex flex-col">
          <p className="text-center font-bold text-lg mb-10 mt-5">
            BOOKING DETAILS
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex p-5 gap-3 flex-col w-full sm:w-[40vw] bg-gradient-to-b from-[#E890A1] via-[#E9959F] to-[#EFC391]">
              <p className="font-bold">
                Ticket Booking Details:{" "}
                <small style={{ color: "red" }}>*</small>
              </p>
              <div className="flex items-center">
                <span className="mr-2 text-sm">{ticket?.Name}</span>
                <FiTrash2
                  color="red"
                  className="cursor-pointer"
                  onClick={handleClear}
                />
              </div>
              <div className="w-full">
                <p className="text-sm">
                  PICK A DATE: <small style={{ color: "red" }}>*</small>
                </p>
                <div className="flex w-full bg-blue-500">
                  <DatePicker
                    selected={bookingDate}
                    onChange={handleBookingDate}
                    wrapperClassName="w-full"
                    className="h-[36px] w-full shadow-md py-2 px-4"
                    filterDate={(date) => {
                      const today = new Date(); // Get the current date
                      today.setHours(0, 0, 0, 0); // Set the time to 00:00:00
                      return (
                        date >= today &&
                        allowedDays.includes(
                          date.toLocaleDateString("en-US", { weekday: "long" })
                        )
                      );
                    }}
                    value={bookingDate ? format(bookingDate, "MM/dd/yyyy") : ""}
                  />
                </div>
              </div>
              {!hideDateSelection && (
                <div>
                  <p className="text-sm">
                    PICK A BOOKING HOUR:{" "}
                    <small style={{ color: "red" }}>*</small>
                  </p>
                  <select
                    onChange={handleBookingTime}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
                  >
                    <option value={""}>Select a time</option>
                    {intervals?.length > 0 &&
                      intervals?.map((item, index) => {
                        const itemTime = moment(item.value, "h:mm A").tz(
                          "Asia/Manila"
                        );
                        if (item?.slot === 0) {
                          return (
                            <option
                              key={index}
                              value={JSON.stringify(item)}
                              disabled={true}
                            >
                              {item.label}
                            </option>
                          );
                        } else if (
                          formattedBookingDate === currentDateInPhilippines
                        ) {
                          // Disable the option if itemTime is before the current time
                          return (
                            <option
                              key={index}
                              value={JSON.stringify(item)}
                              disabled={
                                itemTime.isBefore(currentTime) ? true : false
                              }
                            >
                              {item.label}
                            </option>
                          );
                        } else {
                          return (
                            <option key={index} value={JSON.stringify(item)}>
                              {item.label}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              )}

              <div>
                <p className="text-sm">
                  NUMBER OF PASSES:
                  <small style={{ color: "red" }}>*</small>
                </p>

                <input
                  type="number"
                  onChange={handlePax}
                  disabled={bookingTime ? false : true}
                  min={1}
                  max={maxPerInterval}
                  value={pax}
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-[40vw]">
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="py-4 px-6">
                  <div className="border-b-2 border-gray-200">
                    <p className="font-bold text-sm mb-2">
                      Location: {selectedLocation?.Name}
                    </p>
                    <p className="font-bold text-sm mb-3">
                      Type Of Ticket: {ticket?.Type}
                    </p>
                  </div>
                  <div className="pt-4 pb-3 border-b-2 border-gray-200">
                    <p className="font-bold text-sm">{ticket?.Name}</p>
                    <div className="flex justify-between py-2">
                      <div className="flex flex-col">
                        <p className="text-xs">
                          Date:{" "}
                          {bookingDate ? format(bookingDate, "MM/dd/yyyy") : ""}
                        </p>
                        <p className="text-xs">Time: {bookingTime}</p>
                        <p className="text-xs">No. of pass: {pax}</p>
                      </div>
                      <div className="flex items-ebd">
                        <p className="tex-4xl font-bold">₱ {ticket?.Price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 pb-3 border-b-2 border-gray-200">
                    <div className="text-sm font-bold">Total</div>
                    <div className="font-bold">₱ {total}</div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="flex justify-center py-4 px-6">
                  {/* <p className="text-xs">
                    Please note that our TWO HOUR TOUR starts every 15 minutes.
                    Guests are required to come 20 minutes before their
                    scheduled slot for processing of tickets.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-5 py-5 w-60 self-center">
            <button
              onClick={handleBack}
              className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#51CEC5] text-white"
            >
              Back
            </button>
            {bookingDate && bookingTime && pax > 0 ? (
              <button
                onClick={handleNext}
                className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white"
              >
                Next
              </button>
            ) : (
              <button
                disabled
                className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#51CEC5] text-white"
              >
                Next
              </button>
            )}
            {bookingDate && bookingTime && pax > 0 ? (
              <button
                onClick={handleCart}
                className="shadow-md text-sm w-full sm:w-auto  py-2 px-6 bg-[#E992A1] text-white"
              >
                Add More
              </button>
            ) : (
              <button
                disabled
                className="shadow-md text-sm w-full sm:w-auto  py-2 px-6 bg-[#51CEC5] text-white"
              >
                Add More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
