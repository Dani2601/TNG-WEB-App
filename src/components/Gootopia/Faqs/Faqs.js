import React from "react";
import GootopiaContainer from "../../Container/GootopiaContainter";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import abouts from "../../../assets/Gootopia/FAQ's/about.png";
import { Accordion } from "../Accordion/Accordion";
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
export default function Faqs() {
  return (
    <GootopiaContainer>
      <div className="max-h-full min-h-screen bg-gootopia-purp ">
        <img class="w-full" src={dripping} alt="gootopialanding" />
        <div className="flex flex-row justify-center">
          <span className="font-flavors text-gootopia-pinkText text-[23px]  tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k my-8">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>
        <div className="flex justify-center py-4 lg:py-12 font-quicksand">
          <div className="w-[90vw] lg:w-[70vw]">
            <div>
              <Accordion title="How does Gootopia work? What is included in my entrance?">
                <span className="text-gootopia-green  text-[14px] laptop:text-[16px]">
                  Our Entrance ticket gives you
                  <ul className="list-disc ml-5">
                    <li>
                      {" "}
                      Access to a one (1) time play to quirky obstacles found
                      inside such as Ballon Blaster, Slime Spy (laser activity),
                      Slime Tower and more! You can purchase additional game
                      credits if you want to play some more.
                    </li>
                    <li>
                      Custom made Slime Kit from our Slime Lab when you beat our
                      quirky obstacle scores.
                    </li>
                    <li>
                      If you're unlucky (or lucky), you will also be blasted
                      with Slime from our group sliming experience called
                      GOOZOOKA. A private sliming experience with a free I GOT
                      SLIMED shirt is also available for purchase.
                    </li>
                  </ul>
                </span>
              </Accordion>

              <Accordion title="Age and Height Restrictions? Guardian requirement?">
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight">
                  READ: AGE RESTRICTIONS <br />
                  12 years old and below must be accompanied by a fully
                  vaccinated paying adult at all times.
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  PLEASE READ: HEIGHT RESTRICTIONS <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  ​ 3.5 feet and above - paying guest , and will be given the
                  Gootopia Scorecard in order to play all games and claim our
                  slime kit
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  ​ 3.4 feet and below - Free of Charge (FOC) but with paying
                  adult (guardian) is required. No score card and no slime kit
                  will be given for the FOC). However, FOC can play their
                  guardians' games if the guardian assists the kids and can
                  claim the slime kit on behalf of their guardian.
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Playable for kids 3.5 feet and below with guardian assistance:{" "}
                  <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Slime face <br /> Goonado <br />
                  Goo Catcher <br />
                  Slime Spy <br />
                  Goozooka <br />
                  Balloon Blaster (4 yo may need assistance depending on height){" "}
                  <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Not playable for kids below 3.5 feet: <br />
                  Boom Boxer <br />
                  Goolectic Challenge <br /> Slime Tower <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Thank you and hope we can see you soon!
                </p>
              </Accordion>

              <Accordion title="What's your Covid-19 Guidelines? Ages allowed?">
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight">
                  What's your Covid-19 Guidelines? Ages allowed? As per the
                  latest IATF Guidelines, GUESTS OF ALL AGES ARE NOW ALLOWED!
                  Adults (18 yo and above) must be FULLY VAXXED and kids (12
                  years old and below) should be accompanied by a fully vaxxed
                  adult. We require masks at all times. Areas for sanitation has
                  been provided all throughout the playground. We can only
                  accommodate a limited number of pax per day. Booking in
                  advance at book.gootopia.com is highly encouraged. Please
                  bring your VACCINATION cards.{" "}
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  PLEASE READ: AGE RESTRICTIONS
                  <br /> 12 years old and below must be accompanied by a fully
                  vaccinated paying adult at all times.{" "}
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  PLEASE READ: HEIGHT RESTRICTIONS{" "}
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  3.5 feet and above - paying guest , and will be given the
                  Gootopia Scorecard in order to play all games and claim our
                  slime kit{" "}
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  3.4 feet and below - Free of Charge (FOC) but with paying
                  adult (guardian) is required. No score card and no slime kit
                  will be given for the FOC). However, FOC can play their
                  guardians' games if the guardian assists the kids and can
                  claim the slime kit on behalf of their guardian.
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Playable for kids 3.5 feet and below with guardian assistance:{" "}
                  <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Slime face <br /> Goonado <br />
                  Goo Catcher <br />
                  Slime Spy <br />
                  Goozooka <br />
                  Balloon Blaster (4 yo may need assistance depending on height){" "}
                  <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Not playable for kids below 3.5 feet: <br />
                  Boom Boxer <br />
                  Goolectic Challenge <br /> Slime Tower <br />
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Thank you and hope we can see you soon!
                </p>
              </Accordion>

              <Accordion title="Are we going to get slimed for real? Or are we going to wear a coat/PPE?">
                <span className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  Yes, you're going to wear our fully covered protected suit
                  with full face cover to minimize the slime blast. The most
                  you'll be able to get dirty is with your hands. Getting slimed
                  is a totally optional experience too!
                </span>
              </Accordion>

              <Accordion title="How to book?">
                <span className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  You can book your tickets here at book.gootopia.com
                </span>
              </Accordion>

              <Accordion title="What are the modes of payment available?">
                <span className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  You can via PAYPAL or Credit Card (using paypal, even if you
                  don’t have a PayPal account - no need to sign up), or
                  PAYNAMICS which allows BPI, BDO (online banking and over the
                  counter), LBC, Cebuana and etcetera!
                </span>
              </Accordion>

              <Accordion title="CANCELLATIONS AND CHANGING OR MOVING THE BOOKING">
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight ">
                  LATE GOERS will be charged a rescheduling fee of PHP100 per
                  person and will only be accommodated upon slot availability.
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  NO SHOWS can be rescheduled up to three (3) days after the
                  guest/s booked date, since LATE RESCHEDULING FEE CAN ONLY BE
                  DONE ONCE, and that will be subjected to a PHP 200
                  RESCHEDULING FEE for slot availability. Attempts to reschedule
                  after seven (7) days of your scheduled date are not permitted
                  and will be forfeited. All tickets are non-refundable.
                </p>
              </Accordion>

              <Accordion title="Playground Layout and Changes">
                <span className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight">
                  We will make every effort to guarantee that as many game
                  stations as possible are available for usage. However, we
                  reserve the right, without prior notice, that some attractions
                  may also be up for maintenance which would not be grounds for
                  refunds.
                </span>
              </Accordion>

              <Accordion title="How long would it take to explore Gootopia?">
                <span className="text-sm text-gootopia-green ">
                  We have 1 hour for each slot, but it can be faster depending
                  on your pace and the crowd. You can also choose to play the
                  games again for an additional fee.
                </span>
              </Accordion>

              <Accordion title="Where exactly is Gootopia located?">
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight ">
                  We are located at the 3rd floor of SM Mall of Asia, near its
                  Ice Skating Rink.{" "}
                </p>
                <p className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight mt-2">
                  WAZE/GRAB: SM Mall of Asia, Pasay City, Philippines (Pacific
                  Drive Entrance)
                </p>
              </Accordion>

              <Accordion title="Are pets allowed?">
                <span className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight  ">
                  Unfortunately, no pets allowed due to the messy nature of our
                  games.
                </span>
              </Accordion>

              <Accordion title="I have allergies. Would I still be able to enjoy the games?">
                <span className="text-gootopia-green text-[14px] laptop:text-[16px] leading-tight   ">
                  Please notify us about any allergies you may have when filling
                  out our waiver form. Our staff will advise you on how to be
                  safe during this amazing experience! We primarily use food
                  color, flour and milk for our mixtures.
                </span>
              </Accordion>
              <hr class="h-px bg-[#E677AA] border-0"></hr>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <img
            class="laptop:w-[800px] w-[300px] tablet:w-[600px]"
            src={abouts}
            alt="gootopialanding "
          />
        </div>
        <img class="w-full rotate-180 " src={dripping} alt="gootopialanding " />
      </div>
    </GootopiaContainer>
  );
}
