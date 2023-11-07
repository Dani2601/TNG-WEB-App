import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import { desertlogo, tdmnav } from '../../assets/Dessert'
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import { useSelector } from 'react-redux';

export default function DesertMuseumMenubar({scroll}) {

  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.record);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-tdm-pink font-quicksand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex w-full justify-center items-center">
              <div className="hidden w-1/2 md:block">
                <div className="vg flex justify-end">
                  <Link
                    to={routes.Packages}
                    className="cursor-pointer w-1/3 text-center rounded-md text-sm font-bold"
                  >
                    EVENTS
                  </Link>
                  </div>
                </div>
                {
                  !isOpen &&
                  <div className="flex-shrink-0">
                    <Link to={routes.LandingDesert}>
                      <img
                        className="w-60 object-contain"
                        src={desertlogo}
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                }
              <div className="w-1/2 hidden md:block">
                <div className="vg flex items-baseline space-x-4">
                <div
                  onClick={scroll}
                  className="cursor-pointer w-1/3 text-center rounded-md text-sm font-bold"
                >
                  FAQS
                </div>
                </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              aria-expanded="false"
            >
              {
                !isOpen ?
                <MdMenu color='white' size={40}/>
                :
                <MdClose color='white' size={40} className="mt-5"/>
              }
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"} md:hidden w-full h-screen`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-white text-shadow-lg font-bold border-b-2 border-tdm-darkerpink hover:bg-gray-700 hover:text-white block px-3 py-2 w-full text-center text-base"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-white text-shadow-lg font-bold border-b-2 border-tdm-darkerpink hover:bg-gray-700 hover:text-white block px-3 py-2 w-full text-center text-base"
          >
            PACKAGES
          </a>
          <a
            href="#"
            className="text-white text-shadow-lg font-bold border-b-2 border-tdm-darkerpink hover:bg-gray-700 hover:text-white block px-3 py-2 w-full text-center text-base"
          >
            MEDIA
          </a>
          <Link
            to={routes.DessertBooking}
            className="text-white text-shadow-lg font-bold border-b-2 border-tdm-darkerpink hover:bg-gray-700 hover:text-white block px-3 py-2 w-full text-center text-base"
          >
            HOW TO BOOK
          </Link>
          <a
            href="#"
            className="text-white text-shadow-lg font-bold border-b-2 border-tdm-darkerpink hover:bg-gray-700 hover:text-white block px-3 py-2 w-full text-center text-base"
          >
            FAQS
          </a>
        </div>
      </div>
    </nav>
  )
}