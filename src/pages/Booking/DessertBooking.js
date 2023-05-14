import React from 'react'
import { useState } from 'react'
import { TDMLocation } from '../../components/Booking/TDMLocation'
import { TDMReserveTicket } from '../../components/Booking/TDMReserveTicket'
import DesertMuseumContainer from '../../components/Container'
import { TDMBookingDetails } from '../../components/Booking/TDMBookingDetails'
import { TDMPaymentDetails } from '../../components/Booking/TDMPaymentDetails'

export function DessertBooking() {
  const [step, setStep] = useState(1)
  const [location, setLocation] = useState('')
  return (
    <DesertMuseumContainer>
      {
        step == 1 &&
        <TDMLocation setStep={setStep} location={location} setLocation={setLocation}/>
      }
      {
        step == 2 &&
        <TDMReserveTicket setStep={setStep}/>
      }
      {
        step == 3 &&
        <TDMBookingDetails setStep={setStep}/>
      }
      {
        step == 4 &&
        <TDMPaymentDetails setStep={setStep}/>
      }
    </DesertMuseumContainer>
  )
}
