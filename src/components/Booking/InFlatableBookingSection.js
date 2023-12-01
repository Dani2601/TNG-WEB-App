import React from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../../constants/routes'

export default function InFlatableBookingSection() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center place-items-center px-4 py-6'>
            <button
                onClick={() => navigate('/TheInflateableIsland/Booking/')}
                className="shadow-md text-2xl w-full rounded-md sm:w-auto py-6 px-20 bg-[#ebacb3] hover:bg-[#20422b] text-white hoverEffects"
            >
                BOOK NOW
            </button>

            <div className='py-10 px-5 sm:px-80'>
                <div className='font-inflatable text-6xl font-bold text-center text-[#20422b] mb-4'>FEATURED ON:</div>
                <img src='https://static.wixstatic.com/media/28b656_49accf2dc4774f3493276ab7b7766cf3~mv2_d_4828_1960_s_2.jpg/v1/fill/w_1083,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28b656_49accf2dc4774f3493276ab7b7766cf3~mv2_d_4828_1960_s_2.jpg'
                    className='object-contain' alt=''
                />
            </div>
        </div>
    )
}
