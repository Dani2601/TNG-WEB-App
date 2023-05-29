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
    default:
  }
}
