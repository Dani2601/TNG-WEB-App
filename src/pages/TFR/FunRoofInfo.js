import React from "react";
import section2 from "../../assets/TFR/ABOUT BG TRIMMED.png";
import section2b from "../../assets/TFR/THE FUN ROOF-WHITE.png";

export default function FunRoofInfo() {
  return (
    <div className="relative" id="funroof">
      <img src={section2} alt="2ndSection" />

      <div className="flex flex-col text-white tfrLettering text-[14px] mx-10 items-center ">
        <div className="flex flex-row justify-around items-center">
          <div className="tablet:w-[50%] tablet:block hidden "> </div>
          <div className="tablet:w-[50%] w-[100%]">
            <div className="text-center laptop:text-[20px] font-bold laptop4K:text-[70px]">
              WHAT IS
            </div>
            <img
              src={section2b}
              alt="tfrLettering"
              className="mt-2 h-auto w-[200px] mx-auto tablet:w-[240px] laptop:w-[360px] laptopL:w-[480px] laptop4k:w-[600px]"
            />
            <div className=" text-center mt-2 mobileL:hidden tracking-wide">
              Step into The Fun Roof, an electrifying escape in the heart of
              Poblacion, Manila...
            </div>
            <div className=" text-center mt-2 hidden tablet:hidden mobileL:block tracking-wide">
              Step into The Fun Roof, an electrifying escape in the heart of
              Poblacion, Manila. With vibrant neon lights and retro vibes,
              indulge in games like billiards, indoor golf, and pinball while
              enjoying a wide selection of delicious...
            </div>

            <div className=" text-center mt-4 hidden tablet:block tracking-wide laptop:text-[20px] laptop4K:text-[100px]">
              Step into The Fun Roof, an electrifying escape in the heart of
              Poblacion, Manila. With vibrant neon lights and retro vibes,
              indulge in games like billiards, indoor golf, and pinball while
              enjoying a wide selection of delicious food and drinks. Get ready
              for a thrilling experience where nostalgia meets excitement at The
              Fun Room.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
