import React, { useEffect, useState } from 'react'
import { TDMModalBooking } from '../Modal/TDMModalBooking'
import { getTicketGootopia } from '../../functions/Tickets'
import { useDispatch, useSelector } from 'react-redux'
import { DessertTicketCard } from '../Card'
import { ConfirmationCartModal } from '../Modal/ConfirmationCartModal'
import { setCart } from '../../store/action'
import routes from '../../constants/routes'
import { useNavigate } from 'react-router-dom'

export function TDMReserveTicket({setStep, ticket, setTicket, location}) {
    const [showModal, setShowModal] = useState(false)
    const { user, cart } = useSelector(state => state.record) 
    const [tickets, setTickets] = useState([])
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleBack(){
        if(cart.length > 0){
            setVisible(true)
        }
        else{
            setStep(1)
        }
    }
    
  function handleNext() {
    if(user?.id){
      setShowModal(true);
    }
    else{
      navigate(routes.Login)
    }
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
          user?.id || '123', process.env.REACT_APP_DESSERT_KEY,
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
                    tickets?.sort((a, b) => a.Name.localeCompare(b.Name)).map((item, index) => <DessertTicketCard key={index} item={item} ticket={ticket} setTicket={setTicket}/>)
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
