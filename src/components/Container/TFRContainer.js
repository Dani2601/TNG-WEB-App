import React from 'react'
import {Topbar } from '../Navbar'
import TFRMenubar from '../Navbar/TFRMenubar'
import TFRFooter from '../Footer/TFRFooter'
import { useState } from 'react';

export default function TFRContainer({children}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col w-full">
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
        {children}
        <TFRFooter/>
    </div>
  )
}