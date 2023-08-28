import React from "react";
import gootopialanding from "../../../assets/Gootopia/gootopialanding.png";
import dripping from "../../../assets/Gootopia/slimedripping.png";
import book1 from "../../../assets/Gootopia/booknow1.png";
import WeirdandWonderful from "../../../assets/Gootopia/WeirdandWonderful.png";
import balloonblaster from "../../../assets/Gootopia/balloonblaster.png";
import bowling from "../../../assets/Gootopia/bowling.png";
import fog from "../../../assets/Gootopia/fog.png";
import slimetower from "../../../assets/Gootopia/slimetower.png";
import piperight from "../../../assets/Gootopia/piperight.png";
import pipeleft from "../../../assets/Gootopia/pipeleft.png";
import { Link } from "react-router-dom";
import routes from "../../../constants/routes";
import { useSelector } from "react-redux";
import { PromoDiscountSection } from "../../../pages/PromoDiscountSection/PromoDiscountSection";
const dessert = process.env.REACT_APP_GOOTOPIA_KEY;

export default function LandingPage() {
  const { user } = useSelector((state) => state.record);
  // console.log("user", user);
  return (
    <div>
      <div className="max-h-full min-h-screen bg-gootopia-purp ">
        <div className="relative">
          {/* <img class="absolute" src={book1} alt="Workplace" width="" /> */}
          <Link
            className="cursor-pointer"
            to={user ? routes.BookingGootopia : routes.Login}
          >
            <img
              class="booknow hoverEffects"
              src={book1}
              alt="Workplace"
              width="600"
            />
          </Link>
        </div>
        <img class="w-full" src={gootopialanding} alt="gootopialanding" />

        <div className="flex flex-col  mx-auto mt-10 mb-10 ">
          <div className="self-center">
            <img
              className="px-5 tablet:w-[600px] tablet:h-[70px] tablet:laptop"
              src={WeirdandWonderful}
              alt="WeirdandWonderful"
            />
          </div>
          <div className="self-center text-center font-bold text-[#F8E17C] px-7 mt-3 text-[10px] tablet:text-[18px]">
            Are you ready to take on a bewildering adventure? Enter Gootopia at
            your risk - this world is full of mischief and mayhem. You will be
            sentenced to get slimed! The only wait to escape unscathed is to
            take art in the Great Gootopia Games and get the best possible
            score. If you complete our challenges, you can choose not to get
            slimed (or get slimed anyway) and receive our most prized reward -
            your own Slime Kit custom made with our Slime Lab!{" "}
          </div>
        </div>

        <div className="flex flex-col mt-10 justify-center ">
          <div className="laptop:flex laptop:flex-row  tablet:mx-2 gap-2">
            <div className="tablet:flex tablet:flex-row  gap-2 justify-center">
              <div className="mb-2">
                <img
                  className="mx-auto"
                  src={balloonblaster}
                  alt="WeirdandWonderful"
                />
              </div>
              <div className="mb-2">
                <img
                  className="mx-auto"
                  src={bowling}
                  alt="WeirdandWonderful"
                />
              </div>
            </div>

            <div className="tablet:flex tablet:flex-row  gap-2 justify-center">
              <div className="mb-2 ">
                <img
                  className="mx-auto"
                  src={slimetower}
                  alt="WeirdandWonderful"
                />
              </div>
              <div className="mb-2">
                <img
                  className="bg-[#57B42D] mx-auto"
                  src={fog}
                  alt="WeirdandWonderful"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-tdm-pink py-10 font-poppins">
          <PromoDiscountSection businessUnitId={dessert} />
        </div>

        <div className="bg-[#F8E71C] pt-10">
          <div className="flex flex-row justify-center">
            <div>
              {" "}
              <img className="" src={pipeleft} alt="WeirdandWonderful" />
            </div>
            <div className="text-[#FF5141] font-flavors mx-3 -rotate-12 self-center tablet:text-[32px] tablet:laptop">
              An Attraction Unlike <br />
              Anywhere You've Been
            </div>
            <div>
              {" "}
              <img className="" src={piperight} alt="WeirdandWonderful" />
            </div>
          </div>
          <div>
            <div className=" flex flex-col justify-center font-poppins gap-5 mt-10 text-[12px] tablet:text-[16px] tablet:laptop:laptopL:laptop4k  ">
              <div className="text-[#1427B8] font-light text-center self-center px-5">
                This slime carnival will test both your physical and mental
                limits! One thing’s for sure though, <br /> this Instagrammable
                Fun House is an attraction unlike anywhere you’ve been!
              </div>
              <div className="text-white font-bold bg-[#B45AD3] text-center self-center px-2 ">
                PLEASE READ: AGE RESTRICTIONS
              </div>
              <div className="text-[#1427B8] font-light text-center self-center px-5">
                12 years old and below must be accompanied by a fully vaccinated
                paying adult <br /> at all times.
              </div>
              <div className="text-white font-bold bg-[#B45AD3] text-center self-center px-2 mx-10">
                PLEASE READ: HEIGHT RESTRICTIONS
              </div>
              <div className="text-[#1427B8] font-light text-center self-center px-5">
                3.5 feet and above - paying guest , and will be given the
                Gootopia Scorecard <br /> in order to play all games and claim
                our slime kit ​<br />
                3.4 feet and below - Free of Charge (FOC) but with paying adult
                (guardian) is <br /> required. No score card and no slime kit
                will be given for the FOC). However, FOC can <br /> play their
                guardians' games if the guardian assists the kids and can claim
                the slime
                <br /> kit on behalf of their guardian.
              </div>

              <div className="text-[#1427B8] font-light text-center self-center">
                <span className="font-bold text-black px-5 text-center">
                  Playable for kids 3.5 feet and below with guardian assistance:
                </span>
                <br />
                Slime face <br />
                Goonado
                <br /> Goo Catcher <br />
                Slime Spy <br />
                Goozooka <br />
                Balloon Blaster (4 yo may need assistance depending on height)
                <br />
                <span className="font-bold text-black px-5">
                  {" "}
                  Not playable for kids below 3.5 feet:
                </span>{" "}
                <br />
                Boom Boxer <br />
                Goolectic Challenge
                <br />
                Slime Tower
              </div>
              <div className="py-10 flex flex-row justify-center">
                <Link
                  className="cursor-pointer"
                  to={user ? routes.BookingGootopia : routes.Login}
                >
                  <img
                    class="w-[140px] tablet:w-[180px] tablet:laptop:laptopL:laptop4k hoverEffects"
                    src={book1}
                    alt="Workplace"
                    width="600"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
