import React from "react";
import { useState } from "react";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";
import GootopiaContainer from "../../components/Container/GootopiaContainter";
import SelectLocation from "../../components/Gootopia/Booking/SelectLocation";
import { SelectTicket } from "../../components/Gootopia/Booking";
import { addBooking } from "../../functions/Booking";
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import TISContainer from "../../components/Container/TISContainer";
import InflatableSelectLocation from "../../components/Gootopia/Booking/InflatableSelectLocation";
import InflatableSelectTicket from "../../components/Gootopia/Booking/InflatableSelectTicket";
import QRcode from 'qrcode.react'
import { sendEmailWithAttachment } from "../../functions/Email";
import { generatePDF } from "../../helper/PDF";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/action";
import { useEffect } from "react";

export function InflatableBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");

  const [ticket, setTicket] = useState("");
  const [pax, setPax] = useState(1);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [business, ] = useState("Inflatable")
  const [qrCode, setQRCode] = useState("default");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState('Individual');
  
  const locationR = useLocation();

  useEffect(() => {
    if(locationR.state?.step){
      setStep(4)
    }
  }, [locationR])

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

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
          setQRCode(result?.forPDF?.QRCode);
          setTimeout(() =>{
            generatePDF({
              InvoiceCode : result?.forPDF?.InvoiceCode,
              BusinessUnit : result?.forPDF?.BusinessUnit,
              Branch : result?.forPDF?.Branch,
              Customer : result?.forPDF?.Customer,
              BookingDate : e?.BookingDate,
              BookingTime : e?.BookingTime,
              NumberOfPass: String(e?.Pax),
              TotalPrice : String(e?.TotalPrice),
              PDFFile : e?.PDFFile
            });
            sendEmailWithAttachment({Email : result?.forPDF?.Email, Message : `Hello ${result?.forPDF?.Customer}`, Filename: e?.PDFFile});
            toast.success("Successfully added");
            dispatch(setCart([]))
            navigate(routes.LandingInflatableIsland);
          },3000)
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
    <QRcode value = {qrCode} id = 'qrcode' className="hidden"/>
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
            handleOptionChange={handleOptionChange}
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