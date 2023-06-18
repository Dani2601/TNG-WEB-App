import React from "react";
import { useState } from "react";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";
import GootopiaContainer from "../../components/Container/GootopiaContainter";
import SelectLocation from "../../components/Gootopia/Booking/SelectLocation";
import { SelectTicket } from "../../components/Gootopia/Booking";
import { addBooking } from "../../functions/Booking";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import TISContainer from "../../components/Container/TISContainer";
import InflatableSelectLocation from "../../components/Gootopia/Booking/InflatableSelectLocation";
import InflatableSelectTicket from "../../components/Gootopia/Booking/InflatableSelectTicket";

export function InflatableBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");

  const [ticket, setTicket] = useState("");
  const [pax, setPax] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [business, ] = useState("Inflatable")
  const navigate = useNavigate();

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
          navigate(routes.LandingInflatableIsland)
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

  return (
    <>
      {step == 1 && (
        <InflatableSelectLocation
          step={step}
          setStep={setStep}
          location={location}
          setLocation={setLocation}
        />
      )}
      {step == 2 && (
        <InflatableSelectTicket
          setStep={setStep}
          ticket={ticket}
          setTicket={setTicket}
          location={location}
        />
      )}
      {step == 3 && (
        <TISContainer>
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
        </TISContainer>
      )}
      {step == 4 && (
        <TISContainer>
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
        </TISContainer>
      )}
    </>
  );
}
