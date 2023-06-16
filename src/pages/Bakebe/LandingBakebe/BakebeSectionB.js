import React from "react";
import rightArrow from "../../../assets/Bakebe/arrowfrm2.png";
import a from "../../../assets/Bakebe/a.png";
import b from "../../../assets/Bakebe/b.png";
import c from "../../../assets/Bakebe/c.png";
import d from "../../../assets/Bakebe/d.png";
import e from "../../../assets/Bakebe/e.png";
import f from "../../../assets/Bakebe/f.png";

import rightcake1 from "../../../assets/Bakebe/rightcake (1).png";

export default function BakebeSectionB() {
  return (
    <div>
      {" "}
      <div
        className=" h-auto"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="py-10">
          <div className="flex flex-col mx-[5%] items-center">
            <div className="text-bakebe-orange text-[24px] mb-10">
              HOW TO RESERVE
            </div>

            <div className="flex flex-col laptopL:flex-row items-center  w-full px-[10%]">
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%] ">
                <img src={a} alt={"A"} className="w-[86px]" />
                <div className="font-bold">Step 1</div>
                <div
                  className="text-center tablet:mx-[10%]"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  Click Book Now!
                </div>
              </div>

              <div className="hidden laptopL:block laptopL:w-[8%]">
                <img
                  src={rightArrow}
                  alt={"rightArrow"}
                  className="w-[40px] "
                />
              </div>

              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <img src={b} alt={"B"} className="w-[86px]" />
                <div className="font-bold">Step 2</div>
                <div
                  className="text-center tablet:mx-[10%]"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  Choose your location
                </div>
              </div>
              <div className="hidden laptopL:block laptopL:w-[8%]">
                <img
                  src={rightArrow}
                  alt={"rightArrow"}
                  className="w-[40px] "
                />
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <img src={c} alt={"AC"} className="w-[86px] " />
                <div className="font-bold">Step 3</div>
                <div
                  className="text-center tablet:mx-[10%]"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  Select your booking: Regular baking experience? Or Express
                  Service?
                </div>
              </div>
            </div>
            <div className="flex flex-col laptopL:flex-row items-center  w-full px-[10%]">
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <img src={d} alt={"D"} className="w-[86px]" />
                <div className="font-bold">Step 4</div>
                <div
                  className="text-center tablet:mx-[10%]"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  Book in your chosen recipe!
                </div>
              </div>

              <div className="hidden laptopL:block laptopL:w-[8%]">
                <img
                  src={rightArrow}
                  alt={"rightArrow"}
                  className="w-[40px] "
                />
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <img src={e} alt={"E"} className="w-[86px]" />
                <div className="font-bold">Step 5</div>
                <div
                  className="text-center tablet:mx-[10%]"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  Add in the number of bakers and schedule of baking.
                </div>
              </div>
              <div className="hidden laptopL:block laptopL:w-[8%]">
                <img
                  src={rightArrow}
                  alt={"rightArrow"}
                  className="w-[40px] "
                />
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <img src={f} alt={"F"} className="w-[86px]" />
                <div className="font-bold">Step 6</div>
                <div
                  className="text-center tablet:mx-[10%]"
                  style={{ fontFamily: "Gotham-Light, sans-serif" }}
                >
                  Pay in via bank transfer or paypal and many more!{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={rightcake1} alt={"F"} className="h-[250px] hidden laptopL:block -mt-[120px]" />

      </div>
    </div>
  );
}
