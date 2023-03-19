import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";
import routes from '../../constants/routes';
import Landing from '../Landing';
import PageNotFound from './PageNotFound';

export default function UnauthenticatedScreens() {
  return (
    <>
        <Helmet>
            <title>Template | Unauthenticated</title>
        </Helmet>
        <Routes>
          <Route path={routes.Landing} element={<Landing/>} />
          <Route path={routes.PageNotFound} element={<PageNotFound/>} />
        </Routes>
    </>
  )
}
