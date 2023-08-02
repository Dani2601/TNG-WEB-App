// PaymentSuccess.js

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/action";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { generatePDF } from "../../helper/PDF";
import { sendEmailWithAttachment } from "../../functions/Email";
import QRCode from "react-qr-code";
import { ViewTransactionViaCode } from "../../functions/Booking";

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

const business_unit = {
    [BAKEBE_KEY]: routes.BookingBakebe,
    [GOOTOPIA_KEY]: routes.BookingGootopia,
    [TFR_KEY]: routes.BookingTFR,
    [DESSERT_KEY]: routes.DessertBooking,
    [TIS_KEY]: routes.BookingInflatable
}

const PaymentSuccess = () => {
  const dispatch = useDispatch()
  const [link, setLink] = useState()
  const navigate = useNavigate()
  const [qrCode, setQRCode] = useState("default");

  useEffect(() => {
    dispatch(setCart([]))
    const urlParams = new URLSearchParams(window.location.search);
    const business = urlParams.get("bus");
    const qrcode = urlParams.get("qc");
    const code = urlParams.get("c");
    const getBookingData = async () => {
      const bookingData = await ViewTransactionViaCode(business,qrcode,code)
    console.log("booking data",bookingData)
    setQRCode(qrcode);
      setTimeout(() =>{
          generatePDF({
            InvoiceCode : code,
            BusinessUnit : bookingData?.forPDF?.BusinessUnit,
            Branch : bookingData?.forPDF?.Branch,
            Customer : bookingData?.forPDF?.Customer,
            BookingDate : bookingData?.data?.Items[0]?.BookingDate,
            BookingTime : bookingData?.data?.Items[0]?.BookingTime,
            NumberOfPass: String(bookingData?.data?.Items[0]?.Pax),
            TotalPrice : String(bookingData?.data?.TotalPrice),
            PDFFile : bookingData?.data?.PDFFile
          });
        sendEmailWithAttachment({Email : bookingData?.forPDF?.Email, Message : `Hello ${bookingData?.forPDF?.Customer}`, Filename: bookingData?.data?.PDFFile});
        // toast.success("Successfully added");
        setLink(business_unit[business])
      },3000)
    }
    getBookingData();
  }, [])

  function handleLink(){
    navigate(link || routes.LandingTFR)
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
      <QRCode value={qrCode} id='qrcode' className="hidden"/>
      </div>
      <svg
        className="w-16 h-16 text-green-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-gray-600 text-center mb-4">
        Thank you for your payment. Your booking is confirmed.
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleLink}
      >
        Okay
      </button>
    </div>
  );
};

export default PaymentSuccess;