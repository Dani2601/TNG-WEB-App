import React from 'react'
import { DessertFooter } from '../Footer/DessertFooter'
import { DesertMuseumMenubar, Menubar, Topbar } from '../Navbar'

export default function DesertMuseumContainer({children, scroll}) {
  return (
    <div className='flex flex-col w-full'>
        <Topbar/>
        <DesertMuseumMenubar scroll={scroll}/>
        {children}
        <DessertFooter/>
    </div>
  )
}