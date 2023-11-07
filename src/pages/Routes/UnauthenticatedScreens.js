import React from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import routes from "../../constants/routes";
import PageNotFound from "./PageNotFound";
import LandingDesert from "../LandingDesert";
import LandingGootopia from "../LandingGootopia";

import { DessertBooking } from "../Booking/DessertBooking";
import { FAQS, Obstacles } from "../../components/Gootopia";
import Packages from "../../components/Gootopia/Packages/Packages";
import SelectLocation from "../../components/Gootopia/Booking/SelectLocation";
import { SelectTicket } from "../../components/Gootopia/Booking";
import { DessertPackages } from "../Package";
import Login from "../Login/Login";
import Contacts from "../../components/Gootopia/Contacts/Contacts";
import Register from "../Register/Register";
import LandingTFR from "../TFR/LandingTFR";
import LandingBakebe from "../Bakebe/LandingBakebe";
import LandingInflatableIsland from "../LandingInflatableIsland";
import { GootopiaBooking } from "../Booking/GootopiaBooking";
import { TFRBooking } from "../Booking/TFRBooking";
import { InflatableBooking } from "../Booking/InflatableBooking";
import { BakebeBooking } from "../Booking/BakebeBooking";

export default function UnauthenticatedScreens() {
  return (
    <>
      <Helmet>
        <title>The Next Experience</title>
      </Helmet>
      <Routes>
        <Route path={routes.Login} element={<Login />} />
        <Route path={routes.Register} element={<Register />} />

        {/* DessertMusuem */}
        <Route path={routes.LandingDesert} element={<LandingDesert />} />
        <Route path={routes.Packages} element={<DessertPackages />} />
        <Route path={routes.LandingGootopia} element={<LandingGootopia />} />

        <Route path={routes.DessertBooking} element={<DessertBooking />} />
        <Route path={routes.BookingGootopia} element={<GootopiaBooking />} />
        <Route path={routes.BookingTFR} element={<TFRBooking />} />
        <Route path={routes.BookingInflatable} element={<InflatableBooking />} />
        <Route path={routes.BookingBakebe} element={<BakebeBooking />} />
        
        {/* {TFR} temporary remove */}
        <Route path={routes.LandingTFR} element={<LandingTFR />} />
        
        {/* {TFR} */}
        <Route path={routes.LandingInflatableIsland} element={<LandingInflatableIsland />} />

        {/* {Bakebe} */}
        <Route path={routes.LandingBakebe} element={<LandingBakebe />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}
