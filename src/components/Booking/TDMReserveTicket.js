import React, { useEffect, useState } from 'react'
import { TDMModalBooking } from '../Modal/TDMModalBooking'
import { getTicketGootopia } from '../../functions/Tickets'
import { useDispatch, useSelector } from 'react-redux'
import { DessertTicketCard } from '../Card'
import { ConfirmationCartModal } from '../Modal/ConfirmationCartModal'
import { setCart } from '../../store/action'

export function TDMReserveTicket({setStep, ticket, setTicket, location}) {
    const [showModal, setShowModal] = useState(false)
    const { user, cart } = useSelector(state => state.record) 
    const [tickets, setTickets] = useState([])
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    function handleBack(){
        if(cart.length > 0){
            setVisible(true)
        }
        else{
            setStep(1)
        }
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

    useEffect(() => {
        getTicketGootopia(
          user.id,
          "26cc2c6c-bc0d-40d6-99b4-e8d0d8e0e583",
          location
        )
          .then((response) => {
            if (response.valid) {
                setTickets(response.data);
            } else {
            }
          })
          .catch();
      }, [location, user]);

    function handleCart(){
        if(cart.length > 0){
            dispatch(setCart([]))
        }
        setStep(1)
    }

    return (
        <div className='w-full py-10 flex justify-center'>
        <ConfirmationCartModal showModal={visible} handleCloseModal={() => setVisible(false)} handleProceed={handleCart}/>
        <TDMModalBooking showModal={showModal} ticket={ticket} handleCloseModal={handleCloseModal} setStep={setStep} handleProceed={handleProceed}/>
        <div className='w-[80vw] sm:w-[90vw]'>
            <div className='text-center flex gap-6 flex-col justify-center items-center'>
                <p className='text-[30px] text-[#FF98C3]'>Select Ticket</p>
                <p className='text-sm'>Please note that our TWO HOUR TOUR starts every 15 minutes.<br/>Guests are required to come 20 minutes before their scheduled slot<br/>for processing of tickets.</p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 py-10'>
                {
                    tickets.length > 0 ?
                    tickets?.map((item, index) => <DessertTicketCard key={index} item={item} ticket={ticket} setTicket={setTicket}/>)
                    :
                    <div>No available Tickets yet.</div>
                }
            </div>
            <div className='flex justify-center gap-5'>
                <button onClick={handleBack} className='shadow-md text-sm py-2 px-6 border-[#FF98C3] border-2 text-[#FF98C3]'>Back</button>
                <button onClick={handleNext} disabled={!ticket} className='shadow-md text-sm py-2 px-6 bg-[#FF98C3] text-white'>Proceed to Booking</button>
            </div>
        </div>
    </div>
    )
}
