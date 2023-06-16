import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { desertlogo, tdmnav } from "../../assets/Dessert";
import close from "../../assets/Gootopia/closebutton.png";
import hamburger from "../../assets/Gootopia/hamburgericon.png";
import gootopia from "../../assets/Gootopia/gootopiamobile.png";
import dripping from "../../assets/Gootopia/slimedripping.png";
import routes from "../../constants/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { bakebenav } from "../../assets/Dessert";

export default function BakebeMenubar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.record);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav
        className="bg-transparent " 
        style={{ fontFamily: "Gotham-Black, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-[100px]">
            <div className="flex w-full justify-start items-center">
              <div className="hidden w-full md:block">
                <div className=" flex items-center">
                  <Link
                    // to={routes.LandingGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    HOME
                  </Link>
                  <Link
                    // to={routes.ObstaclesGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    HOW TO BOOK
                  </Link>
                  {!isOpen && (
                    <Link
                      // to={routes.ContactsGootopia}
                      className="text-center  text-black rounded-md text-sm font-medium"
                    >
                      <div className="bg-white">
                        <img className="" src={bakebenav} alt="Workflow" />
                      </div>
                    </Link>
                  )}
                  <Link
                    // to={routes.PackagesGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    PROMO AND DISCOUNTS
                  </Link>
                  <Link
                    // to={routes.FaqsGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    BOOK NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} type="button" aria-expanded="false">
                {!isOpen ? (
                  <img className="" src={hamburger} alt="Workflow" />
                ) : (
                  <img className="mt-5" src={close} alt="Workflow" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${isOpen ? "" : "hidden"} md:hidden w-full h-screen z-50`}
        >
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <Link
              // to={routes.LandingGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Home
            </Link>
            <Link
              // to={routes.ObstaclesGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Obstacles
            </Link>
            <Link
              // to={routes.PackagesGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Packages
            </Link>
            <Link
              // to={routes.FaqsGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              FAQs
            </Link>
            <Link
              // to={routes.ContactsGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Contacts
            </Link>
            <Link
              // to={user ? routes.BookingGootopia : routes.Login}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
