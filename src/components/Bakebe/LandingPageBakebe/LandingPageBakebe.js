import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BakebeMenubar from "../../Navbar/BakebeMenubar";
import BakebeSectionA from "../../../pages/Bakebe/LandingBakebe/BakebeSectionA";
import BakebeSectionB from "../../../pages/Bakebe/LandingBakebe/BakebeSectionB";
import BakebeSectionC from "../../../pages/Bakebe/LandingBakebe/BakebeSectionC";
import BakebeSectionD from "../../../pages/Bakebe/LandingBakebe/BakebeSectionD";

export default function LandingPageBakebe() {
  return (
    <>
      <BakebeMenubar />
      <BakebeSectionA />
      <BakebeSectionB />
      {/* <div className="my-10"> */}
      <BakebeSectionC />
      {/* </div> */}
      <BakebeSectionD />
    </>
  );
}
