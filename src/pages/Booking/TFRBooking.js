import React, { useMemo } from "react";
import { useState } from "react";
import { TDMLocation } from "../../components/Booking/TDMLocation";
import { TDMReserveTicket } from "../../components/Booking/TDMReserveTicket";
import DesertMuseumContainer from "../../components/Container";

import { addBooking } from "../../functions/Booking";
import { toast } from "react-toastify";
import TFRContainer from "../../components/Container/TFRContainer";
import SelectTicket from "../../components/TFR/Booking/SelectTicket";
import SelectLocation from "../../components/TFR/Booking/SelectLocation";
import { TDMBookingDetails } from "../../components/Booking/TDMBookingDetails";
import { TDMPaymentDetails } from "../../components/Booking/TDMPaymentDetails";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import QRcode from "qrcode.react";
import { sendEmailWithAttachment } from "../../functions/Email";
import { generatePDF } from "../../helper/PDF";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/action";
import { useEffect } from "react";
import SelectCategory from "../../components/TFR/Booking/SelectCategory";
import { TFRBookingDetails } from "../../components/Booking/TFRBookingDetails";
import TFRMenubarNonSpa from "../../components/Navbar/TFRMenubarNonSpa";
import { TFRPaymentDetails } from "../../components/Booking/TFRPaymentDetails";

export function TFRBooking() {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState("Games");
  const [ticket, setTicket] = useState("");
  const [pax, setPax] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [business] = useState("TFR");
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Individual");
  const [qrCode, setQRCode] = useState("default");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { user, cart } = useSelector((state) => state.record);


  const locationR = useLocation();

  useEffect(() => {
    if (locationR.state?.step) {
      setStep(4);
    }
  }, [locationR]);

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  const total = useMemo(() => {
    if (ticket) {
      let price = ticket?.Price;
      return price * pax;
    }
    return 0;
  }, [ticket, pax]);

  function submit(e) {
    addBooking(e)
      .then((result) => {
        if (result.valid) {
          window.location.href = result.data.invoice_url;
        } else {
          setLoading(false);
          toast.error("Failed to submit");
        }
      })
      .catch((e) => {
        setLoading(false);
        toast.error("Something went wrong");
      });
  }

  return (
    <>
      <QRcode value={qrCode} id="qrcode" className="hidden" />

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
          categories={categories}
          setCategories={setCategories}
          setTicket={setTicket}
          location={location}
        />
      )}
      {step == 3 && (
        <TFRContainer>
          <TFRMenubarNonSpa />

          <TFRBookingDetails
            setStep={setStep}
            ticket={ticket}
            location={location}
            pax={pax}
            setPax={setPax}
            setCategories={setCategories}
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
        </TFRContainer>
      )}
      {step == 4 && (
        <TFRContainer>
          <TFRMenubarNonSpa />

          <TFRPaymentDetails
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
        </TFRContainer>
      )}
    </>
  );
}
