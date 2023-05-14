import React from 'react'
import { allpink, cannoisseur, instagramtodeath, playground } from '../../assets/Dessert'

export default function CertifiedSection() {
  return (
    <div className='flex flex-col font-quicksand font-quicksand'>
        <div className={`flex py-2 flex-col items-center md:flex-row object-cover justify-center w-full md:h-[137px] bg-[url("https://static.wixstatic.com/media/00f21d_d064cef478c84bc2b6a84b02af2702d0~mv2.png/v1/fill/w_1899,h_171,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/00f21d_d064cef478c84bc2b6a84b02af2702d0~mv2.png")]`}>
            <span className='font-bold text-[#e83384] tracking-widest text-[20px]'>CERTIFIED:</span>
            <img src={cannoisseur} className="mt-[-10px] object-cover w-[149px] h-[160px]"/>
            <img src={playground} className="mt-[-10px] object-cover w-[154px] h-[166px]"/>
            <img src={instagramtodeath} className="mt-[-10px] object-cover w-[149px] h-[161px]"/>
            <img src={allpink} className="mt-[-10px] object-cover w-[154px] h-[166px]"/>
        </div>
        <div className='flex justify-center py-7'>
            <span className='tracking-widest text-center text-[#e7caf2] font-bold text-[20px] lg:text-[40px]'><span className='text-[20px]'>A SNEAK PEEK INTO SOME OF OUR</span><br/>
            <span className='text-[#E8178A]'>8 </span><span className='text-[#FE6060]'>M</span><span className='text-[#B3F2FF]'>O</span><span className='text-[#ffe926]'>U</span><span className='text-[#FE6060]'>T</span>
            <span className='text-[#BADA55]'>H</span><span className='text-[#C45BA1]'>W</span><span className='text-[#ff7e2d]'>A</span><span className='text-[#BADA55]'>T</span>
            <span className='text-[#FF4040]'>E</span><span className='text-[#FF99C3]'>R</span><span className='text-[#B3F2FF'>I</span><span className='text-[#E8178A]'>N</span><span className='text-[#C45BA1]'>G </span><span className='text-[#C1B1DD]'>ROOMS </span><br/>
            </span>
        </div>
    </div>
  )
}
