import React, { useEffect, useRef, useState } from "react";
import {
  bakebenav,
  gootopianav,
  isnav,
  logo,
  nx,
  tdmnav,
} from "../../assets/Dessert";
import { MdMenu } from "react-icons/md";
import routes from "../../constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthenticationContext";
import { useCallback } from "react";
import axios from "axios";
import { setToken, setUser } from "../../store/action";

export default function Topbar({ scroll }) {
  const [showMenu, setShowMenu] = useState(false);
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
    console.log("trigger")
      dispatch(setToken(null));
      dispatch(setUser(null));
      logout();
      navigate(routes.Login);
  }

  return (
    <div className="bg-[#212121] ">
      <div className="py-auto">
        <div className="flex flex-row justify-between h-[65px] items-center mx-[5px] gap-1 laptop:mx-[20px]">
          <div className="flex flex-row flex-none">
            <div>
              <img src={nx} alt="" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <img
                src={logo}
                alt=""
                className="hidden tablet:block w-[281px] h-[34px] mt-1"
              />
            </div>
          </div>

          <div class="h-[40px]  bg-white w-[2px] mr-[3px]"></div>

          <div className="flex flex-row gap-1 laptop:gap-2 flex-1">
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
              <Link to={routes.PageNotFound}>
                <div className="cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px]">
                  <img
                    src={isnav}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            <div>
              <Link to={routes.PageNotFound}>
                <div className="cursor-pointer border-2 border-white py-1 px-3 rounded-full h-[35px] laptop:h-[46px]">
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
                location.pathname === routes.SelectLocationGootopia ||
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
              <div className="absolute top-[56px] right-0 w-48 bg-black rounded-md z-100">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  {user ? (
                    <>
                      <div
                        className="cursor-pointer text-white flex items-center border-y-[1px] border-white py-3 px-4 text-md"
                        role="menuitem"
                      >
                        Profile
                      </div>
                      <div
                        className="cursor-pointer text-white flex items-center py-3 px-4 text-md"
                        role="menuitem"
                      >
                        Transactions
                      </div>
                      <div
                        className="cursor-pointer text-white flex items-center border-t-[1px] border-white py-3 px-4 text-md"
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
    // <div className="relative flex w-full py-2 pr-2 lg:px-8 justify-between bg-[#212121]">
    //   <div className="flex w-1/6 md:w-1/3 pl-2 justify-center items-center border-r-2 border-white">
    //     <img src={nx} className="h-10 w-10 object-contain" />
    //     <img src={logo} className="hidden md:block w-[281px] h-[34px]" />
    //   </div>
    //   <div className="flex w-3/5 lg:pl-6 sm:w-3/5 w-full px-1 gap-1 items-center">
    //     <Link to={routes.Home}>
    //       <div className="cursor-pointer w-[200px] lg:w-[100px] flex items-center border-2 border-white py-1 px-3 rounded-full">
    //         <img src={tdmnav} className="w-full h-full object-contain" />
    //       </div>
    //     </Link>
    //     <Link to={routes.PageNotFound}>
    //       <div className="cursor-pointer w-[200px] lg:w-[100px] flex items-center border-2 border-white py-1 px-3 rounded-full">
    //         <img src={isnav} className="w-full h-full object-contain" />
    //       </div>
    //     </Link>
    //     <Link to={routes.PageNotFound}>
    //       <div className="cursor-pointer w-[200px] lg:w-[100px] flex items-center border-2 border-white py-1 px-3 rounded-full">
    //         <img src={bakebenav} className="w-full h-full object-contain" />
    //       </div>
    //     </Link>
    //     <Link to={routes.LandingGootopia}>
    //       <div className="cursor-pointer w-[200px] lg:w-[100px] flex items-center border-2 border-white py-1 px-3 rounded-full">
    //         <img src={gootopianav} className="w-full h-full object-contain" />
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="flex w-1/10 justify-center items-center" ref={menuRef}>
    //     <MdMenu
    //       color="white"
    //       size={30}
    //       className="cursor-pointer"
    //       onClick={handleMenuClick}
    //     />
    //     {showMenu && (
    //       <div className="absolute top-[56px] right-0 w-48 bg-black rounded-md">
    //         <div
    //           className="py-1"
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="user-menu"
    //         >
    //           <div
    //             className="cursor-pointer text-white flex items-center border-y-[1px] border-white py-3 px-4 text-md"
    //             role="menuitem"
    //           >
    //             Profile
    //           </div>
    //           <div
    //             className="cursor-pointer text-white flex items-center py-3 px-4 text-md"
    //             role="menuitem"
    //           >
    //             Transactions
    //           </div>
    //           <div
    //             className="cursor-pointer text-white flex items-center border-t-[1px] border-white py-3 px-4 text-md"
    //             role="menuitem"
    //           >
    //             Logout
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}
