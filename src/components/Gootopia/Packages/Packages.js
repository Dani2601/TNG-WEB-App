import React from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import WeirdandWonderfulping from "../../../assets/Gootopia/Obstacles/WeirdAndWonderful.png";
import ObstaclesDrip from "../../../assets/Gootopia/Obstacles/Obstacles.png";

import seventh from "../../../assets/Gootopia/Packages&Activities/Ironman.png";
import second from "../../../assets/Gootopia/Packages&Activities/BdayParty.png";
import fifth from "../../../assets/Gootopia/Packages&Activities/GenderReveal.png";
import sixth from "../../../assets/Gootopia/Packages&Activities/BookNow.png";
import eight from "../../../assets/Gootopia/Packages&Activities/hammer.png";
import first from "../../../assets/Gootopia/Packages&Activities/Photoshoot.png";
import fourth from "../../../assets/Gootopia/Packages&Activities/GroupTour.png";
import ninth from "../../../assets/Gootopia/Packages&Activities/arcade.png";
import tenth from "../../../assets/Gootopia/Packages&Activities/trophy.png";
import eleventh from "../../../assets/Gootopia/Packages&Activities/paint.png";
import twelvth from "../../../assets/Gootopia/Packages&Activities/shop.png";

import third from "../../../assets/Gootopia/Packages&Activities/TeamBuilding.png";

import GootopiaContainer from "../../Container/GootopiaContainter";

export default function Packages() {
  return (
    <GootopiaContainer>
      <div>
        <div className="max-h-full min-h-screen bg-gootopia-purp ">
          <img class="w-full" src={dripping} alt="gootopialanding" />
          <div className="flex flex-row justify-center">
            <span className="font-flavors text-gootopia-pinkText text-[30px] tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k">
              PACKAGES
            </span>
          </div>

          <div className="flex flex-row justify-center py-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="tablet:flex tablet:flex-row tablet:gap-5 ">
                <div>
                  <img
                    class="h-[285px] tablet:h-[308px] mb-5"
                    src={first}
                    alt="gootopialanding"
                  />
                </div>
                <div>
                  <img
                    class="h-[285px] tablet:h-[308px] mb-5"
                    src={second}
                    alt="gootopialanding"
                  />
                </div>
                <div>
                  <img
                    class="h-[285px] tablet:h-[308px] mb-5"
                    src={third}
                    alt="gootopialanding"
                  />
                </div>
              </div>

              <div className="tablet:flex tablet:flex-row tablet:gap-5">
                <div>
                  <img
                    class="h-[285px] tablet:h-[308px] mb-5"
                    src={fourth}
                    alt="gootopialanding"
                  />
                </div>

                <div>
                  <img
                    class="h-[285px] tablet:h-[308px] mb-5"
                    src={fifth}
                    alt="gootopialanding"
                  />
                </div>
              </div>
              <div className="pt-10">
                <img
                  class="h-[198px] tablet:h-[250px] mb-5"
                  src={sixth}
                  alt="gootopialanding"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  py-5  text-gootopia-yellowText font-poppins ">
            <div className="flex flex-row justify-evenly items-start">
              <div className="text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px] ">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2 mx-auto "
                    src={seventh}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Cosplay</div>
                <div className="text-center">
                  Perfect time for your own costume party! You are after all
                  entering a weird and wonderful world!
                </div>
              </div>

              <div className="text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px] ">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={eight}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Slime Sentence</div>
                <div className="text-center">
                  You and your guests can get sentenced to get slimed (the most
                  fun experience for everyone!) The only way to get out is to
                  beat the game our challenges!
                </div>
              </div>

              <div className="hidden laptop:block text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={ninth}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">
                  Gaming Stations
                </div>
                <div className="text-center">
                  There will be unique and fun game stations scattered
                  throughout this fun house. Your guests are sure to test both
                  their mental and physical limits!
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly items-start mt-10">
              <div className="laptop:hidden text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={ninth}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">
                  Gaming Stations
                </div>
                <div className="text-center">
                  There will be unique and fun game stations scattered
                  throughout this fun house. Your guests are sure to test both
                  their mental and physical limits!
                </div>
              </div>

              <div className="hidden laptop:block text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={tenth}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Award Stage</div>
                <div className="text-center">
                  The Winner of the Great Games of Gootopia will always have a
                  great reward, but of course, we'll always have something
                  special for the celebrant!
                </div>
              </div>

              <div className="hidden laptop:block text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={eleventh}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Slime Kit</div>
                <div className="text-center">
                  Create your own slime concoction with our expansive Slime Lab!
                </div>
              </div>

              <div className="text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={twelvth}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Vendors Booth</div>
                <div className="text-center">
                  Photos/videos from our resident photographer and set up your
                  own food/drink stations for the ultimate party set-up!
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-evenly items-start mt-10">
              <div className="laptop:hidden text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={eleventh}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Slime Kit</div>
                <div className="text-center">
                  Create your own slime concoction with our expansive Slime Lab!
                </div>
              </div>
              <div className="laptop:hidden text-[14px]  max-w-[130px] mobileM:max-w-[150px] mobileL:max-w-[180px] tablet:max-w-[364px] laptop:max-w-[311px]">
                <div>
                  <img
                    class="h-[80px] laptop:h-[110px]  mb-2  mx-auto"
                    src={twelvth}
                    alt="gootopialanding"
                  />
                </div>
                <div className="text-center mb-1 font-bold">Vendors Booth</div>
                <div className="text-center">
                  Photos/videos from our resident photographer and set up your
                  own food/drink stations for the ultimate party set-up!
                </div>
              </div>
            </div>
          </div>

          <img
            class="w-full rotate-180 "
            src={dripping}
            alt="gootopialanding "
          />
        </div>
      </div>
    </GootopiaContainer>
  );
}
