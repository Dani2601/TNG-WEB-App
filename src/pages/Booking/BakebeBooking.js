import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { TDMLocation } from "../../components/Booking/TDMLocation";
import { TDMReserveTicket } from "../../components/Booking/TDMReserveTicket";
import DesertMuseumContainer from "../../components/Container";

import { addBooking } from "../../functions/Booking";
import { toast } from "react-toastify";
import TFRContainer from "../../components/Container/TFRContainer";
import SelectTicket from "../../components/TFR/Booking/SelectTicket";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import {
  SelectLocationBakebe,
  SelectTicketBakebe,
} from "../../components/Bakebe/Booking";
import SelectTypeOfBooking from "../../components/Bakebe/Booking/SelectTypeOfBooking";
import BakebeContainer from "../../components/Container/BakebeContainer";
import BakebeMenubar from "../../components/Navbar/BakebeMenubar";
import QRcode from 'qrcode.react'
import { generatePDF } from "../../helper/PDF";
import { sendEmailWithAttachment } from "../../functions/Email";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/action";

export function BakebeBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [ticket, setTicket] = useState("");
  const [pax, setPax] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [business] = useState("BakeBe");
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [selectedOption, setSelectedOption] = useState('Individual');
  const [qrCode, setQRCode] = useState("default");
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const locationR = useLocation();

  useEffect(() => {
    if(locationR.state?.step){
      setStep(5)
    }
  }, [locationR])

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  const total = useMemo(() => {
    if(ticket){
      let price = ticket?.Price
      if(pax === 2){
        if(selectedOption !== 'Individual'){
          return price
        }
        else{
          return price * pax
        }
      }
      else{
        return price
      }
    }
    return 0
  }, [ticket, pax, selectedOption])
  
  function submit(e) {
    addBooking(e)
      .then((result) => {
        if (result.valid) {
          setLoading(false)
          window.location.href = result.data.invoice_url;
        } else {
          setLoading(false)
          toast.error("Failed to submit");
        }
      })
      .catch((e) => {
        setLoading(false)
        console.log(e);
        toast.error("Something went wrong");
      });
  }

  return (
    <>
      <QRcode value = {qrCode} id = 'qrcode' className="hidden"/>
      {step == 1 && (
        <SelectLocationBakebe
          step={step}
          setStep={setStep}
          location={location}
          setLocation={setLocation}
        />
      )}
      {step == 2 && (
        <SelectTypeOfBooking
          setStep={setStep}
          ticket={ticket}
          setTicket={setTicket}
          location={location}
          setLocation={setLocation}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
      {step == 3 && (
        <SelectTicketBakebe
          setStep={setStep}
          ticket={ticket}
          setTicket={setTicket}
          location={location}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
      {step == 4 && (
        <BakebeContainer>
          <BakebeMenubar />
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
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
            total={total}
          />
        </BakebeContainer>
      )}
      {step == 5 && (
        <BakebeContainer>
          <BakebeMenubar />{" "}
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
            bookingType={selectedOption}
            total={total}
            setLoading={setLoading}
            loading={loading}
          />
        </BakebeContainer>
      )}
    </>
  );
}
