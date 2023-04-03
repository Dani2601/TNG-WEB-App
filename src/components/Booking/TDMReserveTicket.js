import React, { useState } from 'react'
import { TDMModalBooking } from '../Modal/TDMModalBooking'

export function TDMReserveTicket({setStep}) {
    const [showModal, setShowModal] = useState(false)

    function handleBack(){
        setStep(1)
    }
    
    function handleNext(){
        setShowModal(true)
    }

    function handleCloseModal(){
        setShowModal(false)
    }

    function handleProceed(){
        setStep(3)
        setShowModal(false)
    }
    
    return (
        <div className='w-full py-10 flex justify-center'>
        <TDMModalBooking showModal={showModal} handleCloseModal={handleCloseModal} setStep={setStep} handleProceed={handleProceed}/>
        <div className='w-[80vw] sm:w-[50vw]'>
            <div className='text-center flex gap-6 flex-col justify-center items-center'>
                <p className='text-[30px] text-[#FF98C3]'>Select Location</p>
                <p className='text-sm'>Please note that our TWO HOUR TOUR starts every 15 minutes.<br/>Guests are required to come 20 minutes before their scheduled slot<br/>for processing of tickets.</p>
            </div>
            
            <div className='flex flex-col sm:flex-row py-10 gap-4'>
                <div className='relative text-center leading-6 text-sm w-full sm:w-1/3'>
                    <div className='bg-[#FF73B9] p-6'>
                        <div class="absolute top-5 px-8 right-[-26px] bg-white transform rotate-45">
                            <span class="text-xs font-bold">SAVE P100!</span>
                        </div>
                        <p className='text-lg'>Online Promo - SAVEP100!</p>
                        <p className='mb-4 mt-4'>Book ONLINE and come on<br/>
                            any day!
                        </p>
                        <p className='font-bold mb-4'>
                        *For advance reservation<br/>
                        only, not applicable for<br/>
                        walk-ins.
                        </p>
                        <p className='font-bold'>
                        *Advisable to bring socks for<br/>
                        the Jelly Room
                        </p>
                        <p className='mt-10'>
                        FROM<br/>
                        <span className='text-lg font-bold'>PHP 699.00</span>
                        </p>
                    </div>
                </div>
                <div className='w-full sm:w-1/3 bg-[#F9DCED] p-6 text-center leading-6 leading-6 text-sm'>
                    <p className='text-lg'>Top Fans are FREE!!!</p>
                    <p className='mt-4 mb-4'>
                    Top Fans are FREE + One paying friend.<br/><br/>
                    <span className='mt-4'>TERMS AND CONDITIONS:</span><br/>
                    ● Valid on Weekdays & WEEKENDS<br/> 
                    ● NOT applicable on HOLIDAYS <br/>
                    ● Guests must PRESENT a SCREENSHOT of Badge. (NO NEED TO HAVE TOP FAN BADGE UPON ARRIVAL.)<br/>
                    ● For online bookings/ advance reservation<br/>
                    ● NOT APPLICABLE FOR WALK-INS <br/>
                    ● Cannot be used in conjunction with any other existing promotions
                    </p>
                    <p className='font-bold mb-4'>
                    *Advisable to bring socks for the Jelly Room
                    </p>
                    <p>
                    NOTE: All tickets that will be booked on Special Holiday and Holiday will be automatically rescheduled and the management has right to refuse their reservation.
                    </p>
                    <p className='mt-10'>
                    FROM<br/>
                    <span className='text-lg font-bold'>PHP 799.00</span>
                    </p>
                </div>
                
                <div className='w-full sm:w-1/3 bg-[#F9DCED] p-6 text-center leading-6 leading-6 text-sm'>
                    <p className='text-lg'>Top Fans are FREE!!!</p>
                    <p className='mt-4 mb-4'>
                    Top Fans are FREE + One paying friend.<br/><br/>
                    <span className='mt-4'>TERMS AND CONDITIONS:</span><br/>
                    ● Valid on Weekdays & WEEKENDS<br/> 
                    ● NOT applicable on HOLIDAYS <br/>
                    ● Guests must PRESENT a SCREENSHOT of Badge. (NO NEED TO HAVE TOP FAN BADGE UPON ARRIVAL.)<br/>
                    ● For online bookings/ advance reservation<br/>
                    ● NOT APPLICABLE FOR WALK-INS <br/>
                    ● Cannot be used in conjunction with any other existing promotions
                    </p>
                    <p className='font-bold mb-4'>
                    *Advisable to bring socks for the Jelly Room
                    </p>
                    <p>
                    NOTE: All tickets that will be booked on Special Holiday and Holiday will be automatically rescheduled and the management has right to refuse their reservation.
                    </p>
                    <p className='mt-10'>
                    FROM<br/>
                    <span className='text-lg font-bold'>PHP 799.00</span>
                    </p>
                </div>
            </div>
            <div className='flex justify-center gap-5'>
                <button onClick={handleBack} className='shadow-md text-sm py-2 px-6 border-[#FF98C3] border-2 text-[#FF98C3]'>Back</button>
                <button onClick={handleNext} className='shadow-md text-sm py-2 px-6 bg-[#FF98C3] text-white'>Proceed to Booking</button>
            </div>
        </div>
    </div>
    )
}
