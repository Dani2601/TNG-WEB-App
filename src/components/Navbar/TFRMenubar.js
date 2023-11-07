import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { desertlogo, tdmnav } from "../../assets/Dessert";
import close from "../../assets/Gootopia/closebutton.png";
import hamburger from "../../assets/TFR/Hamburger.png";
import TFRMain from "../../assets/TFR/TFR-Main Logo.png";
import TFRMobile from "../../assets/TFR/TFR-Website Icon.png";
import booknow from "../../assets/TFR/button BOOK NOW-W BG.png";
import dripping from "../../assets/Gootopia/slimedripping.png";
import routes from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../fonts/font.css";

export default function TFRMenubar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.record);
  const location = useLocation(); // Get the current location

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-black " style={{ fontFamily: "Nulshock, sans-serif" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="flex w-full justify-start items-center">
              {!isOpen && (
                <div className="flex-shrink-0">
                  <img
                    className=" object-fit my-[10px] sm:block md:hidden  h-[32.5px]"
                    src={TFRMobile}
                    alt="Workflow"
                  />
                  <div className="flex flex-row justify-center items-center">
                    <img
                      className=" object-fit h-[82.5px] md:block hidden"
                      src={TFRMain}
                      alt="Workflow"
                    />
                    <div class="h-[40px] ml-10 bg-white w-[2px] mr-[3px] md:block hidden"></div>
                  </div>
                </div>
              )}
              <div className="hidden w-full md:block text-tfr-pink">
                <div className="flex items-center justify-around">
                  <a
                    href="#games"
                    // to={routes.LandingGootopia}
                    className="text-center  rounded-md text-sm font-medium"
                  >
                    GAMES
                  </a>
                  <a
                    href="#games" // to={routes.ObstaclesGootopia}
                    className="text-center  rounded-md text-sm font-medium"
                  >
                    EVENTS
                  </a>
                  <a
                    href="#booze" // to={routes.PackagesGootopia}
                    className="text-center  rounded-md text-sm font-medium"
                  >
                    MENU
                  </a>
                  <a
                    href="#games" // to={routes.FaqsGootopia}
                    className="text-center  rounded-md text-sm font-medium"
                  >
                    BOOK A TABLE
                  </a>
                  <a
                    // to={routes.ContactsGootopia}
                    href="#funroof"
                    className="text-center  rounded-md text-sm font-medium"
                  >
                    CONTACT
                  </a>
                  <Link
                    to={routes.BookingTFR}
                    // href="#games"
                    className="text-center  rounded-md text-sm font-medium"
                  >
                    <img src={booknow} className="h-[37.63px] " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} type="button" aria-expanded="false">
                {!isOpen ? (
                  <img className="" src={hamburger} alt="Workflow" />
                ) : (
                  <MdClose className="mt-5 text-tfr-yellow" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } md:hidden w-full h-screen z-50 text-tfr-pink`}
        >
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a
              href="#games"
              // to={routes.LandingGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              GAMES
            </a>
            <a
              href="#games" // to={routes.ObstaclesGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              EVENTS
            </a>
            <a
              href="#booze" // to={routes.PackagesGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              MENU
            </a>
            <a
              href="#games" // to={routes.FaqsGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              BOOK A TABLE
            </a>
            <a
              // to={routes.ContactsGootopia}
              href="#funroof"
              className="block px-3 py-2 w-full text-left text-base"
            >
              CONTACT
            </a>
            <Link
              to={routes.BookingTFR}
              className="block px-3 py-2 w-full text-left text-base"
            >
              <img src={booknow} className="h-[37.63px] " />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
