import React from 'react'
import { DessertFooter } from '../Footer/DessertFooter'
import GootopiaFooter from '../Footer/GootopiaFooter'
import { DesertMuseumMenubar, GootopiaMenubar, Menubar, Topbar } from '../Navbar'
import { useState } from 'react';

export default function GootopiaContainer({children}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col w-full">
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
        <GootopiaMenubar/>
        {children}
        <GootopiaFooter/>
    </div>
  )
}