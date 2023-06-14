import React from 'react'
import { useState } from 'react'
import { TDMLocation } from '../../components/Booking/TDMLocation'
import { TDMReserveTicket } from '../../components/Booking/TDMReserveTicket'
import DesertMuseumContainer from '../../components/Container'
import { TDMBookingDetails } from '../../components/Booking/TDMBookingDetails'
import { TDMPaymentDetails } from '../../components/Booking/TDMPaymentDetails'
import { addBooking } from '../../functions/Booking'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import routes from '../../constants/routes'

const dessertID = process.env.REACT_APP_DESSERT_KEY;
const gootopiaID = process.env.REACT_APP_GOOTOPIA_KEY

export function DessertBooking() {
  const [step, setStep] = useState(1)
  const [location, setLocation] = useState('')
  const [ticket, setTicket] = useState('')
  const [pax, setPax] = useState(1)
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const navigate = useNavigate()

  function submit(e){
    addBooking(e)
    .then((result) => {
      if(result.valid){
        setBookingDate('')
        setBookingDate('')
        setPax(1)
        setTicket('')
        setLocation('')
        setStep(1)
        toast.success('Successfully added')
        if(e?.BusinessUnitID === dessertID){
          navigate(routes.LandingDesert)
        }
        else if(e?.BusinessUnitID === gootopiaID){
          navigate(routes.LandingGootopia)
        }
        else{
          navigate(routes.LandingTFR)
        }
      }
      else{
        toast.error('Failed to submit')
      }
    })
    .catch((e) => {
      console.log(e)
      toast.error('Something went wrong')
    })
  }

  return (
    <DesertMuseumContainer>
      {
        step === 1 &&
        <TDMLocation setStep={setStep} location={location} setLocation={setLocation}/>
      }
      {
        step === 2 &&
        <TDMReserveTicket setStep={setStep} ticket={ticket} setTicket={setTicket} location={location}/>
      }
      {
        step === 3 &&
        <TDMBookingDetails setStep={setStep} ticket={ticket} location={location}     
          pax={pax} setPax={setPax} 
          bookingDate={bookingDate} setBookingDate={setBookingDate}
          bookingTime={bookingTime} setBookingTime={setBookingTime}
        />
      }
      {
        step === 4 &&
        <TDMPaymentDetails setStep={setStep} ticket={ticket} location={location}     
          pax={pax} setPax={setPax} 
          bookingDate={bookingDate} setBookingDate={setBookingDate}
          bookingTime={bookingTime} setBookingTime={setBookingTime}
          setSubmitData={submit}
        />
      }
    </DesertMuseumContainer>
  )
}
