import React, { useMemo } from "react";
import { useState } from "react";
import { TDMLocation } from "../../components/Booking/TDMLocation";
import { TDMReserveTicket } from "../../components/Booking/TDMReserveTicket";
import DesertMuseumContainer from "../../components/Container";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";
import GootopiaContainer from "../../components/Container/GootopiaContainter";
import SelectLocation from "../../components/Gootopia/Booking/SelectLocation";
import { SelectTicket } from "../../components/Gootopia/Booking";
import { addBooking } from "../../functions/Booking";
import { toast } from 'react-toastify'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import routes from "../../constants/routes";
import QRcode from 'qrcode.react'
import { sendEmailWithAttachment } from "../../functions/Email";
import { generatePDF } from "../../helper/PDF";
import { setCart } from "../../store/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function GootopiaBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [ticket, setTicket] = useState("");
  const [pax, setPax] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [business, ] = useState("Gootopia")
  const [selectedType, setSelectedType] = useState("");
  const [qrCode, setQRCode] = useState("default");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('Individual');
  const locationR = useLocation();
  const [loading, setLoading] = useState(false)
  const { locationParams } = useParams();

  useEffect(() => {
    if(locationR.state?.step){
      setStep(4)
    }
  }, [locationR])

  useEffect(() => {
    if(locationParams){
      setLocation(locationParams)
      setStep(2)
    }
    else{
      setStep(1)
    }
  }, [locationParams])

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };
  
  const total = useMemo(() => {
    if(ticket){
      let price = ticket?.Price
      return price * pax
    }
    return 0
  }, [ticket, pax])

  function submit(e) {
    addBooking(e)
      .then((result) => {
        if (result.valid) {
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
  
  const navigateToNextStep = () => {
    navigate(`/Gootopia/Booking/${location}`);
    setStep(step + 1)
  };

  const navigateToLocation = () => {
    navigate(`/Gootopia/Booking/`);
    setStep(1)
  };

  return (
    <>
    {/* <QRcode value = {qrCode} id = 'qrcode' className="hidden"/> */}
      {step == 1 && (
        <SelectLocation
          step={step}
          setStep={setStep}
          location={location}
          setLocation={setLocation}
          navigateToNextStep={navigateToNextStep}
        />
      )}
      {step === 2 && (
        <SelectTicket
          setStep={setStep}
          ticket={ticket}
          setTicket={setTicket}
          location={location}
          navigateToLocation={navigateToLocation}
        />
      )}
      {step === 3 && (
        <GootopiaContainer>
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
        </GootopiaContainer>
      )}
      {step === 4 && (
        <GootopiaContainer>
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
        </GootopiaContainer>
      )}
    </>
  );
}
