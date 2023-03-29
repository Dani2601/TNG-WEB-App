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

export default function LandingPage() {
  return (
    <div>
      <div className="max-h-full min-h-screen bg-gootopia-purp">
        <img class="w-full " src={gootopialanding} alt="gootopialanding" />

        <div className="flex flex-col  mx-auto mt-10  mb-10">
          <div className="self-center">
            <img
              className=" w-[360px] h-[42px] sm:w-[600px] sm:h-[70px] sm:md"
              src={WeirdandWonderful}
              alt="WeirdandWonderful"
            />
          </div>
          <div className="self-center text-center font-bold text-[#F8E17C]">
            Are you ready to take on a bewildering adventure? Enter Gootopia at
            your risk - this world is full of mischief and mayhem. You will be
            sentenced to get slimed! The only wait to escape unscathed is to
            take art in the Great Gootopia Games and get the best possible
            score. If you complete our challenges, you can choose not to get
            slimed (or get slimed anyway) and receive our most prized reward -
            your own Slime Kit custom made with our Slime Lab!{" "}
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <div className="md:flex md:flex-row">
            <div className="sm:flex sm:flex-row">
              <div className="self-center">
                <img
                  className=""
                  src={balloonblaster}
                  alt="WeirdandWonderful"
                />
              </div>
              <div className="self-center">
                <img className="" src={bowling} alt="WeirdandWonderful" />
              </div>
            </div>

            <div className="sm:flex sm:flex-row">
              <div className="self-center">
                <img className="" src={slimetower} alt="WeirdandWonderful" />
              </div>
              <div className="self-center">
                <img
                  className="bg-[#57B42D]"
                  src={fog}
                  alt="WeirdandWonderful"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F8E71C] mt-10">
          <div className="flex flex-row justify-center">
            <div>
              {" "}
              <img className="" src={pipeleft} alt="WeirdandWonderful" />
            </div>
            <div className="text-[#FF5141] font-flavors mx-3 -rotate-12 self-center sm:text-[32px] sm:md">
              An Attraction Unlike <br />
              Anywhere You've Been
            </div>
            <div>
              {" "}
              <img className="" src={piperight} alt="WeirdandWonderful" />
            </div>
          </div>
          <div>
            <div className=" flex flex-col justify-center font-poppins gap-5 mt-10">
              <div className="text-[#1427B8] font-light text-center self-center ">
                This slime carnival will test both your physical and mental
                limits! One thing’s for sure though, <br /> this Instagrammable
                Fun House is an attraction unlike anywhere you’ve been!
              </div>
              <div className="text-white font-bold bg-[#B45AD3] text-center self-center px-2 ">
                PLEASE READ: AGE RESTRICTIONS
              </div>
              <div className="text-[#1427B8] font-light text-center self-center">
                12 years old and below must be accompanied by a fully vaccinated
                paying adult <br /> at all times.
              </div>
              <div className="text-white font-bold bg-[#B45AD3] text-center self-center px-2 mx-10">
                PLEASE READ: HEIGHT RESTRICTIONS
              </div>
              <div className="text-[#1427B8] font-light text-center self-center">
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
                <span className="font-bold text-black">
                  {" "}
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
                
                <span className="font-bold text-black">
                  {" "}
                  Not playable for kids below 3.5 feet:
                </span>  <br />
                Boom Boxer <br />
                Goolectic Challenge
                <br />
                Slime Tower
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
