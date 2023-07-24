import React from "react";
import { Link } from "react-router-dom";
import { Topbar } from "../../components/Navbar";
import routes from "../../constants/routes";
import { useState } from "react";

export default function PageNotFound() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
      <div className={`flex flex-col justify-center items-center  modalgradient h-screen w-screen`}>
        <div className="text-[30px] sm:text-[50px]  font-extrabold  bg-clip-text bg-gradient-to-r from-primary ">
          Oooops!
        </div>
        <div className="text-[12px] sm:text-[18px] font-thin sm:md">
          Page Not Found
        </div>
        <div className="text-[12px] sm:text-[18px] font-thin text-slate-400 sm:md">
          This page probably doesn't exist or under Construction
        </div>
        <button
          onClick={() => setShowMenu(true)}
          type="button"
          class="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Login
        </button>
      </div>
    </>
  );
}
