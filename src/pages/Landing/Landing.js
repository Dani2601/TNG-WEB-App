import React from "react";
import { useState } from "react";
import { Topbar } from "../../components/Navbar";
import TNGLOGOWHITE from "../../assets/TNGLOGOWHITE.webp";
import OURBRANDS from "../../assets/OURBRANDS.png";
import TDM_Logo01 from "../../assets/TDM_Logo01.png";
import inflatableIsland from "../../assets/inflatableIsland.webp";
import gootopia from "../../assets/gootopia.webp";
import pink from "../../assets/pink.webp";

export default function Landing() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Topbar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        handleMenuClick={handleMenuClick}
      />

      <div className="h-screen p-8 mb-auto font-poppins landinggradient">
        <div className="flex flex-col justify-center items-center tablet:gap-4">
          <div className="w-[300px] tablet:w-[500px]">
            <img src={TNGLOGOWHITE} alt="Main Logo" />
          </div>
          <div className="w-[300px] tablet:w-[500px]">
            <img src={OURBRANDS} alt="Main Logo" />
          </div>

          <div className="flex flex-row justify-center items-center tablet:flex-wrap">
            <div className="w-[100px] tablet:w-[300px]">
              <img src={TDM_Logo01} alt="Main Logo" />
            </div>
            <div className="w-[50px] tablet:w-[300px] ">
              <img src={inflatableIsland} alt="Main Logo" className="mx-auto" />
            </div>
            <div className="w-[75px] tablet:w-[300px]">
              <img src={gootopia} alt="Main Logo" />
            </div>
            <div className="w-[100px] tablet:w-[300px]">
              <img src={pink} alt="Main Logo" className="tablet:m-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
