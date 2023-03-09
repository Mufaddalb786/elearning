import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../User/Shared/Footer'
import Header from '../User/Shared/Header'

const UserLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserLayout