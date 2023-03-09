import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Admin/Shared/Header'
import Footer from '../Admin/Shared/Footer'


const AdminLayout = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
    )
}

export default AdminLayout