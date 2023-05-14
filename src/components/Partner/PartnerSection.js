import React from 'react'
import { chicago, forbes, metropolitan, outlook, southchina } from '../../assets/Dessert'

export function PartnerSection() {
  return (
    <div className='py-10 flex justify-center font-quicksand'>
        <div className='flex flex-col w-[80vw] md:w-[65vw] lg:w-[50vw] justify-center'>
          <span className='tracking-widest text-[20px] font-bold text-center'>
            <span className='text-[#ec548a]'>THE DESSERT MUSEUM </span><span className='text-[#C1B1DD]'>IS AN INTERACTIVE TASTING </span><br/>
            <span className='text-[#C1B1DD]'>ADVENTURE INTO </span><br/>
            <span className='text-[#E8178A]'>8 </span><span className='text-[#FE6060]'>M</span><span className='text-[#B3F2FF]'>O</span><span className='text-[#ffe926]'>U</span><span className='text-[#FE6060]'>T</span>
            <span className='text-[#BADA55]'>H</span><span className='text-[#C45BA1]'>W</span><span className='text-[#ff7e2d]'>A</span><span className='text-[#BADA55]'>T</span>
            <span className='text-[#FF4040]'>E</span><span className='text-[#FF99C3]'>R</span><span className='text-[#B3F2FF'>I</span><span className='text-[#E8178A]'>N</span><span className='text-[#C45BA1]'>G </span><span className='text-[#C1B1DD]'>ROOMS </span><br/>
            <span className='text-[#C1B1DD] '>THAT TRANSFORMS YOUR FAVORITE SWEETS INTO </span><br/>
            <span className='text-[#C1B1DD]'>ONE EPIC IMAGINATIVE WONDERLAND.</span><br/>
          </span>
          
        <div className='flex flex-wrap justify-center gap-3 pt-10'>
          <img src={chicago} className="object-contain w-14  md:w-28"/>
          <img src={metropolitan} className="object-contain w-14  md:w-28 w-42"/>
          <img src={forbes} className="object-contain w-14  md:w-28 w-32"/>
          <img src={southchina} className="object-contain w-14  md:w-28 w-40"/>
          <img src={outlook} className="object-contain w-14  md:w-28 w-40"/>
        </div>
        </div>
    </div>
  )
}
