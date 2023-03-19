import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Home from '../Home';
import routes from '../../constants/routes';
import PageNotFound from './PageNotFound';

export default function AuthenticatedScreens() {
  return (
    <>
        <Helmet>
            <title>Template | Authenticaticated</title>
        </Helmet>
        <Routes>
            <Route path={routes.Home} element={<Home/>}/>
            <Route path={routes.PageNotFound} element={<PageNotFound/>} />
        </Routes>
    </>
  )
}
