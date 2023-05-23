import React from "react";
import { useState } from "react";
import { TDMLocation } from "../../components/Booking/TDMLocation";
import { TDMReserveTicket } from "../../components/Booking/TDMReserveTicket";
import DesertMuseumContainer from "../../components/Container";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";
import GootopiaContainer from "../../components/Container/GootopiaContainter";
import SelectLocation from "../../components/Gootopia/Booking/SelectLocation";
import { SelectTicket } from "../../components/Gootopia/Booking";

export function GootopiaBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  
  return (
    <>
      {step == 1 && (
        <SelectTicket
          setStep={setStep}
          location={location}
          setLocation={setLocation}
        />
      )}
      {step == 2 && <SelectLocation setStep={setStep} />}
      {step == 3 && (
        <GootopiaContainer>
          <TDMBookingDetails setStep={setStep} />
        </GootopiaContainer>
      )}
      {step == 4 && (
        <GootopiaContainer>
          <TDMPaymentDetails setStep={setStep} />
        </GootopiaContainer>
      )}
    </>
  );
}
