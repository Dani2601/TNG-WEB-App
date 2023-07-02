import React, { useState } from 'react'
import './cart.css'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import routes from '../../constants/routes'

export default function Cart() {
    
    const { cart } = useSelector(state => state.record);
    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate(routes.DessertBooking, {state: {step: true}})
    };
    
    return (
        <div className="cart"  onClick={handleCartClick}>
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
