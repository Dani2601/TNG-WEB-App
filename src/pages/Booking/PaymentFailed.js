// PaymentFailed.js

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";


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


const PaymentFailed = () => {
  
  const { cart } = useSelector(state => state.record);
  const navigate = useNavigate()

  const handleCartClick = () => {
      if(cart.length > 0){
          const checkBusiness = cart[0]?.BusinessUnitID
          navigate(business_unit[checkBusiness], {state: {step: true}})
      }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <h1 className="text-2xl font-bold mb-2">Payment Failed!</h1>
      <p className="text-gray-600 text-center mb-4">
        We're sorry, but there was an issue processing your payment.
      </p>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={handleCartClick}
      >
        Try Again
      </button>
    </div>
  );
};

export default PaymentFailed;
