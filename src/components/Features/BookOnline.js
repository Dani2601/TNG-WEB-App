import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { booknow, bookonline } from "../../assets/Dessert";
import routes from "../../constants/routes";
import { useSelector } from "react-redux";

export default function BookOnline() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.record);

  // console.log("user", user);
  return (
    <div className="w-full py-5 flex flex-col justify-center items-center font-quicksand">
      <img
        src={bookonline}
        className="object-cover w-[462px] h-[222px] lg:w-[562px] lg:h-[322px]"
      />
      <Link
        className="m-5 cursor-pointer"
        to={'/TheDessertMuseum/Booking/'}
      >
        <img
          src={booknow}
          className="w-[124px] lg:w-[214px] lg:h-[118px] object-cover hoverEffects"
        />
      </Link>
    </div>
  );
}
