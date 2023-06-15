import React from "react";
import booknow2 from "../../assets/TFR/button BOOK NOW-W BG.png";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import { useSelector } from "react-redux";

export default function BookNow() {
  const { user } = useSelector((state) => state.record);

  return (
    <div
      className="flex flex-col bg-tfr-pink  items-center justify-center cursor-pointer "
      id="booknow"
    >
      <Link to={user ? routes.BookingTFR : routes.Login} >
        <img
          src={booknow2}
          alt={"Events"}
          className="cursor-pointer h-[30px] my-3 tablet:h-[50px] tablet:my-6 laptopL:h-[80px] laptopL:my-8  "
        />
      </Link>
    </div>
  );
}
