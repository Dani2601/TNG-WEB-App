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
import {
  getBookingsByTicketID,
  getTFRBookingsByTicketID,
} from "../../functions/Tickets";
import { setCart } from "../../store/action";
import { number } from "yup";
import moment from "moment-timezone";
import { current } from "@reduxjs/toolkit";
import { convertToNormalTime } from "../../helper/DateTime";
import { ViewEvents } from "../../functions/Booking";
import routes from "../../constants/routes";

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
  business = "Dessert",
  handleOptionChange,
  selectedOption,
  total = 0,
  setLocation,
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
  const [entranceBooked, setEntranceBooked] = useState(200);
  const [dDTBooked, setDDTBooked] = useState(0);
  const [cBooked, setCBooked] = useState(0);
  const [bTBooked, setBTBooked] = useState(0);
  const [cTBooked, setCTBooked] = useState(0);
  const [description, setDescription] = useState(null);
  const [events, setEvents] = useState([]);
  const [stringifyTime, setStringifyTime] = useState("")
  const [bookingTimeId, setBookingTimeId] = useState(null);

  function handleBack() {
    if (business === "BakeBe") {
      setStep(3);
    } else {
      setStep(2);
    }
    setBookingDate("");
    setBookingTime("");
    setPax("");
  }

  function handleNext() {
    const booking = {
      BusinessUnitID: business_unit[business],
      Location: selectedLocation,
      ticket: ticket,
      BookingDate: bookingDate ? format(bookingDate, "yyyy-MM-dd") : "",
      BookingTime: bookingTime,
      bookingTimeId: bookingTimeId,
      BookingEndTime: withoutFilters ? convertToNormalTime(ticket.endTime) : "",
      Pax: ticket?.Promo === "Buy 1 Take 1" ? parseInt(pax * 2) : parseInt(pax),
      Option: selectedOption,
    };
    if (cart.length > 0) {
      let checkItem = cart.find(
        (item) =>
          item.ticket?.accessToken === booking?.ticket?.accessToken &&
          item.BookingDate === booking?.BookingDate &&
          item.BookingTime === booking?.BookingTime
      );
      if (checkItem) {
        dispatch(
          setCart(
            cart.map((item) => {
              if (item.ticket?.accessToken === booking?.ticket?.accessToken) {
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

    if (business === "BakeBe") {
      setStep(5);
    } else {
      setStep(4);
    }
  }

  useEffect(() => {
    if (ticket?.BusinessUnitID) {
      ViewEvents(ticket?.BusinessUnitID)
        .then((res) => {
          if (res.valid) {
            setEvents(res.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [ticket, bookingDate, location]);

  useEffect(() => {
    if (ticket?.Day?.length > 0) {
      setAllowedDays(ticket?.Day);
    }
  }, [ticket]);

  // useEffect(() => {
  //   if (!user?.id) {
  //     navigate(routes.Login)
  //   }
  // }, [])

  useEffect(() => {
    if (business === "Gootopia") {
      getBranches(user?.id || '123', GOOTOPIA_KEY)
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
    } else if (business === "TFR") {
      getBranches(user?.id || '123', TFR_KEY)
        .then((response) => {
          if (response.success) {
            const businessUnitBranchesArray = response.businessUnitBranchesArray;
            if (businessUnitBranchesArray.length > 0) {
              const businessUnitBranch = businessUnitBranchesArray[0];
              if (businessUnitBranch) {
                setSelectedLocation(businessUnitBranch.branchName);
              } else {
                setSelectedLocation("Not selected");
              }
            } else {
              setSelectedLocation("Not selected");
            }
          }
        })
        .catch((error) => {
          // Handle error case
        });
    } else if (business === "Inflatable") {
      getBranches(user?.id || '123', TIS_KEY)
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
    } else if (business === "BakeBe") {
      getBranches(user?.id || '123', BAKEBE_KEY)
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
    } else {
      getBranches(user?.id || '123', DESSERT_KEY)
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
    if (ticket?.accessToken && bookingDate) {
      if (ticket?.SubCategory === "Drinking Deck Tables") {
        let ecount = 4;
        setDescription("Up to 4 pax");
        getBookingsByTicketID(
          location,
          ticket?.accessToken,
          format(bookingDate, "yyyy-MM-dd")
        )
          .then((res) => {
            if (res?.valid) {
              ecount = ecount - res.data.length;
              setDDTBooked(ecount);
              setReserve(res.data);
            } else {
              setDDTBooked(ecount);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (ticket?.SubCategory === "Cabanas") {
        let ecount = 4;
        setDescription("6-4 pax");
        getBookingsByTicketID(
          location,
          ticket?.accessToken,
          format(bookingDate, "yyyy-MM-dd")
        )
          .then((res) => {
            if (res?.valid) {
              ecount = ecount - res.data.length;
              setCBooked(ecount);
              setReserve(res.data);
            } else {
              setCBooked(ecount);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (ticket?.SubCategory === "Bar Tables") {
        let ecount = 10;
        setDescription("4-6 pax");
        getBookingsByTicketID(
          location,
          ticket?.accessToken,
          format(bookingDate, "yyyy-MM-dd")
        )
          .then((res) => {
            if (res?.valid) {
              ecount = ecount - res.data.length;
              setBTBooked(ecount);
              setReserve(res.data);
            } else {
              setBTBooked(ecount);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (ticket?.SubCategory === "Carousel Table") {
        let ecount = 4;
        setDescription("Up to 4 pax");
        getBookingsByTicketID(
          location,
          ticket?.accessToken,
          format(bookingDate, "yyyy-MM-dd")
        )
          .then((res) => {
            if (res?.valid) {
              ecount = ecount - res.data.length;
              setCTBooked(ecount);
              setReserve(res.data);
            } else {
              setCTBooked(ecount);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        getBookingsByTicketID(
          location,
          ticket?.accessToken,
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
    }
  }, [ticket, bookingDate, location]);

  function handleBookingDate(date) {
    setBookingDate(date);
    intervalsSet(date)
    setBookingTime("")
    setPax("");
    setStringifyTime("");
  }

  const intervalsSet = async (date, data) =>{
    if (date) {
      console.log('interval sett')
      console.log(ticket)
      console.log('interval sett')

      setIntervals(
        ticket?.ticketIntervals.map((item) => {
          return {
            value: item,
            slot:  item.slots,
            label: `${item.time} - ${ item.slots}  slot(s)`,
          };
        })
      );
    } else {
      setIntervals([]);
    }
  }

  // useEffect(() => {
  //   if (bookingDate) {
  //     if (ticket?.SubCategory === "Halloween Event") {
  //       setIntervals(
  //         ticket?.CreatedInterval.map((item) => {
  //           let reservation = reserve?.filter(
  //             (res) => res.BookingTime === item.timeInterval
  //           );
  //           let cartReserve = cart?.filter(
  //             (cartItem) =>
  //               cartItem.BookingTime === item.timeInterval &&
  //               cartItem.ticket?.accessToken === ticket?.accessToken
  //           );
  //           if (reservation.length > 0) {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );
  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(200) - reservation?.length) <= 0 ? 0 : parseInt(200) - (sumOfCart + (reservation.length || 0))),
  //               label: `${item.timeInterval} - ${((parseInt(200) - (sumOfCart + (reservation.length || 0))) >= 0 ? parseInt(200) - (sumOfCart + (reservation.length || 0)) : 0)} slot(s)`,
  //             };
  //           } else {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );

  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(200) - sumOfCart) <= 0 ? 0 : parseInt(200) - sumOfCart),
  //               label: `${item.timeInterval} - ${((200 - sumOfCart) >= 0 ? (200 - sumOfCart) : 0)} slot(s)`,
  //             };
  //           }
  //         })
  //       );
  //     } else if (ticket?.SubCategory === "Drinking Deck Tables") {
  //       setIntervals(
  //         ticket?.CreatedInterval.map((item) => {
  //           let reservation = reserve?.filter(
  //             (res) => res.BookingTime === item.timeInterval
  //           );
  //           let cartReserve = cart?.filter(
  //             (cartItem) =>
  //               cartItem.BookingTime === item.timeInterval &&
  //               cartItem.ticket?.accessToken === ticket?.accessToken
  //           );
  //           if (reservation.length > 0) {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );
  //             return {
  //               value: item.timeInterval,
  //               slot: (parseInt(item?.slot) - (sumOfCart + (reservation.length || 0)) <= 0 ? 0 : parseInt(item?.slot) - (sumOfCart + (reservation.length || 0))),
  //               label: `${item.timeInterval} - ${((parseInt(item?.slot) - (sumOfCart + (reservation.length || 0))) >= 0 ? parseInt(item?.slot) - (sumOfCart + (reservation.length || 0)) : 0)} slot(s)`,
  //             };
  //           } else {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );

  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(item?.slot) - sumOfCart) <= 0 ? 0 : parseInt(item?.slot) - sumOfCart),
  //               label: `${item.timeInterval} - ${((item?.slot - sumOfCart) >= 0 ? (item?.slot - sumOfCart) : 0)} slot(s)`,
  //             };
  //           }
  //         })
  //       );
  //     } else if (ticket?.SubCategory === "Cabanas") {
  //       setIntervals(
  //         ticket?.CreatedInterval.map((item) => {
  //           let reservation = reserve?.filter(
  //             (res) => res.BookingTime === item.timeInterval
  //           );
  //           let cartReserve = cart?.filter(
  //             (cartItem) =>
  //               cartItem.BookingTime === item.timeInterval &&
  //               cartItem.ticket?.accessToken === ticket?.accessToken
  //           );
  //           if (reservation.length > 0) {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );
  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(item?.slot) - (sumOfCart + (reservation.length || 0))) <= 0 ? 0 : parseInt(item?.slot) - (sumOfCart + (reservation.length || 0))),
  //               label: `${item.timeInterval} - ${((parseInt(item?.slot) - (sumOfCart + (reservation.length || 0))) >= 0 ? parseInt(item?.slot) - (sumOfCart + (reservation.length || 0)) : 0)} slot(s)`,
  //             };
  //           } else {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );

  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(item?.slot) - sumOfCart) <= 0 ? 0 : parseInt(item?.slot) - sumOfCart),
  //               label: `${item.timeInterval} - ${((item?.slot - sumOfCart) >= 0 ? item?.slot - sumOfCart : 0)} slot(s)`,
  //             };
  //           }
  //         })
  //       );
  //     } else {
  //       setIntervals(
  //         ticket?.CreatedInterval.map((item) => {
  //           let reservation = reserve?.filter(
  //             (res) => res.BookingTime === item.timeInterval
  //           );
  //           let cartReserve = cart?.filter(
  //             (cartItem) =>
  //               cartItem.BookingTime === item.timeInterval &&
  //               cartItem.ticket?.accessToken === ticket?.accessToken
  //           );
  //           if (reservation.length > 0) {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );
  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(item.slot) - (sumOfCart + (reservation.length || 0))) <= 0 ? 0 : parseInt(item.slot) - (sumOfCart + (reservation.length || 0))),
  //               label: `${item.timeInterval} - ${((parseInt(item.slot) - (sumOfCart + (reservation.length || 0))) >= 0 ? (parseInt(item.slot) - (sumOfCart + (reservation.length || 0))) : 0)} slot(s)`,
  //             };
  //           } else {
  //             const sumOfCart = cartReserve.reduce(
  //               (total, item) => total + item.Pax,
  //               0
  //             );

  //             return {
  //               value: item.timeInterval,
  //               slot: ((parseInt(item.slot) - sumOfCart) <= 0 ? 0 : parseInt(item.slot) - sumOfCart),
  //               label: `${item.timeInterval} - ${((item.slot - sumOfCart) >= 0 ? item.slot - sumOfCart : 0)} slot(s)`,
  //             };
  //           }
  //         })
  //       );
  //     }
  //   } else {
  //     setIntervals([]);
  //   }
  // }, [bookingDate, ticket, reserve]);

  function handleClear() {
    setBookingDate(null);
    setBookingTime("");
    setPax("");
  }

  function handlePax(e) {
    let input = e.target.value !== "" ? parseInt(e.target.value) : ""; // Parse input as integer if not empty
    // if(ticket?.SubCategory === 'Entrance'){
    //   if (input === "" || (input > 0 && (ticket?.Promo === 'Buy 1 Take 1' ? (input * 2) <= entranceBooked : input <= entranceBooked) )) { // Check if input is empty or within the allowed range
    //     setPax(input);
    //   }
    // }
    // else{
    //   if (input === "" || (input > 0 && (ticket?.Promo === 'Buy 1 Take 1' ? (input * 2) <= maxPerInterval : input <= maxPerInterval) )) { // Check if input is empty or within the allowed range
    //     setPax(input);
    //   }
    // }

    if (
      input === "" ||
      (input > 0 &&
        (ticket?.Promo === "Buy 1 Take 1"
          ? input * 2 <= maxPerInterval
          : input <= maxPerInterval))
    ) {
      // Check if input is empty or within the allowed range
      setPax(input);
    }
  }

  function handlePersons(e) {
    let input = parseInt(e.target.value);
    setNumberOfPersons(input);
  }

  useEffect(() => {
    handleOptionChange("");
  }, [pax, business]);

  const maxPerInterval = useMemo(() => {
    let max = "";
    // if (ticket?.SubCategory === "Entrance") {
    //   let intervalData = intervals[0];
    //   max = intervalData?.slot - reserve?.length;
    // } 
    if (bookingDate && bookingTime && intervals) {
      let intervalData = intervals?.find((item) => item.value === bookingTime);
      max = intervalData?.slot;
    }
    return max;
  }, [bookingTime, bookingDate, intervals]);

  function handleBookingTime(e) {
    if (e.target.value) {
      const data = JSON.parse(e.target.value);
      setBookingTime(data.time);
      setBookingTimeId(data.id);
      setPax(1);
      setDisabled(false);
      setSlotIdentifier(data?.slot);
      setStringifyTime(e.target.value)
    } else {
      setBookingTime("");
      setPax(0);
      setDisabled(true);
      setSlotIdentifier(null);
    }
  }

  function handleCart() {
    const booking = {
      BusinessUnitID: business_unit[business],
      Location: selectedLocation,
      ticket: ticket,
      BookingDate: bookingDate ? format(bookingDate, "yyyy-MM-dd") : "",
      BookingTime: bookingTime,
      BookingEndTime: withoutFilters ? convertToNormalTime(ticket.TimeEnd) : "",
      Pax: ticket?.Promo === "Buy 1 Take 1" ? parseInt(pax * 2) : parseInt(pax),
      Option: selectedOption,
    };

    setBookingDate("");
    setBookingTime("");
    setPax("");
    dispatch(setCart([...cart, booking]));
    setStep(2);
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


  const withoutFilters = useMemo(
    () =>
      (ticket?.Category === "Games" &&
        (ticket?.SubCategory === "DrunkenPinball" ||
          ticket?.SubCategory === "Drunken Pinball" ||
          ticket?.SubCategory === "BoomBattleShot" ||
          ticket?.SubCategory === "Boom Battleshot" ||
          ticket?.SubCategory === "ExtremeBasketBall" ||
          ticket?.SubCategory === "Extreme Basketball" ||
          ticket?.SubCategory === "StarBlaster" ||
          ticket?.SubCategory === "Star Blaster" ||
          ticket?.SubCategory === "Ring The Bell")) ||
      (ticket?.Category === "Entrance And Events" &&
        ticket?.SubCategory === "Entrance") ||
      ticket?.Category === "Table Bookings" ||
      ticket?.Category === "EntranceWithoutTimeSlot" ||
      ticket?.Category === "Entrance Without Time Slot" ||
      ticket?.Category === "GamesWithoutTimeSlot" ||
      ticket?.Category === "Games Without Time Slot",
    [ticket]
  );

  function isDateInEvent(date) {
    for (const event of events) {
      const findTicket = event?.activity?.find(item => item?.value === ticket?.accessToken)
      if (findTicket) {
        const startDate = new Date(event.start);
        const endDate = new Date(event.end);

        // Extract the date part of the event start and end times
        const eventStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const eventEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

        if (date >= eventStartDate && date <= eventEndDate) {
          return "special-date";
        }
      }
    }
    return false;
  }

  const customDateStyle = (date) => {
    if (isDateInEvent(date)) {
      return "bg-red-500";
    }
    return "";
  };

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
                <span className="mr-2 text-sm">{ticket?.ticketName}</span>
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
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const allDates = [];

                      if (ticket?.SubCategory === "Entrance") {
                        for (const item of events) {
                          const findTicket = item?.activity?.find(item => item?.value === ticket?.accessToken)
                          if (findTicket) {
                            const startDate = new Date(item.start);
                            const endDate = new Date(item.end);
                            // Collect all dates that fall within the range of start and end dates in data
                            const currentDate = new Date(startDate);
                            while (currentDate <= endDate) {
                              allDates.push(format(currentDate, "MM/dd/yyyy"));
                              currentDate.setDate(currentDate.getDate() + 1);
                            }
                          }
                        }
                      }

                      const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
                      return (
                        date >= today &&
                        (!allDates.includes(format(date, "MM/dd/yyyy")) ||
                          !allowedDays.includes(dayOfWeek))
                      );
                    }}
                    value={bookingDate ? format(bookingDate, "MM/dd/yyyy") : ""}
                    dayClassName={customDateStyle}
                  />
                </div>
              </div>
              {ticket?.SubCategory !== "Entrance" && (
                <div>
                  <p className="text-sm">
                    PICK A BOOKING HOUR:{" "}
                    <small style={{ color: "red" }}>*</small>
                  </p>
                  <select
                    onChange={handleBookingTime}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
                    value={stringifyTime}
                  >
                    <option value={""}>Select a time</option>
                    {intervals?.length > 0 &&
                      intervals?.map((item, index) => {
                        return (
                          <option
                            key={index}
                            value={JSON.stringify(item.value)}
                            disabled={false}
                          >
                            {item.label}
                          </option>
                        );
                      })
                    }
                    {/* {intervals?.length > 0 &&
                      intervals?.map((item, index) => {
                        const itemTime = moment(item.value, "h:mm A").tz(
                          "Asia/Manila"
                        );

                        let currentTimeIsWithinEvent = false;
                        let timeParts =
                          item.value.match(/(\d+):(\d+) (AM|PM)/);
                        let hours = parseInt(timeParts[1]);
                        let minutes = parseInt(timeParts[2]);
                        if (timeParts[3] === "PM" && hours !== 12) {
                          hours += 12;
                        }
                        let timeDate = new Date(bookingDate);
                        timeDate.setHours(hours, minutes, 0, 0);
                        currentTimeIsWithinEvent = events?.some(
                          (event) => {
                            const findTicket = event?.activity?.find(item => item?.value === ticket?.accessToken)
                            if (findTicket) {
                              let startDateTime = new Date(event.start);
                              let endDateTime = new Date(event.end);
                              return (
                                timeDate >= startDateTime &&
                                timeDate <= endDateTime
                              )
                            }
                          }
                        );

                        if (currentTimeIsWithinEvent) {
                          return (
                            <option
                              key={index}
                              value={JSON.stringify(item)}
                              disabled={true}
                            >
                              {item.label}
                            </option>
                          );
                        } else {

                          if (item?.slot <= 0) {
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
                            ticket?.Promo === "Buy 1 Take 1" &&
                            item?.slot < parseInt(ticket.PromoValue) + 1
                          ) {
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
                            business !== "TFR" &&
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
                                {`${item.label}`}
                              </option>
                            );
                          } else if (
                            business === "TFR" &&
                            withoutFilters &&
                            formattedBookingDate === currentDateInPhilippines
                          ) {
                            // Disable the option if itemTime is before the current time
                            return (
                              <option key={index} value={JSON.stringify(item)}>
                                {`${item.value} - ${convertToNormalTime(
                                  ticket.TimeEnd
                                )} - ${item.slot} slot(s)`}
                              </option>
                            );
                          } else if (
                            business === "TFR" &&
                            !withoutFilters &&
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
                        }
                      })} */}
                  </select>
                </div>
              )}
              <div>
                <p className="text-sm">
                  {ticket?.Category === "Table Bookings"
                    ? "NUMBER OF SLOTS:"
                    : "NUMBER OF PASSES:"}{" "}
                  <small style={{ color: "red" }}>*</small>
                </p>

                {business !== "BakeBe" ? (
                  <input
                    type="number"
                    onChange={handlePax}
                    disabled={
                      ticket?.SubCategory === "Entrance"
                        ? false
                        : bookingTime
                          ? false
                          : true
                    }
                    min={1}
                    max={maxPerInterval}
                    value={pax}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400"
                  />
                ) : (
                  <select
                    onChange={handleBothFunctions}
                    disabled={bookingTime ? false : true}
                    // value={pax}
                    className="w-full shadow-md py-2 px-4 border-2 border-gray-400"
                  >
                    <option value={0} selected>
                      {" "}
                      -- Select an option --
                    </option>
                    <option value={1}> 1</option>
                    {/* {slotIdentifier >= 2 ? <option value={2}>2</option> : <></>} */}
                    <option value={2}>2</option> : <></>
                    {/*                    
                    {personCount.map((item, index) => {
                      if (slotIdentifier) {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      }
                    })} */}
                  </select>
                )}
              </div>
              {business === "BakeBe" && numberOfPersons == 2 && (
                <div className="flex flex-col w-full gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="Share"
                      onChange={(e) => {
                        handleOptionChange(e.target.value);
                        handlePax(e);
                      }}
                      checked={
                        selectedOption === "Share" || slotIdentifier === 1
                      }
                    />
                    <div className="text-xs">To this Bake project with a friend (Add Php 500 peer charge)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="radio"
                      className="mt-[2px]"
                      value="Individual"
                      onChange={(e) => {
                        handleOptionChange(e.target.value);
                        handlePax(2);
                      }}
                      checked={selectedOption === "Individual"}
                      disabled={disabled || slotIdentifier === 1}
                    />
                    <div className="text-xs">One Pastry per person </div>
                  </div>
                  <div className="text-xs text-white font-bold">
                    + Additional charge will be put on your total bill
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full sm:w-[40vw]">
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="py-4 px-6">
                  <div className="border-b-2 border-gray-200">
                    <p className="font-bold text-sm mb-2">
                      Location: {selectedLocation}
                    </p>
                    <p className="font-bold text-sm mb-3">
                      Type Of Ticket: {ticket?.ticketType}
                    </p>
                  </div>
                  <div className="pt-4 pb-3 border-b-2 border-gray-200">
                    <p className="font-bold text-sm">{ticket?.ticketName}</p>
                    <div className="flex justify-between py-2">
                      <div className="flex flex-col">
                        <p className="text-xs">
                          Date:{" "}
                          {bookingDate ? format(bookingDate, "MM/dd/yyyy") : ""}
                        </p>

                        <p className="text-xs">
                          Time:
                          {ticket?.Category === "Table Bookings" ||
                            ticket?.SubCategory === "DrunkenPinball" ||
                            ticket?.SubCategory === "Entrance" ||
                            ticket?.SubCategory === "Drunken Pinball" ||
                            ticket?.SubCategory === "BoomBattleShot" ||
                            ticket?.SubCategory === "Boom Battleshot" ||
                            ticket?.SubCategory === "ExtremeBasketBall" ||
                            ticket?.SubCategory === "Extreme Basketball" ||
                            ticket?.SubCategory === "StarBlaster" ||
                            ticket?.SubCategory === "Star Blaster" ||
                            ticket?.SubCategory === "Ring The Bell"
                            ? "Opening hours"
                            : `${bookingTime} ${withoutFilters && bookingTime
                              ? `- ` + convertToNormalTime(ticket.TimeEnd)
                              : ""
                            }`}
                        </p>

                        {ticket?.Promo === "Buy 1 Take 1" && pax ? (
                          <div>
                            <p className="text-xs">
                              No. of{" "}
                              {ticket?.Category === "Table Bookings"
                                ? "slot"
                                : "pass"}
                              : {pax} (+{pax})
                            </p>
                            <p className="text-xs">
                              Promo:{" "}
                              <span className="font-semibold">
                                {ticket.Promo}
                              </span>
                            </p>
                          </div>
                        ) : (
                          <p className="text-xs">
                            No. of{" "}
                            {ticket?.Category === "Table Bookings"
                              ? "slot"
                              : "pass"}
                            : {pax}
                          </p>
                        )}
                        {description && (
                          <p className="text-xs">Pax: {description}</p>
                        )}
                      </div>
                      <div className="flex items-ebd">
                        <p className="tex-4xl font-bold">₱ {ticket?.price}</p>
                      </div>
                    </div>
                  </div>
                  {ticket.Promo === "Discount" && pax ? (
                    <div>
                      <div className="flex justify-between pt-4 pb-3 border-b-2 border-gray-200">
                        <div className="text-sm font-bold">
                          Discount ({ticket?.PromoValue}%)
                        </div>
                        <div className="font-bold">
                          ₱{" "}
                          {ticket?.Price *
                            pax *
                            (parseInt(ticket?.PromoValue) / 100)}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 pb-3 border-b-2 border-gray-200">
                        <div className="text-sm font-bold">Total</div>
                        <div className="font-bold">
                          ₱{" "}
                          {total -
                            ticket?.Price *
                            pax *
                            (parseInt(ticket?.PromoValue) / 100)}
                        </div>
                      </div>
                    </div>
                  ) : ticket.Promo === "Amount to Reach" && pax ? (
                    <div>
                      <div className="flex justify-between pt-4 pb-3 border-b-2 border-gray-200">
                        <div className="text-sm font-bold">
                          Promo Amount (₱ {ticket?.PromoValue})
                        </div>
                        <div className="font-bold">
                          ₱ {parseInt(ticket?.PromoValue) * pax}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 pb-3 border-b-2 border-gray-200">
                        <div className="text-sm font-bold">Total</div>
                        <div className="font-bold">
                          ₱ {total - parseInt(ticket?.PromoValue) * pax}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-between pt-4 pb-3 border-b-2 border-gray-200">
                      <div className="text-sm font-bold">Total</div>
                      <div className="font-bold">₱ {total}</div>
                    </div>
                  )}
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
            {bookingDate &&
              (ticket?.SubCategory === "Entrance" || bookingTime) &&
              pax > 0 ? (
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
