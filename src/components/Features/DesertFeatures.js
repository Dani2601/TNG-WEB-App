import React from 'react'
import { banana, camera, claw, dessert, gumball, heart, rooms } from '../../assets/Dessert'

export function DesertFeatures() {
  return (
    <div className='flex flex-col sm:flex-row px-10 sm:px-0 lg:px-56 pb-4 font-quicksand bg-[url("https://static.wixstatic.com/media/00f21d_1f6812164a5b4d2994b32fdfb3fcbfd6~mv2.png/v1/fill/w_1899,h_369,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/00f21d_1f6812164a5b4d2994b32fdfb3fcbfd6~mv2.png")]'>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
            <img src={rooms} className="object-cover w-[195px] h-[195px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>ENTER THE PINK<br/>DOORWAY TO 8 MOUTHWATERING ROOMS</span>
        </div>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
            <img src={claw} className="object-cover w-[216px] h-[216px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>GIANT HUMAN CLAW MACHINE</span>
        </div>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
        <img src={gumball} className="object-cover w-[216px] h-[210px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>GO INSIDE A GIANT GUMBALL MACHINE</span>
        </div>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
        <img src={camera} className="object-cover w-[216px] h-[210px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>UNLIMITED PHOTO-OPS</span>
        </div>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
        <img src={heart} className="object-cover w-[194px] h-[194px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>LIVE OUT YOUR KPOP DREAMS</span>
        </div>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
        <img src={dessert} className="object-cover w-[197px] h-[190px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>TASTE 5-6 Curated Desserts</span>
        </div>
        <div className='w-1/7 flex flex-col items-center px-2 lg:px-3 justify-center'>
        <img src={banana} className="object-cover w-[180px] h-[180px]"/>
            <span className='text-white text-center font-bold text-sm tracking-widest'>SHOP SWEET SUGARYSOUVENIRS</span>
        </div>
    </div>
  )
}
