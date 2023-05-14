import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logo, nx, tnglogo } from '../../assets/Dessert'
import { FiTrash, FiTrash2 } from 'react-icons/fi'
import { MdRestoreFromTrash } from 'react-icons/md'

export function TDMBookingDetails({setStep}) {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleNext(){
    setStep(4)
  }

  return (
    <div className='w-full py-10 flex justify-center'>
      <div className='w-[80vw] sm:w-[50vw]'>
        <div className='text-center flex gap-6 flex-col justify-center items-center'>
            <img src={nx} className='w-[60px] object-contain'/>
            <img src={tnglogo} className='w-[400px] object-cover'/>
        </div>
        <div className='flex flex-col'>
            <p className='text-center font-bold text-lg mb-10 mt-5'>BOOKING DETAILS</p>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex p-5 gap-3 flex-col w-full sm:w-[40vw] bg-gradient-to-b from-[#E890A1] via-[#E9959F] to-[#EFC391]'>
                    <p className='font-bold'>Ticket Booking Details</p>
                    <div className='flex items-center'>
                        <span className='mr-2 text-sm'>Online Promo - Save 100!</span>
                        <FiTrash2 color='red'/>
                    </div>
                    <div>
                        <p className='text-sm'>NUMBER OF PASSES</p>
                        <input type='number' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>PICK A DATE</p>
                        <input type='date' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>PICK A BOOKING HOUR</p>
                        <input type='date' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>CHOOSE INTERVAL</p>
                        <input type='text' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                </div>
                <div className='flex flex-col w-full sm:w-[40vw]'>
                    <div className='shadow-md rounded-md'>
                        <div className='w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]'/>
                        <div className='py-4 px-6'>
                            <div className='border-b-2 border-gray-200'>
                                <p className='font-bold text-sm mb-2'>Location: S Maison</p>
                                <p className='font-bold text-sm mb-3'>Type Of Ticket: Regular</p>
                            </div>
                            <div className='pt-4 pb-3 border-b-2 border-gray-200'>
                                <p className='font-bold text-sm'>Online Promo - Save 100!</p>
                                <div className='flex justify-between py-2'>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>Date: 2023-02-22</p>
                                        <p className='text-xs'>Time: ---</p>
                                        <p className='text-xs'>No. of pass: 1</p>
                                    </div>
                                    <div className='flex items-ebd'>
                                        <p className='tex-4xl font-bold'>₱ 799.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between pt-4 pb-3 border-b-2 border-gray-200'>
                                <div className='text-sm font-bold'>Total</div>
                                <div className='font-bold'>₱ 799.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-md rounded-md'>
                        <div className='w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]'/>
                        <div className='flex justify-center py-4 px-6'>
                            <p className='text-xs'>Please note that our TWO HOUR TOUR starts every 15 minutes. Guests are required to come 20 minutes before their scheduled slot for processing of tickets.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center flex-wrap gap-5 py-5 w-60 self-center'>
              <button onClick={handleBack} className='shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#51CEC5] text-white'>Back</button>
              <button onClick={handleNext} className='shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white'>Next</button>
              <button onClick={handleNext} className='shadow-md text-sm w-full sm:w-auto  py-2 px-6 bg-[#E992A1] text-white'>Add More</button>
            </div>
        </div>
      </div>
    </div>
  )
}
