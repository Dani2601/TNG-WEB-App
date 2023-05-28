import React from 'react'
import {Topbar } from '../Navbar'
import TFRMenubar from '../Navbar/TFRMenubar'
import TFRFooter from '../Footer/TFRFooter'

export default function TFRContainer({children}) {
  return (
    <div className='flex flex-col w-full'>
        <Topbar/>
        <TFRMenubar/>
        {children}
        <TFRFooter/>
    </div>
  )
}