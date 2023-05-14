import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet";
import routes from '../../constants/routes';
import PageNotFound from './PageNotFound';

export default function AuthenticatedScreens() {
  return (
    <>
      <Helmet>
          <title>The Next Experience</title>
      </Helmet>
      <Routes>
          <Route path={routes.PageNotFound} element={<PageNotFound/>} />
      </Routes>
    </>
  )
}
