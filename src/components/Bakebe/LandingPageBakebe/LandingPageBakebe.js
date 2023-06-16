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
import BakebeMenubar from "../../Navbar/BakebeMenubar";

export default function LandingPageBakebe() {
  return (
    <>
      <div
        className="w-full h-screen modalgradient"
        style={{ fontFamily: "Nulshock, sans-serif" }}
      >
        <BakebeMenubar />
        <div
          className="bg-tfr-purple "
          style={{ fontFamily: "Nulshock, sans-serif" }}
        ></div>
      </div>
    </>
  );
}
