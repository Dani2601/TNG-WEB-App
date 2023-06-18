import React from 'react'
import {Topbar } from '../Navbar'
import InflatableMenubar from '../Navbar/InflatableMenubar'
import InflatableFooter from '../Footer/InflatableFooter';

export default function TISContainer({children, scroll}) {
  return (
    <div className='flex flex-col w-full'>
        <Topbar/>
        <InflatableMenubar scroll={scroll}/>
        {children}
        <InflatableFooter/>
    </div>
  )
}