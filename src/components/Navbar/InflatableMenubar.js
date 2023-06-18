import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import hamburger from "../../assets/TFR/Hamburger.png";
import booknow from "../../assets/TFR/button BOOK NOW-W BG.png";
import routes from "../../constants/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../fonts/inflatablefont.css";

export default function InflatableMenubar({scroll}) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.record);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav
        className="bg-[#20422b] py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex items-center justify-center">
            <div className="flex w-full justify-center place-items-center">
              {!isOpen && (
                <div className="flex-shrink-0">
                  <img
                    className=" object-contain my-[10px] sm:block md:hidden "
                    src={'https://static.wixstatic.com/media/00f21d_bba67265765849c3867d51a51374dd9b~mv2.png/v1/fill/w_233,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_bba67265765849c3867d51a51374dd9b~mv2.png'}
                    alt="Workflow"
                  />
                  <div className="flex flex-row justify-center items-center">
                    <img
                      className=" object-contain w-44 md:block hidden"
                      src={'https://static.wixstatic.com/media/00f21d_bba67265765849c3867d51a51374dd9b~mv2.png/v1/fill/w_233,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_bba67265765849c3867d51a51374dd9b~mv2.png'}
                      alt="Workflow"
                    />
                  </div>
                </div>
              )}
              <div className="hidden md:block pl-6 text-[#ebacb3]">
                <div className="flex items-center gap-5">
                  <div
                    onClick={scroll}
                    className="text-center cursor-pointer rounded-md text-xs font-bold"
                  >
                    DAY TOUR ATTRACTIONS 
                  </div>
                  <div
                    className="text-center rounded-md text-xs font-bold"
                  >
                    HOTELS
                    </div>
                  <div
                    className="text-center  rounded-md text-xs font-bold"
                  >
                    MENU
                    </div>
                  <div
                    className="text-center  rounded-md text-xs font-bold"
                  >
                    MEDIA
                    </div>
                  <div
                    className="text-center  rounded-md text-xs font-bold"
                  >
                    PACKAGES
                    </div>
                  <div
                    className="text-center rounded-md text-xs font-bold"
                  >
                    FAQS
                  </div>
                  <Link
                    // to={user ? routes.BookingGootopia : routes.Login}
                    to={routes.BookingInflatable}
                    className="ml-4 text-center rounded-md text-xs font-bold hover:bg-transparent px-6 py-1 bg-[#ebacb3] rounded-sm"
                  >
                    <div className="font-inflatable text-white text-4xl">Book Now</div>
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
            <div
              className="text-center rounded-md text-xs font-bold"
            >
              DAY TOUR ATTRACTIONS 
            </div>
            <div
              className="text-center  rounded-md text-xs font-bold"
            >
              HOTELS
              </div>
            <div
              className="text-center  rounded-md text-xs font-bold"
            >
              MENU
              </div>
            <div
              className="text-center  rounded-md text-xs font-bold"
            >
              MEDIA
              </div>
            <div
              className="text-center  rounded-md text-xs font-bold"
            >
              PACKAGES
              </div>
            <div
              className="text-center  rounded-md text-xs font-bold"
            >
              FAQS
            </div>
            <Link
              // to={user ? routes.BookingGootopia : routes.Login}
              to={routes.BookingInflatable}
              className="ml-4 text-center rounded-md text-xs font-bold hover:bg-transparent px-6 py-1 bg-[#ebacb3] rounded-sm"
            >
              <div className="font-inflatable text-white text-4xl">Book Now</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
