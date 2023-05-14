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
import Contacts from "../../components/Gootopia/Contacts/Contacts";
import SelectLocation from "../../components/Gootopia/Booking/SelectLocation";
import { SelectTicket } from "../../components/Gootopia/Booking";
import { DessertPackages } from "../Package";

export default function UnauthenticatedScreens() {
  return (
    <>
      <Helmet>
        <title>The Next Experience</title>
      </Helmet>
      <Routes>
        {/* DessertMusuem */}
        <Route path={routes.LandingDesert} element={<LandingDesert />} />
        <Route path={routes.DessertBooking} element={<DessertBooking />} />
        <Route path={routes.Packages} element={<DessertPackages />} />
        
        {/* Gootopia */}
        <Route path={routes.LandingGootopia} element={<LandingGootopia />} />
        <Route path={routes.ObstaclesGootopia} element={<Obstacles />} />
        <Route path={routes.PackagesGootopia} element={<Packages />} />
        <Route path={routes.FaqsGootopia} element={<FAQS />} />
        <Route path={routes.ContactsGootopia} element={<Contacts />} />
        <Route path={routes.SelectLocationGootopia} element={<SelectLocation />} />
        <Route path={routes.SelectTicketGootopia} element={<SelectTicket />} />

        <Route path={routes.PageNotFound} element={<PageNotFound />} />
      </Routes>
    </>
  );
}
