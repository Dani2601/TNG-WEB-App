import React, { useEffect, useRef, useState } from "react";
import {
  bakebenav,
  gootopianav,
  isnav,
  logo,
  nx,
  tdmnav,
} from "../../assets/Dessert";

import tfrnav from "../../assets/TFR/THE FUN ROOF-WHITE.png";
import { MdMenu } from "react-icons/md";
import routes from "../../constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthenticationContext";
import { useCallback } from "react";
import axios from "axios";
import { setToken, setUser } from "../../store/action";
import ChangePassModal from "../Modal/Profile/ChangePass/ChangePass";

export default function Topbar({ scroll }) {
  const [showMenu, setShowMenu] = useState(false);
  const [openEditBusinessUnitModal, setOpenEditBusinessUnitModal] =
    useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { user } = useSelector((state) => state.record);
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  function _logout() {
    // console.log("trigger")
    dispatch(setToken(null));
    dispatch(setUser(null));
    logout();
    navigate(routes.Login);
  }

  // Open edit post Modal
  const openEditModal = () => {
    setOpenEditBusinessUnitModal(true);
  };

  // CLose edit post Modal
  const closeEditModal = () => {
    setOpenEditBusinessUnitModal(false);
  };

  return (
    <>
      {openEditBusinessUnitModal && (
        <ChangePassModal
          ariaHideApp={false}
          closeEditModal={closeEditModal}
          openEditBusinessUnitModal={openEditBusinessUnitModal}
        />
      )}

      <div className="bg-[#212121] ">
        <div className="py-auto">
          <div className="flex flex-row justify-between h-[65px] items-center mx-[5px] gap-1 laptop:mx-[20px]">
            <div className="flex flex-row flex-none">
              <div>
                <img src={nx} alt="" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <a
                  className="cursor-pointer"
                  href="https://www.thenextperience.com/?fbclid=IwAR1ZQYYEJPBpM2kkpqy39uEx9zX22jxPGDlmMZnmXTCz5Tkf2_WxeyLCo9s"
                  target="_blank"
                >
                  <img
                    src={logo}
                    alt=""
                    className="hidden tablet:block w-[281px] h-[34px] mt-1"
                  />
                </a>
              </div>
            </div>

            <div class="h-[40px]  bg-white w-[2px] mr-[3px]"></div>

            <div className="flex flex-row gap-1 laptop:gap-2 flex-1">
              <div>
                <Link to={routes.LandingTFR}>
                  <div
                    className={`cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px] 
                ${
                  location.pathname === routes.LandingTFR ||
                  location.pathname === routes.BookingTFR
                    ? "bg-[#664653]"
                    : ""
                }`}
                  >
                    <img
                      src={tfrnav}
                      alt=""
                      className="w-full h-full object-contain max-w-[106px] max-h-[34px]"
                    />
                  </div>
                </Link>
              </div>

              <div>
                <Link to={routes.LandingDesert}>
                  <div
                    className={`cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px] 
                ${
                  location.pathname === routes.LandingDesert ||
                  location.pathname === routes.Packages ||
                  location.pathname === routes.DessertBooking
                    ? "bg-[#664653]"
                    : ""
                }`}
                  >
                    <img
                      src={tdmnav}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link to={routes.LandingInflatableIsland}>
                  <div className={`cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px]
                  ${
                    location.pathname === routes.LandingInflatableIsland ? "bg-[#664653]" : ""
                  }`}>
                    <img
                      src={isnav}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
              </div>

              <div>
                <Link to={routes.LandingBakebe}>
                  <div
                    className={`cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px] 
                ${
                  location.pathname === routes.LandingBakebe ||
                  location.pathname === routes.BookingBakebe
                    ? "bg-[#664653]"
                    : ""
                }`}
                  >
                    {" "}
                    <img
                      alt=""
                      src={bakebenav}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
              </div>

              <div>
                <Link to={routes.LandingGootopia}>
                  <div
                    className={`cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px] 
              ${
                location.pathname === routes.LandingGootopia ||
                location.pathname === routes.ObstaclesGootopia ||
                location.pathname === routes.PackagesGootopia ||
                location.pathname === routes.FaqsGootopia ||
                location.pathname === routes.ContactsGootopia ||
                location.pathname === routes.BookingGootopia ||
                location.pathname === routes.SelectTicketGootopia
                  ? "bg-[#664653]"
                  : ""
              }`}
                  >
                    <img
                      alt=""
                      src={gootopianav}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="flex w-1/10 justify-center items-center"
              ref={menuRef}
            >
              <MdMenu
                color="white"
                size={30}
                className="cursor-pointer"
                onClick={handleMenuClick}
              />
              {showMenu && (
                <div className="absolute top-[56px] right-0 w-48 bg-[#212121] rounded-md z-50 text-[12px] font-poppins font-medium">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    {user ? (
                      <>
                        <Link
                          to={routes.Profile}
                          className="cursor-pointer text-white flex items-center  py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                        >
                          Profile
                        </Link>
                        <div
                          className="cursor-pointer text-white flex items-center  py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                          onClick={openEditModal}
                        >
                          Change Password
                        </div>
                        <Link
                          to={routes.Transaction}
                          className="cursor-pointer text-white flex items-center py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                        >
                          Transactions
                        </Link>
                        <div
                          className="cursor-pointer text-white flex items-center   py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                          onClick={_logout}
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <Link to={routes.Login}>
                        <div className="text-white flex items-center py-3 px-4 text-md">
                          Login
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
