import React from "react";
import BakebeMenubar from "../Navbar/BakebeMenubar";
import { Topbar } from "../Navbar";
import BakebeFooter from "../Footer/BakebeFooter";
import { useState } from "react";

export default function BakebeContainer({ children }) {
  
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col w-full">
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>

      {children}
      <BakebeFooter />
    </div>
  );
}
