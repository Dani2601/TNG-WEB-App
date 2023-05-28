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
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../assets/TFR/BANNER-MAIN.jpg";
import banner2 from "../../../assets/TFR/Home.png";

import section2 from "../../../assets/TFR/ABOUT BG TRIMMED.png";
import section2b from "../../../assets/TFR/THE FUN ROOF-WHITE.png";

import Booze from "../../../assets/TFR/BOOZE.png";
import Eats from "../../../assets/TFR/EATS.png";

import yellow from "../../../assets/TFR/WEBSITE-BG-Artboard 1.jpg";
import games from "../../../assets/TFR/WEBSITE-BG-Artboard 2.jpg";
import gamesLettering from "../../../assets/TFR/GAMES.png";

import games1 from "../../../assets/TFR/MADLANES-ICON.png";
import games2 from "../../../assets/TFR/DRUNKEN PINBALL ICON.png";
import games3 from "../../../assets/TFR/BOOM BATTLE SHOTS ICON.png";
import games4 from "../../../assets/TFR/CRAZY GOLF ICON.png";
import games5 from "../../../assets/TFR/THE  THROW ICON.png";
import games6 from "../../../assets/TFR/BATTING CAGE ICON.png";
import games7 from "../../../assets/TFR/EXTREME BASKETBALL ICON.png";
import games8 from "../../../assets/TFR/STAR BLASTER ICON.png";
import games9 from "../../../assets/TFR/RING THE BELL ICON.png";
import booknow from "../../../assets/TFR/button BOOK NOW GAMES.png";

import events from "../../../assets/TFR/EVENTS BANNER.png";
import findushere from "../../../assets/TFR/FindUSHERE.png";
import buttonfindushere from "../../../assets/TFR/GetDirections.png";
import violetbg from "../../../assets/TFR/WEBSITE-BG-Artboard 5.jpg";
import booknow2 from "../../../assets/TFR/button BOOK NOW-W BG.png";

