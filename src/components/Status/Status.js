import React, { useState } from "react";

export default function Status(props) {
  const { status } = props;
  switch (status) {
    case "A":
      return (
        <div className="bg-green-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          <span>Success</span>
        </div>
      );
    case "Paid":
      return (
        <div className="bg-green-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          <span>Paid</span>
        </div>
      );
    case "S":
      return (
        <div className="bg-green-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          <span>Success</span>
        </div>
      );
    case "P":
      return (
        <div className="bg-green-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          <span>Pending</span>
        </div>
      );
    case "I":
      return (
        <span className="bg-yellow-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Inactive
        </span>
      );
    case "R":
      return (
        <span className="bg-red-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Rejected
        </span>
      );
    case "X":
      return (
        <span className="bg-blue-300 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Archived
        </span>
      );
    case "F":
      return (
        <span className="bg-red-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Failed
        </span>
      );
    case "Pending":
      return (
        <span className="bg-yellow-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Pending
        </span>
      );
    case "Unused":
      return (
        <span className="bg-orange-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Unused
        </span>
      );
    case "Expired":
      return (
        <span className="bg-red-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Expired
        </span>
      );
    case "Cancelled":
      return (
        <span className="bg-blue-300 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Cancelled
        </span>
      );
    case "Used":
      return (
        <span className="bg-green-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Used
        </span>
      );
    case "Declined":
      return (
        <span className="bg-red-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
          Declined
        </span>
      );
      case "Void":
        return (
          <span className="bg-yellow-600 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
            Void
          </span>
        );
        case "Refund":
          return (
            <span className="bg-red-500 w-20 h-7 text-center flex justify-center items-center rounded-lg text-slate-50">
              Refund
            </span>
          );
    default:
  }
}
