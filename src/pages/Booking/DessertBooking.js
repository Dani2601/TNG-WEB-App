import React, { useMemo } from 'react'
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
import QRcode    from 'qrcode.react'
import { generatePDF } from '../../helper/PDF'
import { sendEmailWithAttachment } from '../../functions/Email'
import { useDispatch } from 'react-redux'
import { setCart } from '../../store/action'

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
  const [selectedOption, setSelectedOption] = useState('Individual');
  const [qrCode, setQRCode] = useState("default");
  const dispatch = useDispatch()

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  const total = useMemo(() => {
    if(ticket){
      let price = ticket?.Price
      return price * pax
    }
    return 0
  }, [ticket, pax])

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
        dispatch(setCart([]))
        toast.success('Successfully added')
        setQRCode(result?.forPDF?.QRCode);
        setTimeout(() =>{
          generatePDF({
            InvoiceCode : result?.forPDF?.InvoiceCode,
            BusinessUnit : result?.forPDF?.BusinessUnit,
            Branch : result?.forPDF?.Branch,
            Customer : result?.forPDF?.Customer,
            BookingDate : e?.BookingDate,
            BookingTime : e?.BookingTime,
            NumberOfPass: String(e?.Pax),
            TotalPrice : String(e?.TotalPrice),
            PDFFile : e?.PDFFile
          });
          sendEmailWithAttachment({Email : result?.forPDF?.Email, Message : `Hello ${result?.forPDF?.Customer}`, Filename: e?.PDFFile});
          
          toast.success("Successfully added");
        },3000)
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
      <QRcode value = {qrCode} id = 'qrcode' className="hidden"/>
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
          setLocation={setLocation}
          pax={pax} setPax={setPax} 
          bookingDate={bookingDate} setBookingDate={setBookingDate}
          bookingTime={bookingTime} setBookingTime={setBookingTime}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          total={total}
        />
      }
      {
        step === 4 &&
        <TDMPaymentDetails setStep={setStep} ticket={ticket} location={location}     
          pax={pax} setPax={setPax} 
          bookingDate={bookingDate} setBookingDate={setBookingDate}
          bookingTime={bookingTime} setBookingTime={setBookingTime}
          setSubmitData={submit}
          bookingType={selectedOption}
        />
      }
    </DesertMuseumContainer>
  )
}