export default function LandingPage() {
  const carouselData = [
    {
      id: 1,
      imageSrc: banner1,
    },
  ];

  const carouselDatab = [
    {
      id: 1,
      imageSrc: banner2,
    },
  ];
  const { user } = useSelector((state) => state.record);

  const PrevArrow = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      <MdArrowBackIos color="black" />
    </button>
  );

  const NextArrow = (props) => (
    <button {...props} className="slick-arrow slick-next">
      <MdArrowForwardIos color="black" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div>
      {/* Carousel */}
      <Slider {...settings} className="-mb-2">
        {carouselData.map((item) => (
          <div key={item.id} className="w-screen">
            <img src={item.imageSrc} alt={item.id} className="w-screen" />
          </div>
        ))}
      </Slider>

      {/* 2nd Section */}
      <div className="relative ">
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
                Step into The Fun Room, an electrifying escape in the heart of
                Poblacion, Manila...
              </div>
              <div className=" text-center mt-2 hidden tablet:hidden mobileL:block tracking-wide">
                Step into The Fun Room, an electrifying escape in the heart of
                Poblacion, Manila. With vibrant neon lights and retro vibes,
                indulge in games like billiards, indoor golf, and pinball while
                enjoying a wide selection of delicious...
              </div>

              <div className=" text-center mt-4 hidden tablet:block tracking-wide laptop:text-[20px] laptop4K:text-[100px]">
                Step into The Fun Room, an electrifying escape in the heart of
                Poblacion, Manila. With vibrant neon lights and retro vibes,
                indulge in games like billiards, indoor golf, and pinball while
                enjoying a wide selection of delicious food and drinks. Get
                ready for a thrilling experience where nostalgia meets
                excitement at The Fun Room.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="flex flex-col tablet:flex-row">
        <div className="relative flex justify-center">
          <img src={Eats} alt={"eats"} />
          <button className="absolute bottom-5 bg-black w-[120px] h-[40px]">
            <div className="text-tfr-yellow">EATS </div>
          </button>
        </div>
        <div className="relative flex justify-center">
          <img src={Booze} alt={"eats"} />
          <button className="absolute bottom-5 bg-black w-[120px] h-[40px] ">
            <div className="text-tfr-yellow">BOOZE </div>
          </button>
        </div>
      </div>

      {/* 4th  Section */}
      <Slider {...settings} className="-mb-2">
        {carouselDatab.map((item) => (
          <div key={item.id} className="w-screen">
            <img src={item.imageSrc} alt={item.id} className="w-screen" />
          </div>
        ))}
      </Slider>
      <div>
        <img src={yellow} alt={"yellow"} className="h-[10px] w-screen " />
      </div>

      {/* 5th Section */}
      <div className="">
        <div className="relative flex flex-row justify-center">
          <img
            src={games}
            alt={"games"}
            className=" object-none w-screen h-[850px] laptop:h-[1000px] laptop4k:h-[1000px] bg-black"
          />
          <div className="absolute inset-0 bg-gray-500 opacity-50"></div>

          <img
            src={gamesLettering}
            alt={"games"}
            className="absolute w-[150px] tablet:w-[300px]"
          />

          <img
            src={games1}
            alt={"games1"}
            className="absolute top-[45px] left-2 w-[150px] mobileM:left-8 mobileL:left-[50px]  tablet:left-[10px] tablet:top-[85px] tablet:w-[230px] laptop:left-[10px] laptop:top-[85px] laptop:w-[300px] laptopL:left-[215px] laptop4k:left-[715px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[150px] left-8 w-[100px] mobileM:left-[60px] mobileL:left-[78px] tablet:left-[50px] tablet:top-[245px] tablet:w-[150px] laptop:left-[80px] laptop:top-[305px] laptop:w-[150px] laptopL:left-[290px] laptop4k:left-[790px]"
          />

          <img
            src={games2}
            alt={"games2"}
            className="absolute mobileS:top-[45px] mobileS:right-2 mobileS:w-[150px] mobileM:right-8 mobileL:right-[50px] tablet:right-auto  tablet:top-[85px] tablet:w-[230px] laptop:right-auto  laptop:top-[85px] laptop:w-[300px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[150px] right-8 w-[100px] mobileM:right-[60px] mobileL:right-[78px] tablet:right-auto tablet:top-[245px] tablet:w-[150px] laptop:right-auto laptop:top-[305px] laptop:w-[150px]"
          />

          <img
            src={games3}
            alt={"games3"}
            className="absolute top-[200px] left-2 w-[150px] mobileM:left-8 mobileL:left-[50px] tablet:right-[12px] tablet:left-[auto] tablet:top-[85px] tablet:w-[230px]  laptop:top-[85px] laptop:w-[300px] laptopL:right-[210px] laptop4k:right-[710px] laptop:left-[auto] "
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[305px] left-8 w-[100px] mobileM:left-[60px] mobileL:left-[78px] tablet:right-[45px]  tablet:left-[auto] tablet:top-[245px] tablet:w-[150px]  laptop:right-[90px]  laptop:left-[auto] laptop:top-[305px] laptop:w-[150px] laptopL:right-[290px] laptop4k:right-[790px]"
          />

          <img
            src={games4}
            alt={"games4"}
            className="absolute mobileS:top-[200px] mobileS:right-2 mobileS:w-[158px] mobileM:right-8 mobileL:right-[50px] tablet:left-[0px] tablet:top-[335px] tablet:w-[240px] laptop:left-[-5px] laptop:top-[395px] laptop:w-[314px] laptopL:left-[200px] laptop4k:left-[700px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute mobileS:top-[305px] mobileS:right-8 w-[100px] mobileM:right-[60px] mobileL:right-[78px] tablet:left-[50px] tablet:top-[490px] tablet:w-[150px] laptop:left-[80px] laptop:top-[610px] laptop:w-[150px] laptopL:left-[290px] laptop4k:left-[790px]"
          />

          <img
            src={games5}
            alt={"games5"}
            className="absolute mobileS:top-[355px] mobileS:left-2 mobileS:w-[150px] mobileM:left-8 mobileL:left-[50px] tablet:left-auto tablet:top-[335px] tablet:w-[230px]  laptop:left-auto laptop:top-[395px] laptop:w-[300px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute mobileS:top-[460px] mobileS:left-8 mobileS:w-[100px] mobileM:left-[60px] mobileL:left-[78px] tablet:left-auto tablet:top-[490px] tablet:w-[150px] laptop:right-auto laptop:top-[610px] laptop:w-[150px]"
          />

          <img
            src={games6}
            alt={"games6"}
            className="absolute top-[355px] right-2 w-[150px] mobileM:right-8 mobileL:right-[50px] tablet:left-[auto] tablet:right-[12px] tablet:top-[335px] tablet:w-[230px] laptop:left-[auto] laptop:right-[12px] laptop:top-[395px] laptop:w-[300px] laptopL:right-[210px] laptop4k:right-[710px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[460px] right-8 w-[100px] mobileM:right-[60px] mobileL:right-[78px] tablet:right-[45px]  tablet:top-[490px] tablet:w-[150px]   laptop:right-[90px]  laptop:left-[auto] laptop:top-[610px] laptop:w-[150px] laptopL:right-[290px] laptop4k:right-[790px]"
          />

          <img
            src={games7}
            alt={"games7"}
            className="absolute top-[510px] left-2 w-[150px] mobileM:left-8 mobileL:left-[50px] tablet:left-[13px] tablet:top-[580px] tablet:w-[230px] laptop:left-[13px] laptop:top-[705px] laptop:w-[300px] laptopL:left-[215px] laptop4k:left-[715px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[615px] left-8 w-[100px] mobileM:left-[60px] mobileL:left-[78px] tablet:left-[50px] tablet:top-[735px] tablet:w-[150px]  laptop:left-[80px] laptop:top-[925px] laptop:w-[150px] laptopL:left-[290px] laptop4k:left-[790px]"
          />

          <img
            src={games8}
            alt={"games8"}
            className="absolute top-[510px] right-2 w-[150px] mobileM:right-8 mobileL:right-[50px]  tablet:right-auto  tablet:top-[580px] tablet:w-[230px] laptop:right-auto  laptop:top-[705px] laptop:w-[300px] "
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[615px] right-8 w-[100px] mobileM:right-[60px] mobileL:right-[78px]  tablet:right-auto tablet:top-[740px] tablet:w-[150px] laptop:right-auto laptop:top-[925px] laptop:w-[150px]"
          />

          <img
            src={games9}
            alt={"games8"}
            className="absolute top-[665px]  w-[150px] tablet:left-[auto] tablet:right-[12px] tablet:top-[580px] tablet:w-[230px] laptop:right-[12px] laptop:top-[705px] laptop:w-[300px] laptopL:right-[210px] laptop4k:right-[710px]"
          />
          <img
            src={booknow}
            alt={"booknow"}
            className="absolute top-[770px]  w-[100px]  tablet:right-[45px]  tablet:left-[auto] tablet:top-[740px] tablet:w-[150px]   laptop:right-[90px]  laptop:left-[auto] laptop:top-[925px] laptop:w-[150px] laptopL:right-[290px] laptop4k:right-[790px]"
          />
        </div>
      </div>

      {/* 6th Section */}
      <div className="flex flex-col relative">
        <img src={findushere} alt={"Events"} className="w-screen" />
        {/* <img
          src={buttonfindushere}
          alt={"Events"}
          className="absolute top-[85px] right-[230px] h-[10px] mobileM:top-[98px] mobileM:right-[280px]
      mobileL:top-[109px] mobileL:right-[325px]
      tablet:top-[195px] tablet:right-[575px] tablet:h-[20px]
      laptop:top-[265px] laptop:right-[747px] laptop:h-[30px]
      laptopL:top-[370px] laptopL:right-[1065px] laptopL:h-[40px]
      laptop4k:top-[660px] laptop4k:right-[1948px] laptop4k:h-[60px]"
        /> */}

        <img
          src={events}
          alt={"Events"}
          className="w-screen -my-2 tablet:-my-4 laptop:-my-9  laptop4k:-my-10"
        />
      </div>

      {/* 7th Section */}
      <div className="flex flex-col bg-tfr-pink  items-center justify-center">
        <img src={booknow2} alt={"Events"} className="h-[30px] my-3 tablet:h-[50px] tablet:my-6 laptopL:h-[80px] laptopL::my-8 " />
      </div>
    </div>
  );
}
