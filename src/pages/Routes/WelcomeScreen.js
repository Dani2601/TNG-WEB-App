import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import Profile from "../../pages/Profile/Profile.js";
import Transaction from "../Transaction/Transaction";
import { TFRBooking } from "../Booking/TFRBooking";
import { BakebeBooking } from "../Booking/BakebeBooking";
import LandingBakebe from "../Bakebe/LandingBakebe";
import LandingInflatableIsland from "../LandingInflatableIsland";
import { InflatableBooking } from "../Booking/InflatableBooking";
import Tickets from "../Transaction/Tickets";
import PaymentSuccess from "../Booking/PaymentSuccess";
import PaymentFailed from "../Booking/PaymentFailed";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";

export default function WelcomeScreen() {
    return (
        <>
            <Helmet>
                <title>The Next Experience</title>
            </Helmet>
            <Routes>
                <Route path={routes.Home} element={<Landing />} />

                <Route path={routes.Login} element={<Login />} />
                <Route path={routes.Register} element={<Register />} />

                {/* DessertMusuem */}
                <Route path={routes.LandingDesert} element={<LandingDesert />} />
                <Route path={routes.Packages} element={<DessertPackages />} />
                <Route path={routes.LandingGootopia} element={<LandingGootopia />} />

                <Route path={routes.DessertBookingDefault} element={<DessertBooking />} />
                <Route path={routes.DessertBooking} element={<DessertBooking />} />

                <Route path={routes.BookingGootopiaDefault} element={<GootopiaBooking />} />
                <Route path={routes.BookingGootopia} element={<GootopiaBooking />} />

                <Route path={routes.BookingTFRDefault} element={<TFRBooking />} />
                <Route path={routes.BookingTFR} element={<TFRBooking />} />

                <Route path={routes.BookingInflatableDefault} element={<InflatableBooking />} />
                <Route path={routes.BookingInflatable} element={<InflatableBooking />} />

                <Route path={routes.BookingBakebeDefault} element={<BakebeBooking />} />
                <Route path={routes.BookingBakebe} element={<BakebeBooking />} />

                {/* {TFR} temporary remove */}
                <Route path={routes.LandingTFR} element={<LandingTFR />} />

                {/* {TFR} */}
                <Route path={routes.LandingInflatableIsland} element={<LandingInflatableIsland />} />

                {/* {Bakebe} */}
                <Route path={routes.LandingBakebe} element={<LandingBakebe />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
                <Route path="*" element={<Login />} />
            </Routes>
        </>
    );
}
