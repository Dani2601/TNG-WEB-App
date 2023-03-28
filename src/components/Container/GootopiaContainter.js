import React from 'react'
import { DessertFooter } from '../Footer/DessertFooter'
import { DesertMuseumMenubar, GootopiaMenubar, Menubar, Topbar } from '../Navbar'

export default function GootopiaContainer({children}) {
  return (
    <div className='flex flex-col w-full'>
        <Topbar/>
        <GootopiaMenubar/>
        {children}
        <DessertFooter/>
    </div>
  )
}