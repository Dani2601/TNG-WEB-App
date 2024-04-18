import React from 'react'
import { useNavigate } from 'react-router-dom'
import { bakery, banana1, bananabeach, BEWITCHED, bubbles, gumball1, kakepop, kheart } from '../../assets/Dessert'
import routes from '../../constants/routes'
import { useSelector } from 'react-redux'

export function ImageSection() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.record);

    function handleNavigate() {
        navigate(routes.DessertBooking)
    }

    return (
        <div className='flex flex-col font-quicksand'>
            <div className='flex flex-col md:flex-row w-full md:h-[512px]'>
                <img src={bakery} alt="bakery" className="object-cover w-full md:w-1/2" />
                <div className='flex flex-col justify-center items-center py-4 w-full md:w-1/2 bg-[#a161ad]'>
                    <img src={BEWITCHED} alt="bakery" className="object-cover w-[347px] h-[347px] lg:w-[447px] lg:h-[447px]" />
                    <button onClick={handleNavigate} className='hoverEffects border-2 border-[#8d0b0b] rounded-full px-16 py-2 bg-white mt-[-20px] text-sm tracking-widest text-[#8d0b0b] hover:bg-[#8d0b0b] hover:text-white hover:font-bold'>BOOK NOW</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full md:h-[512px]'>
                <div className='flex flex-col justify-center items-center py-4 w-full md:w-1/2 bg-[#35cfd8]'>
                    <img src={bubbles} alt="bakery" className="object-cover w-[347px] h-[347px] lg:w-[447px] lg:h-[447px]" />
                    <button onClick={handleNavigate} className='hoverEffects border-2 border-[#8d0b0b] rounded-full px-16 py-2 bg-white mt-[-20px] text-sm tracking-widest text-[#8d0b0b]  hover:bg-[#8d0b0b] hover:text-white hover:font-bold'>BOOK NOW</button>
                </div>
                <img src={gumball1} alt="bakery" className="object-cover w-full md:w-1/2" />
            </div>
            <div className='flex flex-col md:flex-row w-full md:h-[512px]'>
                <img src={banana1} alt="bakery" className="object-cover w-full md:w-1/2" />
                <div className='flex flex-col justify-center items-center py-4 w-full md:w-1/2 bg-[#77d1b7]'>
                    <img src={bananabeach} alt="bakery" className="object-cover w-[347px] h-[347px] lg:w-[447px] lg:h-[447px]" />
                    <button onClick={handleNavigate} className='hoverEffects border-2 border-[#8d0b0b] rounded-full px-16 py-2 bg-white mt-[-20px] text-sm tracking-widest text-[#8d0b0b] hover:bg-[#8d0b0b] hover:text-white hover:font-bold'>BOOK NOW</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full md:h-[512px]'>
                <div className='flex flex-col justify-center items-center py-4 w-full md:w-1/2 bg-[#ffcae9]'>
                    <img src={kheart} alt="bakery" className="object-cover w-[347px] h-[347px] lg:w-[447px] lg:h-[447px]" />
                    <button onClick={handleNavigate} alt="bakery" className='hoverEffects border-2 border-[#8d0b0b] rounded-full px-16 py-2 bg-white mt-[-20px] text-sm tracking-widest text-[#8d0b0b]  hover:bg-[#8d0b0b] hover:text-white hover:font-bold'>BOOK NOW</button>
                </div>
                <img src={kakepop} alt="bakery" className="object-cover w-full md:w-1/2" />
            </div>
        </div>
    )
}
