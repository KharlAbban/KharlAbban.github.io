import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from "../components"

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout