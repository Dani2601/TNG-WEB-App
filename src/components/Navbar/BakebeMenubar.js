import React, { useCallback, useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { desertlogo, tdmnav } from "../../assets/Dessert";
import close from "../../assets/Gootopia/closebutton.png";
import hamburger from "../../assets/Bakebe/Hamburger.png";
import gootopia from "../../assets/Gootopia/gootopiamobile.png";
import dripping from "../../assets/Gootopia/slimedripping.png";
import routes from "../../constants/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import bakebenav from "../../assets/Bakebe/navbarlogo.png";
import { CgCloseO } from "react-icons/cg";
import rightcake from "../../assets/Bakebe/rightcake.png";
import { Transition } from "@headlessui/react";

export default function BakebeMenubar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.record);
  const [promo, setPromo] = useState([]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <nav
        className="bg-white drop-shadow-2xl"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-[100px]">
            <div className="flex w-full justify-start items-center">
              <div className="laptop:hidden">
                <Link className=" ">
                  <img
                    className="bg-transparent  mx-auto "
                    src={bakebenav}
                    alt="Workflow"
                  />
                </Link>
              </div>

              <div className="hidden w-full md:block ">
                <div className=" flex items-center text-[13px] flex-row">
                  <a
                    href="#menu"
                    // to={routes.LandingGootopia}
                    className="w-1/3 text-center text-black rounded-md "
                  >
                    HOME
                  </a>
                  <a
                    href="#howto"
                    // to={routes.ObstaclesGootopia}
                    className="w-1/3 text-center text-black rounded-md  "
                  >
                    HOW TO BOOK
                  </a>
                  {!isOpen && (
                    <div
                      // to={routes.ContactsGootopia}
                      className="w-1/3 "
                    >
                      <a href="#menu">
                        <img
                          className="bg-transparent  mx-auto "
                          src={bakebenav}
                          alt="Workflow"
                        />
                      </a>
                    </div>
                  )}
                  <a
                    href="#promo"
                    // to={routes.PackagesGootopia}
                    className="w-1/3 text-center text-black rounded-md  "
                  >
                    PROMO AND DISCOUNTS
                  </a>
                  <Link
                    to={user ? routes.BookingBakebe : routes.Login}
                    // to={routes.FaqsGootopia}
                    className="w-1/3 text-center text-black rounded-md  "
                  >
                    BOOK NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <div className="flex flex-row">
                <button
                  onClick={toggleMenu}
                  type="button"
                  aria-expanded="false"
                >
                  {!isOpen ? (
                    <img className="" src={hamburger} alt="Workflow" />
                  ) : (
                    <CgCloseO className="w-[24px] h-[24px] -mt-4 mr-3 text-bakebe-pink" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <>
          <div
            className={`${
              isOpen ? "" : "hidden"
            } md:hidden w-full h-screen z-50 `}
          >
            <div className="text-[16px] flex flex-col items-center px-2 pt-2 pb-3 space-y-3 sm:px-3 text-bakebe-pink">
              <a
                href={"#howto"}
                // to={routes.ObstaclesGootopia}
                className="block px-3 py-2 w-full text-left "
              >
                HOW TO BOOK
              </a>
              <a
                href={"#promo"}
                // to={routes.PackagesGootopia}
                className="block px-3 py-2 w-full text-left "
              >
                PROMOS AND DISCOUNTS
              </a>
              <Link
                to={user ? routes.BookingBakebe : routes.Login}
                // to={routes.FaqsGootopia}
                className="block px-3 py-2 w-full text-left "
              >
                BOOK NOW!
              </Link>

              <img src={rightcake} alt="cake" className="" />
            </div>
          </div>
        </>
      </nav>
    </>
  );
}
