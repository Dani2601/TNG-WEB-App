import React from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import routes from "../../constants/routes";
import PageNotFound from "./PageNotFound";
import Login from "../Login/Login";
import LandingDesert from "../LandingDesert";
import { DessertPackages } from "../Package";
import LandingGootopia from "../LandingGootopia";
import { FAQS, Obstacles } from "../../components/Gootopia";
import {
  SelectLocation,
  SelectTicket,
} from "../../components/Gootopia/Booking";
import { DessertBooking } from "../Booking/DessertBooking";
import Packages from "../../components/Gootopia/Packages/Packages";
import Contacts from "../../components/Gootopia/Contacts/Contacts";
import BookOnline from "../../components/Features/BookOnline";
import { GootopiaBooking } from "../Booking/GootopiaBooking";
import LandingTFR from "../TFR/LandingTFR";
import Profile from '../../pages/Profile/Profile.js'
export default function AuthenticatedScreens() {
  return (
    <>
      <Helmet>
        <title>The Next Experience</title>
      </Helmet>
      <Routes>
        {/* DessertMusuem */}
        <Route path={routes.LandingDesert} element={<LandingDesert />} />
        <Route path={routes.Packages} element={<DessertPackages />} />
        <Route path={routes.DessertBooking} element={<DessertBooking/>}/>


        {/* Gootopia */}
        <Route path={routes.LandingGootopia} element={<LandingGootopia />} />
        <Route path={routes.ObstaclesGootopia} element={<Obstacles />} />
        <Route path={routes.PackagesGootopia} element={<Packages />} />
        <Route path={routes.FaqsGootopia} element={<FAQS />} />
        <Route path={routes.ContactsGootopia} element={<Contacts />} />
        {/* <Route path={routes.SelectLocationGootopia} element={<SelectLocation />} />
        <Route path={routes.SelectTicketGootopia} element={<SelectTicket />} /> */}
        <Route path={routes.BookingGootopia} element={<GootopiaBooking />} />

        {/* {TFR} */}
        LandingTFR
        <Route path={routes.LandingTFR} element={<LandingTFR />} />

        <Route path={routes.Profile} element={<Profile />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
