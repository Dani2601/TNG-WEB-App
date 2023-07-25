import React, { useMemo } from 'react'
import { useState } from 'react'
import { TDMLocation } from '../../components/Booking/TDMLocation'
import { TDMReserveTicket } from '../../components/Booking/TDMReserveTicket'
import DesertMuseumContainer from '../../components/Container'
import { TDMBookingDetails } from '../../components/Booking/TDMBookingDetails'
import { TDMPaymentDetails } from '../../components/Booking/TDMPaymentDetails'
import { addBooking } from '../../functions/Booking'
import { toast } from 'react-toastify'
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router-dom'
import routes from '../../constants/routes'
import QRcode    from 'qrcode.react'
import { generatePDF } from '../../helper/PDF'
import { sendEmailWithAttachment } from '../../functions/Email'
import { useDispatch } from 'react-redux'
import { setCart } from '../../store/action'
import { useEffect } from 'react'

const dessertID = process.env.REACT_APP_DESSERT_KEY;
const gootopiaID = process.env.REACT_APP_GOOTOPIA_KEY

export function DessertBooking() {
  const [step, setStep] = useState(1)
  const [locationR, setLocationR] = useState('')
  const [ticket, setTicket] = useState('')
  const [pax, setPax] = useState(1)
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('Individual');
  const [qrCode, setQRCode] = useState("default");
  const dispatch = useDispatch()
  const location = useLocation();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(location.state?.step){
      setStep(4)
    }
  }, [location])

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
        setLoading(false)
        // setQRCode(result?.forPDF?.QRCode);
        // setTimeout(() =>{
        //   e?.Items.map((item => {
        //     generatePDF({
        //       InvoiceCode : result?.forPDF?.InvoiceCode,
        //       BusinessUnit : result?.forPDF?.BusinessUnit,
        //       Branch : result?.forPDF?.Branch,
        //       Customer : result?.forPDF?.Customer,
        //       BookingDate : item?.BookingDate,
        //       BookingTime : item?.BookingTime,
        //       NumberOfPass: String(item?.Pax),
        //       TotalPrice : String(item?.TotalPrice),
        //       PDFFile : e?.PDFFile
        //     });
        //   }))
        //   setBookingDate('')
        //   setBookingDate('')
        //   setPax(1)
        //   setTicket('')
        //   setLocationR('')
        //   setStep(1)
        //   sendEmailWithAttachment({Email : result?.forPDF?.Email, Message : `Hello ${result?.forPDF?.Customer}`, Filename: e?.PDFFile});
        //   // toast.success("Successfully added");
        // },3000)
        window.location.href = result.data.invoice_url;
      }
      else{
        setLoading(false)
        toast.error('Failed to submit')
      }
    })
    .catch((e) => {
      setLoading(false)
      toast.error('Something went wrong')
    })
  }

  return (
    <DesertMuseumContainer>
      <QRcode value = {qrCode} id = 'qrcode' className="hidden"/>
      {
        step === 1 &&
        <TDMLocation setStep={setStep} location={locationR} setLocation={setLocationR}/>
      }
      {
        step === 2 &&
        <TDMReserveTicket setStep={setStep} ticket={ticket} setTicket={setTicket} location={locationR}/>
      }
      {
        step === 3 &&
        <TDMBookingDetails setStep={setStep} ticket={ticket} location={locationR}
          setLocation={setLocationR}
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
        <TDMPaymentDetails setStep={setStep} ticket={ticket} location={locationR}     
          pax={pax} setPax={setPax} 
          bookingDate={bookingDate} setBookingDate={setBookingDate}
          bookingTime={bookingTime} setBookingTime={setBookingTime}
          setSubmitData={submit}
          bookingType={selectedOption}
          setLoading={setLoading}
          loading={loading}
        />
      }
    </DesertMuseumContainer>
  )
}
