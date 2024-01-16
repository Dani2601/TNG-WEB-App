import React, { useMemo } from 'react';
import { useState } from 'react';
import { TDMLocation } from '../../components/Booking/TDMLocation';
import { TDMReserveTicket } from '../../components/Booking/TDMReserveTicket';
import DesertMuseumContainer from '../../components/Container';
import { TDMBookingDetails } from '../../components/Booking/TDMBookingDetails';
import { TDMPaymentDetails } from '../../components/Booking/TDMPaymentDetails';
import { addBooking } from '../../functions/Booking';
import { toast } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import QRcode from 'qrcode.react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// ... (other imports)

export function DessertBooking() {
  const [step, setStep] = useState(1);
  const [locationR, setLocationR] = useState('');
  const [ticket, setTicket] = useState('');
  const [pax, setPax] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [selectedOption, setSelectedOption] = useState('Individual');
  const [qrCode, setQRCode] = useState('default');
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { locationParams } = useParams();

  // useEffect(() => {
  //   if (location.state?.step) {
  //     setStep(4);
  //   }
  // }, [location]);

  const handleOptionChange = (e) => {
    setSelectedOption(e);
  };

  useEffect(() => {
    if(locationParams){
      setLocationR(locationParams)
      setStep(2)
    }
    else{
      setStep(1)
    }
  }, [locationParams])

  const total = useMemo(() => {
    if (ticket) {
      let price = ticket?.Price;
      return price * pax;
    }
    return 0;
  }, [ticket, pax]);

  const navigateToNextStep = () => {
    navigate(`/TheDessertMuseum/Booking/${locationR}`);
    setStep(step + 1)
  };

  function submit(e) {
    addBooking(e)
      .then((result) => {
        if (result.valid) {
          window.location.href = result.data.invoice_url;
        } else {
          setLoading(false);
          toast.error(result.errorMsg);
        }
      })
      .catch((e) => {
        setLoading(false);
        toast.error('Something went wrong');
      });
  }

  
  const navigateToLocation = () => {
    navigate(`/TheDessertMuseum/Booking/`);
    setStep(1)
  };

  // Define a common prop object to pass to all step components
  const commonProps = {
    setStep,
    ticket,
    location: locationR,
    setLocation: setLocationR,
    pax,
    setPax,
    bookingDate,
    setBookingDate,
    bookingTime,
    setBookingTime,
    handleOptionChange,
    selectedOption,
    total,
    navigateToNextStep, // Include the common function
    navigateToLocation
  };

  return (
    <DesertMuseumContainer>
      <QRcode value={qrCode} id='qrcode' className='hidden' />
      {step === 1 && <TDMLocation {...commonProps} />}
      {step === 2 && <TDMReserveTicket {...commonProps} setTicket={setTicket} />}
      {step === 3 && <TDMBookingDetails {...commonProps} />}
      {step === 4 && (
        <TDMPaymentDetails
          {...commonProps}
          setSubmitData={submit}
          bookingType={selectedOption}
          setLoading={setLoading}
          loading={loading}
        />
      )}
    </DesertMuseumContainer>
  );
}
