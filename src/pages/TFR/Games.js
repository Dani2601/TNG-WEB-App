import React, { useEffect, useState } from "react";

import gamess from "../../assets/TFR/WEBSITE-BG-Artboard2.jpg";
import gamesLettering from "../../assets/TFR/GAMES.png";

import games1 from "../../assets/TFR/MADLANES-ICON.png";
import games2 from "../../assets/TFR/DRUNKEN PINBALL ICON.png";
import games3 from "../../assets/TFR/BOOM BATTLE SHOTS ICON.png";
import games4 from "../../assets/TFR/CRAZY GOLF ICON.png";
import games5 from "../../assets/TFR/THE  THROW ICON.png";
import games6 from "../../assets/TFR/BATTING CAGE ICON.png";
import games7 from "../../assets/TFR/EXTREME BASKETBALL ICON.png";
import games8 from "../../assets/TFR/STAR BLASTER ICON.png";
import games9 from "../../assets/TFR/RING THE BELL ICON.png";
import booknow from "../../assets/TFR/button BOOK NOW GAMES.png";
import { getTicketGootopia } from "../../functions/Tickets";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

export default function Games() {
  const { user } = useSelector((state) => state.record);

  const [showModal, setShowModal] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTicketGootopia(
      "",
      process.env.REACT_APP_TFR_KEY,
      process.env.REACT_APP_TFR_POBLACION_KEY
    )
      .then((response) => {
        if (response.valid) {
          setTickets(response.data);
        } else {
        }
      })
      .catch();
  }, [user]);

  console.log("tickets", tickets);
  return (
    <div className="" id="games">
      <div
        style={{
          backgroundImage: `url(${gamess})`,
        }}
        className={`object-none h-full w-full  opacity-80`}
      >
        <div className="flex flex-row justify-center">
          <div className=" py-5  tablet:py-10">
            <img
              src={gamesLettering}
              alt={"games"}
              className="w-[200px] tablet:w-[350px]"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center laptop:mx-[20%] pb-5 tablet:pb-10">
          {tickets.map((item) => (
            <Link
              className="cursor-pointer hoverEffects"
              to={user ? routes.BookingTFR : routes.Login}
            >
              {" "}
              <div
                key={item.id}
                className="relative w-[150px] tablet:w-[260px] mx-4 my-4"
              >
                <img
                  src={item.Image}
                  alt="tfr"
                  className="relative w-full h-auto"
                />
                <div className="h-[20px] tablet:h-[30px] z-10 absolute inset-x-0 bottom-4 tablet:bottom-6 flex items-center justify-center">
                  <div className="  bg-white text-tfr-pink text-[15px] tablet:text-[25px] py-1 px-4 tablet:py-2 tablet:px-8 rounded-sm tablet:rounded-lg font-poppins font-bold hover:bg-tfr-pink hover:text-white">
                    {" "}
                    Book Now{" "}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <img
        src={games}
        alt={"games"}
        className=" object-none w-screen h-[850px] laptop:h-[1000px] laptop4k:h-[1000px] bg-black"
      />
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>

      <img
        src={gamesLettering}
        alt={"games"}
        className="absolute w-[150px] tablet:w-[300px]"
      /> */}

        {/* <img
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
      /> */}
      </div>
    </div>
  );
}
