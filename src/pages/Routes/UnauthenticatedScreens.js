import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";
import routes from '../../constants/routes';
import PageNotFound from './PageNotFound';
import LandingDesert from '../LandingDesert';
import { DessertBooking } from '../Booking/DessertBooking';

export default function UnauthenticatedScreens() {
  return (
    <>
        <Helmet>
            <title>Template | Unauthenticated</title>
        </Helmet>
        <Routes>
          <Route path={routes.LandingDesert} element={<LandingDesert/>} />
          <Route path={routes.DessertBooking} element={<DessertBooking/>} />
          <Route path={routes.PageNotFound} element={<PageNotFound/>} />
        </Routes>
    </>
  )
}
