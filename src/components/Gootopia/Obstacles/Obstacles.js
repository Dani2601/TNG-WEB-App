import React from "react";
import dripping from "../../../assets/Gootopia/Obstacles/SlimeDown.png";
import WeirdandWonderfulping from "../../../assets/Gootopia/Obstacles/WeirdAndWonderful.png";
import ObstaclesDrip from "../../../assets/Gootopia/Obstacles/Obstacles.png";

import seventh from "../../../assets/Gootopia/Obstacles/Boom Boxer.png";
import second from "../../../assets/Gootopia/Obstacles/Balloon Blaster.png";
import fifth from "../../../assets/Gootopia/Obstacles/Goo Catcher.png";
import sixth from "../../../assets/Gootopia/Obstacles/Goonado.png";
import eigth from "../../../assets/Gootopia/Obstacles/Gozooka.png";
import first from "../../../assets/Gootopia/Obstacles/Human Bowling Ball.png";
import fourth from "../../../assets/Gootopia/Obstacles/Slime Face.png";
import ninth from "../../../assets/Gootopia/Obstacles/Slime Show.png";
import third from "../../../assets/Gootopia/Obstacles/Slime Tower Challenge.png";

import GootopiaContainer from "../../Container/GootopiaContainter";

export default function Obstacles() {
  return (
    <GootopiaContainer>
      <div>
        <div className="max-h-full min-h-screen bg-gootopia-purp ">
          <img class="w-full" src={dripping} alt="gootopialanding" />
          <div className="flex flex-row justify-center">
            <span className="font-flavors text-gootopia-pinkText text-[30px] tablet:text-[50px] tablet:laptop:LaptopL:Laptop4k">
              OBSTACLES
            </span>
          </div>

          <div className="flex flex-row justify-center py-5">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="tablet:flex tablet:flex-row tablet:justify-center tablet:gap-5">
                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={first}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Human Bowling Ball
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={second}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Balloon Blaster
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={third}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Balloon Blaster
                  </div>
                </div>
              </div>

              <div className="tablet:flex tablet:flex-row tablet:justify-center tablet:gap-5 tablet:mt-4">
                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={fourth}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Slime Tower Challenge
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={fifth}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Goo Catcher
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={sixth}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Goonado
                  </div>
                </div>
              </div>

              <div className="tablet:flex tablet:flex-row tablet:justify-center tablet:gap-5 tablet:mt-4">
                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={seventh}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Boom Boxer
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={eigth}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Gozooka
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      class="h-[285px] tablet:h-[308px]  "
                      src={ninth}
                      alt="gootopialanding"
                    />
                  </div>
                  <div className="text-center font-poppins mt-2 tablet:text-[20px]">
                    Slime Show
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            class="w-full rotate-180"
            src={dripping}
            alt="gootopialanding "
          />
        </div>
      </div>
    </GootopiaContainer>
  );
}
