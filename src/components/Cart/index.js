import React, { useState } from 'react'
import './cart.css'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import routes from '../../constants/routes'

const DESSERT_KEY = process.env.REACT_APP_DESSERT_KEY;
const GOOTOPIA_KEY = process.env.REACT_APP_GOOTOPIA_KEY;
const TFR_KEY = process.env.REACT_APP_TFR_KEY;
const TIS_KEY = process.env.REACT_APP_INFLATABLE_KEY;
const BAKEBE_KEY = process.env.REACT_APP_BAKEBE_KEY;

const business_unit = {
    [BAKEBE_KEY]: routes.BookingBakebe,
    [GOOTOPIA_KEY]: routes.BookingGootopia,
    [TFR_KEY]: routes.BookingTFR,
    [DESSERT_KEY]: routes.DessertBooking,
    [TIS_KEY]: routes.BookingInflatable
}

export default function Cart() {
    
    const { cart } = useSelector(state => state.record);
    const navigate = useNavigate()

    const handleCartClick = () => {
        if(cart.length > 0){
            const checkBusiness = cart[0]?.BusinessUnitID
            navigate(business_unit[checkBusiness], {state: {step: true}})
        }
    };
    
    return (
        <div className={`cart ${cart.length > 0 && 'cursor-pointer'}`} onClick={handleCartClick}>
            {
                cart?.length > 0 &&
                (
                    cart?.length < 10 ? (
                    <div className="badge">
                        {cart.length}
                    </div>
                    )
                    :
                    <div className="badge">
                        9+
                    </div>
                )
            }
            <BsFillCartFill/>
        </div>
    )
}
