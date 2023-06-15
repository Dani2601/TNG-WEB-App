import React from "react";
import { useState } from "react";
import { TDMLocation } from "../../components/Booking/TDMLocation";
import { TDMReserveTicket } from "../../components/Booking/TDMReserveTicket";
import DesertMuseumContainer from "../../components/Container";

import { addBooking } from "../../functions/Booking";
import { toast } from 'react-toastify'
import TFRContainer from "../../components/Container/TFRContainer";
import SelectTicket from "../../components/TFR/Booking/SelectTicket";
import SelectLocation from "../../components/TFR/Booking/SelectLocation";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";

export function TFRBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");

  const [ticket, setTicket] = useState("");
  const [pax, setPax] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [business, ] = useState("TFR")
  


  function submit(e) {
    addBooking(e)
      .then((result) => {
        if (result.valid) {
          setBookingDate("");
          setBookingDate("");
          setPax(1);
          setTicket("");
          setLocation("");
          setStep(1);
          toast.success("Successfully added");
        } else {
          toast.error("Failed to submit");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong");
      });
  }

  console.log("location",location)

  return (
    <>
      {step == 1 && (
        <SelectLocation
          step={step}
          setStep={setStep}
          location={location}
          setLocation={setLocation}
        />
      )}
      {step == 2 && (
        <SelectTicket
          setStep={setStep}
          ticket={ticket}
          setTicket={setTicket}
          location={location}
        />
      )}
      {step == 3 && (
        <TFRContainer>
          <TDMBookingDetails
            setStep={setStep}
            ticket={ticket}
            location={location}
            pax={pax}
            setPax={setPax}
            bookingDate={bookingDate}
            setBookingDate={setBookingDate}
            bookingTime={bookingTime}
            setBookingTime={setBookingTime}
            business={business}
          />
        </TFRContainer>
      )}
      {step == 4 && (
        <TFRContainer>
          <TDMPaymentDetails
            setStep={setStep}
            ticket={ticket}
            location={location}
            pax={pax}
            setPax={setPax}
            bookingDate={bookingDate}
            setBookingDate={setBookingDate}
            bookingTime={bookingTime}
            setBookingTime={setBookingTime}
            setSubmitData={submit}
            business={business}

          />
        </TFRContainer>
      )}
    </>
  );
}
