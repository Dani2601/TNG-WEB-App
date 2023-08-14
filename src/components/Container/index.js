import React from 'react'
import { DessertFooter } from '../Footer/DessertFooter'
import { DesertMuseumMenubar, Menubar, Topbar } from '../Navbar'
import { useState } from 'react';

export default function DesertMuseumContainer({children, scroll}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col w-full">
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
        <DesertMuseumMenubar scroll={scroll}/>
        <div className='z-0'>
        {children}
        </div>
        <DessertFooter/>
    </div>
  )
}