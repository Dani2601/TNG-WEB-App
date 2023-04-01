import React from 'react'
import { useNavigate } from 'react-router-dom'

export function TDMLocation({setStep}) {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleNext(){
    setStep(2)
  }

  return (
    <div className='w-full h-[60vh] flex justify-center'>
      <div className='w-[80vw] sm:w-[50vw]'>
        <div className='h-1/2 text-center flex gap-6 flex-col justify-center items-center'>
            <p className='text-[30px] text-[#FF98C3]'>Select Location</p>
            <p className='text-sm'>Please note that our TWO HOUR TOUR starts every 15 minutes.<br/>Guests are required to come 20 minutes before their scheduled slot<br/>for processing of tickets.</p>
        </div>
        
        <div className='h-1/2'>
            <p>Choose where you want to book your appointment</p>
            <input type={'text'} className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"/>
            <div className='flex justify-end gap-5'>
              <button onClick={handleBack} className='shadow-md text-sm py-2 px-6 border-[#FF98C3] border-2 text-[#FF98C3]'>Back</button>
              <button onClick={handleNext} className='shadow-md text-sm py-2 px-6 bg-[#FF98C3] text-white'>Next</button>
            </div>
        </div>
      </div>
    </div>
  )
}
