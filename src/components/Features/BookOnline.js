import React from 'react'
import { useNavigate } from 'react-router-dom'
import { booknow, bookonline } from '../../assets/Dessert'
import routes from '../../constants/routes'

export default function BookOnline() {
  const navigate = useNavigate()

  function handleNavigate(){
    navigate(routes.DessertBooking)
  }

  return (
    <div className='w-full py-5 flex flex-col justify-center items-center font-quicksand'>
        <img src={bookonline} className="object-cover w-[462px] h-[222px] lg:w-[562px] lg:h-[322px]"/>
        <div className='m-5 cursor-pointer' onClick={handleNavigate}>
          <img src={booknow} className="w-[124px] lg:w-[214px] lg:h-[118px] object-cover"/>
        </div>
    </div>
  )
}
