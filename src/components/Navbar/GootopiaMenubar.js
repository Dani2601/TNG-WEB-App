import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { desertlogo, tdmnav } from "../../assets";
import close from "../../assets/Gootopia/closebutton.png"
import hamburger from "../../assets/Gootopia/hamburgericon.png"
import gootopia from "../../assets/Gootopia/gootopiamobile.png"

export default function DesertMuseumMenubar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gootopia-green font-flavors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex w-full justify-start items-center">
            <div className="hidden w-1/2 md:block">
              <div className="vg flex items-baseline">
                <a
                  href="#"
                  className="w-1/3 text-center text-white rounded-md text-sm font-medium"
                >
                  Obstacles
                </a>
                <a
                  href="#"
                  className="w-1/3 text-center text-white rounded-md text-sm font-medium"
                >
                  Contacts
                </a>
                <a
                  href="#"
                  className="w-1/3 text-center text-white rounded-md text-sm font-medium"
                >
                  FAQs
                </a>
              </div>
            </div>
            {!isOpen && (
              <div className="flex-shrink-0">
                <img
                  className=" object-contain"
                  src={gootopia}
                  alt="Workflow"
                />
              </div>
            )}
            <div className="w-1/2 hidden md:block">
              <div className="vg flex items-baseline space-x-4">
                <a
                  href="#"
                  className="w-1/3 text-center text-white rounded-md text-sm font-medium"
                >
                  HOW TO BOOK
                </a>
                <a
                  href="#"
                  className="w-1/3 text-center text-white rounded-md text-sm font-medium"
                >
                  FAQS
                </a>
                <a
                  href="#"
                  className="w-1/3 text-center text-white rounded-md text-sm font-medium"
                >
                  LOGIN
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} type="button" aria-expanded="false">
              {!isOpen ? (
                <img
                className=""
                src={hamburger}
                alt="Workflow"
              />              ) : (
                <img
                className="mt-5"
                src={close}
                alt="Workflow"
              />              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} md:hidden w-full h-screen`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          <a
            href="#"
            className="  block px-3 py-2 w-full text-left text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="  block px-3 py-2 w-full text-left text-base"
          >
            Obstacles
          </a>
          <a
            href="#"
            className="  block px-3 py-2 w-full text-left text-base"
          >
            FAQs
          </a>
          <a
            href="#"
            className="  block px-3 py-2 w-full text-left text-base"
          >
            Packages
          </a>
          <a
            href="#"
            className="  block px-3 py-2 w-full text-left text-base"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
