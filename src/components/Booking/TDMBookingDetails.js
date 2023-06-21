import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { logo, nx, tnglogo } from "../../assets/Dessert";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import { MdRestoreFromTrash } from "react-icons/md";
import { useEffect } from "react";
import { getBranches } from "../../functions/Branches";
import { useSelector } from "react-redux";
import { useState } from "react";
import { format, parse, setDate } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getBookingsByTicketID } from "../../functions/Tickets";

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

export function TDMBookingDetails({
  setStep,
  ticket,
  location,
  pax,
  setPax,
  bookingDate,
  setBookingDate,
  bookingTime,
  setBookingTime,
  business,
}) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.record);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [intervals, setIntervals] = useState([]);
  const [reserve, setReserve] = useState([]);

  function handleBack() {
    if (business === "BakeBe") {
      setStep(3);
    } else {
      setStep(2);
    }
  }

  function handleNext() {
    if (business === "BakeBe") {
      setStep(5);
    } else {
      setStep(4);
    }
  }

  useEffect(() => {
    if (business === "Gootopia") {
      getBranches(user.id, GOOTOPIA_KEY)
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
    } else if (business === "Inflatable") {
      getBranches(user.id, TIS_KEY)
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
      getBranches(user.id, BAKEBE_KEY)
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
      getBranches(user.id, DESSERT_KEY)
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
  }, []);

  useEffect(() => {
    if (ticket?.id && bookingDate) {
      getBookingsByTicketID(ticket?.id, format(bookingDate, "yyyy-MM-dd"))
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
  }, [ticket, bookingDate]);

  function handleBookingDate(date) {
    setBookingDate(date);
    setPax(1);
  }

  useEffect(() => {
    if (bookingDate) {
      setIntervals(
        ticket?.CreatedInterval.map((item) => {
          let reservation = reserve?.filter(
            (res) => res.BookingTime === item.timeInterval
          );
          if (reservation.length > 0) {
            const sumOfPass = reservation.reduce(
              (total, item) => total + item.Pass,
              0
            );
            return {
              value: item.timeInterval,
              slot: parseInt(item.slot) - sumOfPass,
              label: `${item.timeInterval} - ${
                parseInt(item.slot) - sumOfPass
              } slot(s)`,
            };
          } else {
            return {
              value: item.timeInterval,
              slot: parseInt(item.slot),
              label: `${item.timeInterval} - ${item.slot} slot(s)`,
            };
          }
        })
      );
    } else {
      setIntervals([]);
    }
  }, [bookingDate, ticket, reserve]);

  console.log("intervals",intervals);

  const allowedDays = ["Monday", "Tuesday", "Wednesday"];

  function handleClear() {
    setBookingDate(null);
    setBookingTime(null);
    setPax(1);
  }

  function handlePax(e) {
    let input = e.target.value;
    let intervalData = intervals?.find((item) => item.value === bookingTime);
    if (input <= intervalData.slot) {
      setPax(input);
    }
  }

  const maxPerInterval = useMemo(() => {
    let max = "";
    if (bookingDate && bookingTime && intervals) {
      let intervalData = intervals?.find((item) => item.value === bookingTime);
      max = intervalData?.slot;
    }
    return max;
  }, [bookingTime, bookingDate, intervals]);

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-[80vw] sm:w-[50vw]">
        <div className="text-center flex gap-6 flex-col justify-center items-center">
          <img src={nx} className="w-[60px] object-contain" />
          <img src={tnglogo} className="w-[400px] object-cover" />
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
              <div>
                <p className="text-sm">
                  PICK A DATE: <small style={{ color: "red" }}>*</small>
                </p>
                <DatePicker
                  selected={bookingDate}
                  onChange={handleBookingDate}
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
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
              <div>
                <p className="text-sm">
                  PICK A BOOKING HOUR: <small style={{ color: "red" }}>*</small>
                </p>
                <select
                  onChange={(e) => setBookingTime(e.target.value)}
                  value={bookingTime}
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
                >
                  <option>Select a time</option>
                  {intervals?.length > 0 &&
                    intervals?.map((item, index) => {
                      if (item.slot === 0) {
                        return (
                          <option
                            key={index}
                            value={item.value}
                            disabled={true}
                          >
                            {item.label}
                          </option>
                        );
                      } else {
                        return (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
              <div>
                <p className="text-sm">
                  NUMBER OF PASSES: <small style={{ color: "red" }}>*</small>
                </p>
                <input
                  type="number"
                  onChange={handlePax}
                  defaultValue={1}
                  min={1}
                  max={maxPerInterval}
                  value={pax}
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
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
                    <div className="font-bold">₱ {ticket?.Price}</div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="flex justify-center py-4 px-6">
                  <p className="text-xs">
                    Please note that our TWO HOUR TOUR starts every 15 minutes.
                    Guests are required to come 20 minutes before their
                    scheduled slot for processing of tickets.
                  </p>
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
            <button
              onClick={handleNext}
              disabled={!bookingDate || !bookingTime || pax === 0}
              className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white"
            >
              Next
            </button>
            {/* <button
              onClick={handleNext}
              className="shadow-md text-sm w-full sm:w-auto  py-2 px-6 bg-[#E992A1] text-white"
            >
              Add More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
