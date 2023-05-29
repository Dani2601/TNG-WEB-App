import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logo, nx, tnglogo } from '../../assets/Dessert'
import { FiTrash, FiTrash2 } from 'react-icons/fi'
import { MdRestoreFromTrash } from 'react-icons/md'
import { useEffect } from 'react'
import { getBranches } from '../../functions/Branches'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { format, parse, setDate } from 'date-fns'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function TDMBookingDetails({setStep, 
    ticket, location, 
    pax, setPax, 
    bookingDate, setBookingDate, 
    bookingTime, setBookingTime,
    business
}) {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.record)
  const [selectedLocation, setSelectedLocation] = useState('')
  const [intervals, setIntervals] = useState([])



  function handleBack(){
    navigate(2)
  }

  function handleNext(){
    setStep(4)
  }

  useEffect(() => {
    if(business === "Gootopia"){
        getBranches(user.id, "f98233d6-e9eb-4ef6-ae94-e179f954e542")
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(locationArray.find(item => item?.id === location))
          }
        })
        .catch((error) => {
          // Handle error case
        });
    } else{
        getBranches(user.id, "26cc2c6c-bc0d-40d6-99b4-e8d0d8e0e583")
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(locationArray.find(item => item?.id === location))
          }
        })
        .catch((error) => {
          // Handle error case
        });
    }
  }, []);

  useEffect(() => {
    setIntervals(ticket?.CreatedInterval.map((item) => {
        // const time24HourFormat = format(parse(item.timeInterval, 'hh:mm aa', new Date()), 'HH:mm');
        return {
            "value": item.timeInterval,
            "label": `${item.timeInterval} - ${item.slot} slot(s)`
        }
    }))
  }, [])

  const allowedDays = ["Monday", "Tuesday", "Wednesday"];

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
                        <span className='mr-2 text-sm'>{ticket?.Name}</span>
                        <FiTrash2 color='red'/>
                    </div>
                    <div>
                        <p className='text-sm'>NUMBER OF PASSES</p>
                        <input type='number' onChange={(e) => setPax(e.target.value)} defaultValue={1} min={1} className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'/>
                    </div>
                    <div>
                        <p className='text-sm'>PICK A DATE</p>
                        <DatePicker
                            selected={bookingDate}
                            onChange={date => setBookingDate(date)}
                            className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'
                            filterDate={date => {
                                const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                                return allowedDays.includes(day);
                            }}
                            value={bookingDate ? format(bookingDate, 'MM/dd/yyyy') : ''}
                        />
                    </div>
                    <div>
                        <p className='text-sm'>PICK A BOOKING HOUR</p>
                        <select onChange={(e) => setBookingTime(e.target.value)} className='w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3'>
                            <option>Select a time</option>
                            {
                                intervals?.length > 0 &&
                                intervals.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='flex flex-col w-full sm:w-[40vw]'>
                    <div className='shadow-md rounded-md'>
                        <div className='w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]'/>
                        <div className='py-4 px-6'>
                            <div className='border-b-2 border-gray-200'>
                                <p className='font-bold text-sm mb-2'>Location: {selectedLocation?.Name}</p>
                                <p className='font-bold text-sm mb-3'>Type Of Ticket: {ticket?.Type}</p>
                            </div>
                            <div className='pt-4 pb-3 border-b-2 border-gray-200'>
                                <p className='font-bold text-sm'>{ticket?.Name}</p>
                                <div className='flex justify-between py-2'>
                                    <div className='flex flex-col'>
                                        <p className='text-xs'>Date: {bookingDate ? format(bookingDate, 'MM/dd/yyyy') : ''}</p>
                                        <p className='text-xs'>Time: {bookingTime}</p>
                                        <p className='text-xs'>No. of pass: {pax}</p>
                                    </div>
                                    <div className='flex items-ebd'>
                                        <p className='tex-4xl font-bold'>₱ {ticket?.Price}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between pt-4 pb-3 border-b-2 border-gray-200'>
                                <div className='text-sm font-bold'>Total</div>
                                <div className='font-bold'>₱ {ticket?.Price}</div>
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
              <button onClick={handleNext} 
              disabled={!bookingDate || !bookingTime || pax === 0} className='shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white'>Next</button>
              <button onClick={handleNext}
              className='shadow-md text-sm w-full sm:w-auto  py-2 px-6 bg-[#E992A1] text-white'>Add More</button>
            </div>
        </div>
      </div>
    </div>
  )
}
