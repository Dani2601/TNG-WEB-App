import React, { useEffect, useRef, useState } from "react";
import tdmnav from "../../assets/Header/tdmnav.png";
import bakebenav from "../../assets/Header/bakebenav.png";
import gootopianav from "../../assets/Header/gootopianav.png";
import isnav from "../../assets/Header/isnav.png";
import { nx, logo } from "../../assets/Dessert";

import tfrnav from "../../assets/Header/tfrnav.png";
import { MdMenu } from "react-icons/md";
import routes from "../../constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthenticationContext";
import { useCallback } from "react";
import axios from "axios";
import { setCart, setToken, setUser } from "../../store/action";
import ChangePassModal from "../Modal/Profile/ChangePass/ChangePass";
import { ConfirmationCartModal } from "../Modal/ConfirmationCartModal";
import PrivacyPolicy from "../Modal/PrivacyANDPolicy/PrivacyPolicy";
import { reauthenticate } from "../../functions";

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

export default function Topbar({ scroll }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openEditBusinessUnitModal, setOpenEditBusinessUnitModal] =
    useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const { user, cart } = useSelector((state) => state.record);
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(null);
  const [policyModal, setPolicyModal] = useState(false)

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
    reauthenticate(null);
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

  function handleCart(business, route) {
    if (cart?.length > 0) {
      const businessUnitID = cart.map((item) => item.BusinessUnitID)[0];
      if (business === businessUnitID) {
        navigate(route);
      } else {
        setIsModalVisible(true);
        setPage(route);
      }
    } else {
      navigate(route);
    }
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  function handleProceed() {
    dispatch(setCart([]));
    setIsModalVisible(false);
    navigate(page);
    setPage(null);
  }

  return (
    <>
      {openEditBusinessUnitModal && (
        <ChangePassModal
          ariaHideApp={false}
          closeEditModal={closeEditModal}
          openEditBusinessUnitModal={openEditBusinessUnitModal}
        />
      )}
      <ConfirmationCartModal
        showModal={isModalVisible}
        handleCloseModal={handleCloseModal}
        handleProceed={handleProceed}
      />
      <PrivacyPolicy
        isOpen={policyModal}
        onRequestClose={() => setPolicyModal(!policyModal)}
      />
      <div className="bg-[#212121] hidden tablet:block">
        <div className="py-auto">
          <div className="flex flex-row justify-between h-[65px] items-center mx-[5px] gap-1 laptop:mx-[20px]">
            <div className="flex flex-row flex-none">
              {/* <div>
                <img src={nx} alt="" className="h-10 w-10 object-contain" />
              </div> */}
              <div>
                <a
                  className="cursor-pointer"
                  href="/"
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

            <div class="h-[40px]  bg-white w-[2px] mr-[3px] hidden tablet:block"></div>

            <div className="flex flex-row gap-1 laptop:gap-2 flex-1">
              <div>
                <div
                  onClick={() => handleCart(TFR_KEY, routes.LandingTFR)}
                  className={`cursor-pointer  rounded-full h-[35px] laptop:h-[46px] hoverEffectsTopbar
              ${location.pathname === routes.LandingTFR ||
                      location.pathname === routes.BookingTFR
                      ? "bg-[#664653]"
                      : ""
                    }`}
                >
                  <img src={tfrnav} alt="" className="w-full h-full" />
                </div>
              </div>

              <div>
                <div
                  onClick={() => handleCart(DESSERT_KEY, routes.LandingDesert)}
                  className={`cursor-pointer  rounded-full h-[35px] laptop:h-[46px] hoverEffectsTopbar
                ${location.pathname === routes.LandingDesert ||
                      location.pathname === routes.Packages ||
                      location.pathname === routes.DessertBooking
                      ? "bg-[#664653]"
                      : ""
                    }`}
                >
                  <img src={tdmnav} alt="" className="w-full h-full" />
                </div>
              </div>
              <div>
                <div
                  onClick={() =>
                    handleCart(TIS_KEY, routes.LandingInflatableIsland)
                  }
                  className={`cursor-pointer rounded-full h-[35px] laptop:h-[46px] hoverEffectsTopbar
                  ${location.pathname === routes.LandingInflatableIsland ||
                      location.pathname === routes.BookingInflatable
                      ? "bg-[#664653]"
                      : ""
                    }`}
                >
                  <img
                    src={isnav}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div>
                <div
                  onClick={() => handleCart(BAKEBE_KEY, routes.LandingBakebe)}
                  className={`cursor-pointer  rounded-full h-[35px] laptop:h-[46px] hoverEffectsTopbar
                ${location.pathname === routes.LandingBakebe ||
                      location.pathname === routes.BookingBakebe
                      ? "bg-[#664653]"
                      : ""
                    }`}
                >
                  {" "}
                  <img alt="" src={bakebenav} className="w-full h-full" />
                </div>
              </div>

              <div>
                <div
                  onClick={() =>
                    handleCart(GOOTOPIA_KEY, routes.LandingGootopia)
                  }
                  className={`cursor-pointer rounded-full h-[35px] laptop:h-[46px] hoverEffectsTopbar
              ${location.pathname === routes.LandingGootopia ||
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
              </div>
            </div>
            <div>
              <div onClick={() => setPolicyModal(true)} className="text-white px-4 mt-1 rounded-md cursor-pointer hover:text-[#EFC391]">
                <p className="text-sm">Privacy & Policy</p>
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
                          to={routes.Home}
                          className="cursor-pointer text-white flex items-center  py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                        >
                          Home
                        </Link>
                        {/* <Link
                          to={routes.Profile}
                          className="cursor-pointer text-white flex items-center  py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                        >
                          Profile
                        </Link> */}
                        <div
                          className="cursor-pointer text-white flex items-center  py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                          onClick={openEditModal}
                        >
                          Change Password
                        </div>
                        <Link
                          to={routes.Tickets}
                          className="cursor-pointer text-white flex items-center py-3 px-4 text-md hover:bg-gray-700"
                          role="menuitem"
                        >
                          Tickets
                        </Link>
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
