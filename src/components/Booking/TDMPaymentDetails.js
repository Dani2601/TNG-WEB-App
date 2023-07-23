import React from "react";
import { useNavigate } from "react-router-dom";
import { logo, nx, paynamics, paypal, tnglogo } from "../../assets/Dessert";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import { MdRestoreFromTrash } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getBranches } from "../../functions/Branches";
import { format } from "date-fns";
import { CiTrash } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { setCart } from "../../store/action";
import { verifyCouponCode } from "../../functions/Coupon";
import { toast } from "react-toastify";
import { gcash, grabpay } from "../../assets/Payment/ewallet";
import routes from "../../constants/routes";

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

export function TDMPaymentDetails({
  setStep,
  ticket,
  location,
  pax,
  bookingDate,
  bookingTime,
  setSubmitData,
  business,
  bookingType=""
}) {

  const navigate = useNavigate();
  const { user, cart } = useSelector((state) => state.record);
  const [isChecked, setIsChecked] = useState(false);
  const [fullname, setFullname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [grandTotal, setGrandTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const dispatch = useDispatch()
  const [code, setCode] = useState('')

  const total = cart?.reduce((total, item) => total + item.Ticket.Price * item.Pax, 0);

  useEffect(() => {
    setGrandTotal(total - discount)
  }, [total, discount])  

  function handleBack() {
    if (business === "BakeBe") {
      setStep(2);
    } else {
      setStep(2);
    }
  }

  function handleNext() {
    let pdfFileName = `${new Date().valueOf()}/pdf/${new Date().valueOf()}`;
    setSubmitData({
      CustomerID: user?.id,
      BusinessUnitID: cart[0]?.BusinessUnitID,
      BranchID: cart[0]?.Location?.id,
      Items: cart.map((item) => (
        {
          TicketID: item?.Ticket?.id,
          BookingDate: item?.BookingDate,
          BookingTime: item?.BookingTime,
          Pax: 2,
          Status: "Unused"
        }
      )),
      BookingType: bookingType,
      Payment: {
        method: {
          type: 'EWALLET',
          ewallet: {
            channel_code: selectedPaymentMethod,
            channel_properties: {
              success_return_url: `https://localhost:3000${routes.PaymentSuccess}`,
              failure_return_url: `https://localhost:3000${routes.PaymentFailed}`,
            },
          },
          reusability: 'ONE_TIME_USE',
        },
        Discount: discount
      },
      Coupon: coupon?.data?.id || "",
      PDFFile : pdfFileName,  
      TotalPrice: grandTotal,
    });
  }

  useEffect(() => {
    if (user) {
      setFullname(user?.Name);
      setContact(user?.Mobile);
      setEmail(user?.Email);
    }
  }, [user]);

  useEffect(() => {
    if (business === "Gootopia") {
      getBranches(user.id, GOOTOPIA_KEY)
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
      getBranches(user.id, TFR_KEY)
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
      getBranches(user.id, BAKEBE_KEY)
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
      getBranches(user.id, TIS_KEY)
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
      getBranches(user.id, DESSERT_KEY)
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
    verifyCouponCode({
      Code: code,
      BranchID: cart[0].Location.id
    })
    .then((res) => {
      if(res.valid){
        setCoupon(res)
        setCode("")
        toast.success("Coupon Applied");
      }
      else{
        toast.error(res.errorMsg);
      }
    })
    .catch(() => {
      toast.error("Something went wrong");
    })
  }

  useEffect(() => {
    if(coupon){
      
      let discount = coupon?.data?.Discount;
      let qty = coupon?.data?.Quantity;
      let ticketid = coupon?.data?.TicketID
      let discountType = coupon?.data?.Type
      let ticketFee = coupon?.ticket?.Price
      const checkCart = cart?.find((item) => 
        item?.Ticket?.id === coupon?.data?.TicketID && 
        item?.BookingDate === coupon?.data?.BookingDate &&
        item?.BookingTime === coupon?.data?.BookingTime
      )
      const booking = {
        BusinessUnitID: coupon?.ticket?.BusinessUnitID,
        Location: coupon?.ticket?.BranchID,
        Ticket: coupon?.ticket,
        BookingDate: coupon?.data?.BookingDate,
        BookingTime: coupon?.data?.BookingTime,
        Pax: coupon?.data?.Quantity,
        Option: ""
      }
      
      if(checkCart?.Pax < coupon?.data?.Quantity){
        const updatedTickets = cart?.map(ticket => {
          if (ticket?.Ticket?.id === coupon?.data?.TicketID &&
            ticket?.BookingDate === coupon?.data?.BookingDate &&
            ticket?.BookingTime === coupon?.data?.BookingTime
            ) {
            return { ...ticket, Pax: coupon?.data?.Quantity };
          }
          return ticket;
        });
        dispatch(setCart(updatedTickets))
      }
      else{
        if(!checkCart){
          dispatch(setCart([...cart, booking]))
        }
      }
      setDiscount((ticketFee) * qty)
    }
  },[coupon])

  function handleRemoveItem(e){
    dispatch(setCart(cart.filter((_, index) => index !== e)))
    if(cart.length == 0){
      setStep(1)
    }
  }

  function handleCancelCoupon(){
    setDiscount(0)
    setCoupon(null)
    setCode("")
    toast.success("Coupon Removed");
  }

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-[80vw] sm:w-[50vw]">
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
                  placeholder="Full Name"
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
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
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
                />
              </div>
              <div className="border-b-2 border-black pb-4">
                <p className="text-sm">
                  Email Address <small style={{ color: "red" }}>*</small>
                </p>
                <input
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
                />
              </div>
              <div>
                <p className="text-sm font-bold">
                  PAYMENT METHOD: <small style={{ color: "red" }}>*</small>
                </p>
                <div className="flex gap-3 py-3">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPaymentMethod === "GCASH"}
                      onChange={() => setSelectedPaymentMethod("GCASH")}
                    />
                    <img
                      src={gcash}
                      alt="gcash"
                      className="w-16 object-contain rounded-md"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPaymentMethod === "GRABPAY"}
                      onChange={() => setSelectedPaymentMethod("GRABPAY")}
                    />
                    <img
                      src={grabpay}
                      alt="grabpay"
                      className="w-16 object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-[40vw]">
              <div className="shadow-md rounded-md">
                <div className="w-full h-2 bg-gradient-to-r from-[#50CDC4] to-[#57B3E8]" />
                <div className="py-4 px-6">
                  <div className="border-b-2 border-gray-200">
                    <p className="font-bold text-sm mb-2">
                      Location: {cart[0]?.Location?.Name}
                    </p>
                  </div>
                    {
                      cart?.map((item, index) => (
                        <div key={index} className="pt-4 pb-3 border-b-2 border-gray-200">
                          <div className="flex justify-between items-center">
                            <p className="font-bold text-sm">{item?.Ticket?.Name}</p>
                            <FaTrash size={10} color="red" className="cursor-pointer" onClick={() => handleRemoveItem(index)}/>
                          </div>
                          <div className="flex justify-between py-2">
                            <div className="flex flex-col">
                              <p className="text-xs">Type of ticket: {item?.Ticket?.Type}</p>
                              <p className="text-xs">
                                Date:{" "}
                                {item?.BookingDate ? format(new Date(item?.BookingDate), "MM/dd/yyyy") : ""}
                              </p>
                              <p className="text-xs">Time: {item?.BookingTime}</p>
                              <p className="text-xs">No. of pass: {item?.Pax}</p>
                              {
                                bookingType &&
                                <p className="text-xs">Type: {item?.BookingType}</p>
                              }
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="tex-4xl font-bold text-right">
                                ₱ {item?.Ticket?.Price}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
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
                      value={code}
                      placeholder="Enter your coupon here"
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full shadow-md py-2 px-4 border-2 border-gray-400 mb-3"
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
                  <p className="text-xs">
                    Please note that our TWO HOUR TOUR starts every 15 minutes.
                    Guests are required to come 20 minutes before their
                    scheduled slot for processing of tickets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-5 py-5 w-60 self-center">
            {/* <button
              onClick={handleBack}
              className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#51CEC5] text-white"
            >
              Back
            </button> */}
            {selectedPaymentMethod ? (
              <button
                onClick={handleNext}
                className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#58B4E9] text-white"
              >
                Submit
              </button>
            ) : (
              <button
                disabled={true}
                className="shadow-md text-sm w-full sm:w-auto py-2 px-6 bg-[#51CEC5] text-white"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
