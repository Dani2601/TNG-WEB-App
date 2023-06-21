import React from "react";
import rightArrow from "../../../assets/Bakebe/arrowfrm2.png";
import a from "../../../assets/Bakebe/a.png";
import b from "../../../assets/Bakebe/b.png";
import c from "../../../assets/Bakebe/c.png";
import d from "../../../assets/Bakebe/d.png";
import e from "../../../assets/Bakebe/e.png";
import f from "../../../assets/Bakebe/f.png";

import rightcake1 from "../../../assets/Bakebe/rightcake (1).png";
import ScrollAnimation from "react-animate-on-scroll";

export default function BakebeSectionB() {
  return (
    <div>
      {" "}
      <div
        id="howto"
        className=" h-auto"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="py-10">
          <div className="flex flex-col mx-[5%] items-center">
            <div className="text-bakebe-orange text-[24px] mb-10">
              <ScrollAnimation animateIn="fadeInUp" delay={300}>
                HOW TO RESERVE
              </ScrollAnimation>
            </div>

            <div className="flex flex-col laptopL:flex-row items-center  w-full px-[10%]">
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%] ">
                <ScrollAnimation animateIn="fadeIn" delay={300}>
                  <div className="flex flex-row justify-center">
                    <img src={a} alt={"A"} className="w-[86px] " />
                  </div>
                  <div className="font-bold text-center">Step 1</div>
                  <div
                    className="items-center text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Click Book Now!
                  </div>
                </ScrollAnimation>
              </div>

              <div className="hidden laptopL:block laptopL:w-[8%]">
                <ScrollAnimation animateIn="fadeIn" delay={600}>
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </ScrollAnimation>
              </div>

              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <ScrollAnimation animateIn="fadeIn" delay={900}>
                  <div className="flex flex-row justify-center">
                    <img src={b} alt={"B"} className="w-[86px]" />
                  </div>
                  <div className="font-bold text-center">Step 2</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Choose your location
                  </div>
                </ScrollAnimation>
              </div>
              <div className="hidden laptopL:block laptopL:w-[8%]">
                <ScrollAnimation animateIn="fadeIn" delay={1200}>
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </ScrollAnimation>
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <ScrollAnimation animateIn="fadeIn" delay={1500}>
                  <div className="flex flex-row justify-center">
                    <img src={c} alt={"AC"} className="w-[86px] " />
                  </div>
                  <div className="font-bold text-center">Step 3</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Select your booking: Regular baking experience? Or Express
                    Service?
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="flex flex-col laptopL:flex-row items-center  w-full px-[10%]">
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <ScrollAnimation animateIn="fadeIn" delay={1800}>
                  <div className="flex flex-row justify-center">
                    <img src={d} alt={"D"} className="w-[86px]" />
                  </div>

                  <div className="font-bold text-center">Step 4</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Book in your chosen recipe!
                  </div>
                </ScrollAnimation>
              </div>

              <div className="hidden laptopL:block laptopL:w-[8%]">
                <ScrollAnimation animateIn="fadeIn" delay={2100}>
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </ScrollAnimation>
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <ScrollAnimation animateIn="fadeIn" delay={2500}>
                  <div className="flex flex-row justify-center">
                    <img src={e} alt={"E"} className="w-[86px]" />
                  </div>
                  <div className="text-center font-bold">Step 5</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Add in the number of bakers and schedule of baking.
                  </div>
                </ScrollAnimation>
              </div>
              <div className="hidden laptopL:block laptopL:w-[8%]">
                <ScrollAnimation animateIn="fadeIn" delay={2800}>
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </ScrollAnimation>
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
                <ScrollAnimation animateIn="fadeIn" delay={3100}>
                  <div className="flex flex-row justify-center">
                    <img src={f} alt={"F"} className="w-[86px]" />
                  </div>
                
                    <div className="font-bold text-center">Step 6</div>
                    <div
                      className="text-center tablet:mx-[10%]"
                      style={{ fontFamily: "Gotham-Light, sans-serif" }}
                    >
                      Pay in via bank transfer or paypal and many more!{" "}
                   
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        <img
          src={rightcake1}
          alt={"F"}
          className="h-[250px] hidden laptopL:block -mt-[120px]"
        />
      </div>
    </div>
  );
}
