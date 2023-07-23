// PaymentSuccess.js

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/action";

const PaymentSuccess = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCart([]))
  }, [])
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default PaymentSuccess;