import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TFRMenubar from "../../Navbar/TFRMenubar";
import CarouselA from "../../../pages/TFR/CarouselA";
import FunRoofInfo from "../../../pages/TFR/FunRoofInfo";
import EatBooze from "../../../pages/TFR/EatBooze";
import CarouselB from "../../../pages/TFR/CarouselB";
import Games from "../../../pages/TFR/Games";
import FindUsHere from "../../../pages/TFR/FindUsHere";
import BookNow from "../../../pages/TFR/BookNow";
import { PromoDiscountSection } from "../../../pages/PromoDiscountSection/PromoDiscountSection";
const TFR = process.env.REACT_APP_TFR_KEY;

export default function LandingPage() {
  return (
    <>
      <TFRMenubar />

      <div>
        <div
          className="bg-tfr-purple "
          style={{ fontFamily: "Nulshock, sans-serif" }}
        >
          <div className="flex h-[30px] laptop:h-[50px] tablet:text-[15px] flex-row justify-center uppercase text-tfr-yellow text-[12px] font-Nulshock font-bold">
            <div className="my-auto">
              Open every Tuesday - Friday | 7PM TO LATE!
            </div>
          </div>
        </div>

        {/* 1st Section */}
        <CarouselA />

        {/* 2nd Section */}
        <FunRoofInfo />

        {/* 3rd Section */}
        <EatBooze />

        {/* 4th  Section */}
        <CarouselB />

        {/* 5th Section */}
        <Games />

        <div className="bg-tdm-pink py-10 font-poppins">
          <PromoDiscountSection businessUnitId={TFR} />
        </div>
        {/* 6th Section */}
        <FindUsHere />

        {/* 7th Section */}
        <BookNow />
      </div>
    </>
  );
}
