import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logo, nx, paynamics, paypal, tnglogo } from '../../assets'
import { FiTrash, FiTrash2 } from 'react-icons/fi'
import { MdRestoreFromTrash } from 'react-icons/md'

export function TDMPaymentDetails({setStep}) {
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleNext(){
    alert('Submit')
  }

  return (
    <div className='w-full py-10 flex justify-center'>
      <div className='w-[80vw] sm:w-[50vw]'>
        <div className='text-center flex gap-6 flex-col justify-center items-center'>
            <img src={nx} className='w-[60px] object-contain'/>
            <img src={tnglogo} className='w-[400px] object-cover'/>
        </div>
        <div className='flex flex-col'>
            <p className='text-center font-bold text-lg mb-10 mt-5'>PAYMENT DETAILS</p>
            <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex p-5 gap-3 flex-col w-full sm:w-[40vw] bg-gradient-to-b from-[#E890A1] via-[#E9959F] to-[#EFC391]'>
                    <p className='font-bold'>Personal Details</p>
                    <div className='flex items-center py-3'>
                        <input type='checkbox' className='mr-3'/>
                        <span className='mr-2 text-sm'>Use Login Details</span>
                    </div>
                    <div>
                        <p className='text-sm'>First Name</p>
                        <input type='text' placeholder='First Name' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>Middle Name</p>
                        <input type='text' placeholder='Middle Name' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>Last Name</p>
                        <input type='text' placeholder='Last Name' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>Contact Number</p>
                        <input type='number' placeholder='Contact Number' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div className='border-b-2 border-black pb-4'>
                        <p className='text-sm'>Email Address</p>
                        <input type='email' placeholder='Email Address' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm font-bold'>PAYMENT METHOD</p>
                        <div className='flex gap-3 py-3'>
                            <div className='flex gap-2'>
                                <input type='checkbox'/>
                                <img src={paypal} className='w-16 object-contain'/>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox'/>
                                <img src={paynamics} className='w-16 object-contain'/>
                            </div>
                        </div>
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
                                    <div className='flex flex-col items-end'>
                                        <p className='tex-4xl font-bold text-right'>₱ 799.00</p>
                                        {
                                            <p className='text-[10px] text-red-500 text-right'>Discount: ₱ 0.00</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border-b-2 border-gray-200 pt-4 pb-3 gap-2'>
                                <div className='flex justify-between'>
                                    <div className='text-sm font-bold'>Sub Total</div>
                                    <div className='font-bold'>₱ 799.00</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='text-sm font-bold'>Total Discount</div>
                                    <div className='font-bold'>₱ 0.00</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='text-sm font-bold'>Grand Total</div>
                                    <div className='font-bold'>₱ 799.00</div>
                                </div>
                            </div>
                            <div className='flex flex-col border-b-2 border-gray-200 pt-4 pb-3 gap-2'>
                                <p>Coupon</p>
                                <input type='text' placeholder='Enter your coupon here' className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                                <button onClick={handleBack} className='bg-gradient-to-r from-[#57B3E8] to-[#50CDC4] shadow-md text-sm w-full py-2 px-6 text-white'>Verify</button>
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
            </div>
        </div>
      </div>
    </div>
  )
}
