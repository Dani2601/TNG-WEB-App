import React from "react";
import { useNavigate } from "react-router-dom";
import { logo, nx, paynamics, paypal, tnglogo } from "../../assets/Dessert";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import { MdRestoreFromTrash } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getBranches } from "../../functions/Branches";
import { addHours, format, isValid, parse } from "date-fns";
import { CiTrash } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { setCart } from "../../store/action";
import { verifyCouponCode } from "../../functions/Coupon";
import { toast } from "react-toastify";
import { bpi, gcash, grabpay, maya, rcbc, shopeepay, ubp } from "../../assets/Payment/ewallet";
import routes from "../../constants/routes";
import { TCModalContainer } from "../Modal/TermsAndCondition";
import { getBookingsByTicketID } from "../../functions/Tickets";
import { WaiverModalContainer } from "../Modal/Waiver";

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

export function InflatablePaymentDetails({
  setStep,
  ticket,
  location,
  pax,
  bookingDate,
  bookingTime,
  setSubmitData,
  business,
  bookingType="",
  setLoading,
  loading,
  selectedOption=""
}) {

  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.record);

  const [isChecked, setIsChecked] = useState(false);
  const [fullname, setFullname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAccordionClick = (accordionName) => {
    setActiveAccordion(accordionName === activeAccordion ? null : accordionName);
  };

  const [showModal, setShowModal] = useState(false)
  const [coupon, setCoupon] = useState(null);
  const [grandTotal, setGrandTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const dispatch = useDispatch()
  const [code, setCode] = useState('')
  const [reserve, setReserve] = useState([])

  const total = cart?.reduce((total, item) => {
    if(item.ticket.promo === 'Buy 1 Take 1'){
      return total + item.ticket.price * (item.Pax / 2)
    }
    else{
      return total + item.ticket.price * item.Pax
    }
  }, 0);

  useEffect(() => {
    setGrandTotal((total + ((business === 'BakeBe' && selectedOption === 'Share') ? 500 : 0)) - discount)
  }, [total, discount])  

  function handleBack() {
    if (business === "BakeBe") {
      setStep(2);
    } else {
      setStep(2);
    }
  }

  function handleNext() {
    setLoading(true)
    let pdfFileName = `${new Date().valueOf()}/pdf/${new Date().valueOf()}`;

    setSubmitData({
      // CustomerID: user?.id,
      businessUnitId: cart[0]?.BusinessUnitID,
      businessUnitBranchId: cart[0]?.ticket?.businessUnitBranch?.id,
      bookingDate: cart[0]?.BookingDate,
      bookingTimeId: cart[0]?.bookingTimeId,
      pax: cart[0]?.Pax,
      ticketId: cart[0]?.ticket?.id,
      bookingType: 'online',
      // BranchID: cart[0]?.Location?.id,
      // Payment: {
      //   Discount: discount
      // },
      // Coupon: coupon?.data?.id || "",
      // PDFFile : pdfFileName,
      total_price: grandTotal,
      price: total,
      phoneNumber: contact,
      emailAddress: email,
      firstName: fullname?.split(' ')[0],
      lastName: fullname?.split(' ').slice(-1)[0],
      reservation: true,
      paymentMethod: 'zendit',
    });
  }

  useEffect(() => {
    if (user) {
      // setFullname(user?.Name);
      setContact(user?.phone);
      setEmail(user?.email_address);
    }
  }, [user]);

  useEffect(() => {
    if (business === "Gootopia") {
      getBranches(user?.id || '123', GOOTOPIA_KEY)
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(
              locationArray.find((item) => item?.id === location)
            );
          }
        })
        .catch((error) => {
          // Handle error case
        });
    } else if (business === "TFR") {
      getBranches(user?.id || '123', TFR_KEY)
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(
              locationArray.find((item) => item?.id === location)
            );
          }
        })
        .catch((error) => {
          // Handle error case
        });
    } else if (business === "BakeBe") {
      getBranches(user?.id || '123', BAKEBE_KEY)
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(
              locationArray.find((item) => item?.id === location)
            );
          }
        })
        .catch((error) => {
          // Handle error case
        });
    } else if (business === "Inflatable") {
      getBranches(user?.id || '123', TIS_KEY)
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(
              locationArray.find((item) => item?.id === location)
            );
          }
        })
        .catch((error) => {
          // Handle error case
        });
    } else {
      getBranches(user?.id || '123', DESSERT_KEY)
        .then((response) => {
          if (response.valid) {
            // Convert the object into an array
            const locationArray = Object.values(response.data);
            setSelectedLocation(
              locationArray.find((item) => item?.id === location)
            );
          }
        })
        .catch((error) => {
          // Handle error case
        });
    }
  }, []);

  function handleVerify() {
    if(cart.length > 0){
      verifyCouponCode({
        Code: code,
        BranchID: cart[0].Location.id
      })
      .then((res) => {
        if(res.valid){
          setCoupon(res)
          setCode("")
        }
        else{
          toast.error(res.errorMsg);
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
    }
    else{
      toast.error("Invalid Coupon")
      setDiscount(0)
      setCoupon(null)
      setCode("")
    }
  }

  
  useEffect(() => {
    if (ticket?.id && bookingDate) {
      getBookingsByTicketID(
        location,
        ticket?.id,
        format(bookingDate, "yyyy-MM-dd")
      )
        .then((res) => {
          if (res.valid) {
            setReserve(res.data);
          } else {
            setReserve([]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [ticket, bookingDate, location]);

  useEffect(() => {
    try {
      if(coupon && cart.length > 0){
        let discount = coupon?.data?.Discount;
        let qty = coupon?.data?.Quantity;
        let ticketid = coupon?.data?.TicketID
        let discountType = coupon?.data?.Type
        let ticketFee = coupon?.ticket?.Price
        let slotData = null;
        let slot = 0;
  
        const inputTime = parse(coupon?.data?.BookingTime, 'HH:mm', new Date());
        const convertedTime = addHours(inputTime, 24);
        const formattedTime = format(convertedTime, 'hh:mm a');
  
        const checkCart = cart?.find((item) => {
          if(item?.Ticket?.id === coupon?.data?.TicketID && 
            item?.BookingDate === coupon?.data?.BookingDate &&
            item?.BookingTime == formattedTime
            ){
              slotData = item.Ticket.CreatedInterval.find(data => data.timeInterval == formattedTime)
              return item
            }
        }
          // item?.BookingTime === coupon?.data?.BookingTime
        )
  
        const booking = {
          BusinessUnitID: coupon?.ticket?.BusinessUnitID,
          Location: coupon?.ticket?.BranchID,
          Ticket: coupon?.ticket,
          BookingDate: coupon?.data?.BookingDate,
          // BookingEndTime: coupon?.data?.BookingEndTime ? coupon?.data?.BookingEndTime : "",
          BookingTime: formattedTime,
          Pax: coupon?.data?.Quantity,
          Option: ""
        }
  
        if(slotData){
    
          let reservation = reserve?.filter(
            (res) => res.BookingTime === slotData.timeInterval
          );
    
          let cartReserve = cart?.filter(
            (cartItem) =>
              cartItem.BookingTime === slotData.timeInterval &&
              cartItem.Ticket?.id === checkCart?.Ticket?.id
          );
    
          slot = parseInt(slotData.slot) - (reservation.length + cartReserve.length);
          if(slot > 0){
            let remainingSlot = slot - coupon?.data?.Quantity
            if(remainingSlot > 0){
              if(!checkCart){
                dispatch(setCart([...cart, booking]))
                setDiscount((ticketFee) * qty)
                toast.success("Coupon Applied");
              }
              else{
                const updatedTickets = cart?.map(ticket => {
                  if (ticket?.Ticket?.id === coupon?.data?.TicketID &&
                    ticket?.BookingDate === coupon?.data?.BookingDate &&
                    ticket?.BookingTime === formattedTime
                    ) {
                    return { ...ticket, Pax: ticket.Pax + coupon?.data?.Quantity };
                  }
                  return ticket;
                });
                dispatch(setCart(updatedTickets))
                setDiscount((ticketFee) * qty)
                toast.success("Coupon Applied");
              }
            }
            else{
              toast.error("Invalid Coupon")
              setDiscount(0)
              setCoupon(null)
              setCode("")
            }
          }
          else{
            toast.error("Invalid Coupon")
            setDiscount(0)
            setCoupon(null)
            setCode("")
          }
        }
        else{
          dispatch(setCart([...cart, booking]))
          setDiscount((ticketFee) * qty)
          toast.success("Coupon Applied");
        }
      }
    } catch (error) {
      toast.error("Invalid Coupon")
      setDiscount(0)
      setCoupon(null)
      setCode("")
    }
  },[coupon])

  function handleRemoveItem(e){
    dispatch(setCart(cart.filter((_, index) => index !== e)))
    setDiscount(0)
    setCoupon(null)
    setCode('')
    if(cart.length == 0){
      setStep(1)
    }
  }

  useEffect(() => {
    if(cart?.length > 0){
      let itemWithPromo = cart.filter(item => item?.Ticket?.Promo === 'Discount' || item?.Ticket?.Promo === 'Amount to Reach')
      
      const computeDiscount = itemWithPromo?.reduce((total, item) => {
        if(item?.Ticket?.Promo === 'Amount to Reach'){
          return total + ((parseInt(ticket?.PromoValue)) * item.Pax)
        }
        else{
          return total + ((item?.Ticket?.Price * item.Pax) * (parseInt(item?.Ticket?.PromoValue)/100))
        }
      }, 0);

      setDiscount(computeDiscount)
    }
  }, [cart])

  function handleCancelCoupon(){
    setDiscount(0)
    setCoupon(null)
    setCode("")
    toast.success("Coupon Removed");
  }

  function handleCloseModal(){
    setShowModal(false)
  }

  useEffect(() => {
    if(!user?.id){
      navigate(routes.Login)
    }
  }, [])

  console.log(cart)

  return (
    <div className="w-full py-10 flex justify-center">
      { 
        showModal && 
        <TCModalContainer 
          loading={loading} 
          showModal={showModal} 
          handleCloseModal={handleCloseModal} 
          handleProceed={handleNext} 
          business={business}
        /> 
      }
      <div className="w-[80vw] sm:w-[80vw] md:w-[50vw]">
        <div className="text-center flex gap-6 flex-col justify-center items-center">
          <img src={nx} className="w-[60px] object-contain" />
          <img src={tnglogo} className="w-[400px] object-cover" />
        </div>
        <div className="flex flex-col">
          <p className="text-center font-bold text-lg mb-10 mt-5">
            PAYMENT DETAILS
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex p-5 gap-3 flex-col w-full sm:w-[40vw] bg-gradient-to-b from-[#E890A1] via-[#E9959F] to-[#EFC391]">
              <p className="font-bold">Personal Details</p>
              <div>
                <p className="text-sm">
                  Full Name <small style={{ color: "red" }}>*</small>
                </p>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Full Name"
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3 bg-white"
                />
              </div>
              <div>
                <p className="text-sm">
                  Contact Number <small style={{ color: "red" }}>*</small>
                </p>
                <input
                  type="number"
                  value={contact}
                  placeholder="Contact Number"
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3 bg-white"
                  disabled                />
              </div>
              <div className="border-b-2 border-black pb-4">
                <p className="text-sm">
                  Email Address <small style={{ color: "red" }}>*</small>
                </p>
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3 bg-white"
                  disabled                />
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-[40vw]">
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="py-4 px-6">
                  <div className="border-b-2 border-gray-200">
                    <p className="font-bold text-sm mb-2">
                      Location: {cart[0]?.Location}
                    </p>
                  </div>
                    {
                      cart?.map((item, index) => {
                        return(
                          <div key={index} className="pt-4 pb-3 border-b-2 border-gray-200">
                            <div className="flex justify-between items-center">
                              <p className="font-bold text-sm">{item?.Ticket?.ticketName}</p>
                              <FaTrash size={10} color="red" className="cursor-pointer" onClick={() => handleRemoveItem(index)}/>
                            </div>
                            <div className="flex justify-between py-2">
                              <div className="flex flex-col">
                                <p className="text-xs">Type of ticket: {item?.ticket?.ticketType}</p>
                                <p className="text-xs">
                                  Date:{" "} {item?.BookingDate && isValid(new Date(item.BookingDate))
                                  ? format(new Date(item.BookingDate), "MM/dd/yyyy")
                                  : ""}
                                </p>
                                <p className="text-xs">Time:{
                                  item?.Ticket?.SubCategory === 'Entrance' ? `${format(parse(item?.Ticket?.TimeStart, 'HH:mm', new Date()), 'h:mm a')} - ${format(parse(item?.Ticket?.TimeEnd, 'HH:mm', new Date()), 'h:mm a')}` : 
                                  `${item?.BookingTime} ${(item?.BookingEndTime) ? (`- `+ item?.BookingEndTime) : ""}`
                                  }</p>
                                
                                {
                                  item?.Ticket?.Promo === 'Buy 1 Take 1' ?
                                  <div>
                                    <p className="text-xs">No. of pass: {item?.Pax/2} (+{item?.Pax/2})</p>
                                    <p className="text-xs">Promo: <span className="font-semibold">{item?.Ticket?.Promo}</span></p>
                                  </div>
                                  :
                                  (
                                    item?.Ticket?.Promo ?
                                    <div>
                                      <p className="text-xs">No. of pass: {item?.Pax}</p>
                                      <p className="text-xs">Promo: <span className="font-semibold">{item?.Ticket?.Promo === 'Discount' ? `${item?.Ticket?.PromoValue}%` : `₱${item?.Ticket?.PromoValue}`} {item?.Ticket?.Promo}</span></p>
                                    </div>
                                    :
                                    <div>
                                      <p className="text-xs">No. of pass: {item?.Pax}</p>
                                    </div>
                                  )
                                }
                                {
                                  selectedOption &&
                                  <p className="text-xs">Booking Type: {selectedOption}</p>
                                }
                              </div>
                              <div className="flex flex-col items-end">
                                <p className="tex-4xl font-bold text-right">
                                  ₱ {item?.ticket?.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  <div className="flex flex-col border-b-2 border-gray-200 pt-4 pb-3 gap-2">
                    <div className="flex justify-between">
                      <div className="text-sm font-bold">Sub Total</div>
                      <div className="font-bold">₱ {total}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm font-bold">Total Discount</div>
                      <div className="font-bold">₱ {discount}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm font-bold">Grand Total</div>
                      <div className="font-bold">₱ {grandTotal}</div>
                    </div>
                  </div>
                  <div className="flex flex-col border-b-2 border-gray-200 pt-4 pb-3 gap-2">
                    <p>Coupon</p>
                    <input
                      type="text"
                      value={code || (coupon?.data?.Code || "")}
                      disabled={coupon?.data?.Code ? true : false}
                      placeholder="Enter your coupon here"
                      onChange={(e) => setCode(e.target.value)}
                      className={`${coupon?.data?.Code && 'bg-gray-200'} w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3`}
                    />
                    {
                      !coupon ?
                      <button
                      disabled={!code}
                      onClick={handleVerify}
                      className="bg-gradient-to-r from-[#57B3E8] to-[#50CDC4] shadow-md text-sm w-full py-2 px-6 text-white"
                      >
                      Verify
                      </button>
                      :
                      <button
                      onClick={handleCancelCoupon}
                      className="bg-gradient-to-r from-[#57B3E8] to-[#50CDC4] shadow-md text-sm w-full py-2 px-6 text-white"
                      >
                      Cancel
                      </button>
                    }
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="flex justify-center py-4 px-6">
                  {/* <p className="text-xs">
                    Please note that our TWO HOUR TOUR starts every 15 minutes.
                    Guests are required to come 20 minutes before their
                    scheduled slot for processing of tickets.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-5 py-5 w-60 self-center">
            <button
              disabled={cart.length > 0 ? false : true}
              onClick={() => setShowModal(true)}
              className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
