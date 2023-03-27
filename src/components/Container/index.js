import React from 'react'
import { DessertFooter } from '../Footer/DessertFooter'
import { DesertMuseumMenubar, Menubar, Topbar } from '../Navbar'

export default function DesertMuseumContainer({children}) {
  return (
    <div className='flex flex-col w-full'>
        <Topbar/>
        <DesertMuseumMenubar/>
        {children}
        <DessertFooter/>
    </div>
  )
}