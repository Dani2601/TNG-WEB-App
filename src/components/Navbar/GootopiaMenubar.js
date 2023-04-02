import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { desertlogo, tdmnav } from "../../assets";
import close from "../../assets/Gootopia/closebutton.png";
import hamburger from "../../assets/Gootopia/hamburgericon.png";
import gootopia from "../../assets/Gootopia/gootopiamobile.png";
import dripping from "../../assets/Gootopia/slimedripping.png";
import routes from "../../constants/routes";
import { Link } from "react-router-dom";

export default function DesertMuseumMenubar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-gootopia-green font-flavors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex w-full justify-start items-center">
              {!isOpen && (
                <div className="flex-shrink-0">
                  <img
                    className=" object-contain"
                    src={gootopia}
                    alt="Workflow"
                  />
                </div>
              )}
              <div className="hidden w-full md:block">
                <div className="vg flex items-baseline">
                  <Link
                    to={routes.LandingGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to={routes.ObstaclesGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    Obstacles
                  </Link>
                  <Link
                    to={routes.PackagesGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    Packages
                  </Link>
                  <Link
                    to={routes.FaqsGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    FAQs
                  </Link>
                  <Link
                    to={routes.ContactsGootopia}
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    Contacts
                  </Link>
                  <a
                    href="#"
                    className="w-1/3 text-center text-black rounded-md text-sm font-medium"
                  >
                    How to book
                  </a>
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
              to={routes.LandingGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Home
            </Link>
            <Link
              to={routes.ObstaclesGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Obstacles
            </Link>
            <Link
              to={routes.PackagesGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Packages
            </Link>
            <Link
              to={routes.FaqsGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              FAQs
            </Link>
            <Link
              to={routes.ContactsGootopia}
              className="block px-3 py-2 w-full text-left text-base"
            >
              Contacts
            </Link>
            <a
              href="#"
              className="  block px-3 py-2 w-full text-left text-base"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
      {/* {isOpen ? (
                  <></>
                ) : (
                  <img className="" src={dripping} alt="Workflow" />
                )} */}
    </>
  );
}
