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

export default function UnauthenticatedScreens() {
  return (
    <>
      <Helmet>
        <title>Template | Unauthenticated</title>
      </Helmet>
      <Routes>
        {/* Gootopia */}
        <Route path={routes.LandingGootopia} element={<LandingGootopia />} />
        <Route path={routes.ObstaclesGootopia} element={<Obstacles />} />
        <Route path={routes.PackagesGootopia} element={<Packages />} />
        <Route path={routes.FaqsGootopia} element={<FAQS />} />
        <Route path={routes.ContactsGootopia} element={<Contacts />} />



        {/* DessertMusuem */}
        <Route path={routes.LandingDesert} element={<LandingDesert />} />
        <Route path={routes.DessertBooking} element={<DessertBooking />} />
        <Route path={routes.PageNotFound} element={<PageNotFound />} />
      </Routes>
    </>
  );
}
