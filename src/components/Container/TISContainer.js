import React from 'react'
import {Topbar } from '../Navbar'
import InflatableMenubar from '../Navbar/InflatableMenubar'
import InflatableFooter from '../Footer/InflatableFooter';
import { useState } from 'react';

export default function TISContainer({children, scroll}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col w-full">
      <Topbar showMenu={showMenu} setShowMenu={setShowMenu} handleMenuClick={handleMenuClick}/>
        <InflatableMenubar scroll={scroll}/>
        {children}
        <InflatableFooter/>
    </div>
  )
}