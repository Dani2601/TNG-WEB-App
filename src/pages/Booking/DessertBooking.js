import React from 'react'
import { useState } from 'react'
import { TDMLocation } from '../../components/Booking/TDMLocation'
import { TDMReserveTicket } from '../../components/Booking/TDMReserveTicket'
import DesertMuseumContainer from '../../components/Container'

export function DessertBooking() {
  const [step, setStep] = useState(1)
  return (
    <DesertMuseumContainer>
      {
        step == 1 &&
        <TDMLocation setStep={setStep}/>
      }
      {
        step == 2 &&
        <TDMReserveTicket setStep={setStep}/>
      }
    </DesertMuseumContainer>
  )
}
