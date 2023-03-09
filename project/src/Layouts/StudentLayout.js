import React from 'react'
import{Outlet} from 'react-router-dom'
import Header from '../Student/Shared/Header'
import Footer from '../Student/Shared/Footer'

const StudentLayout = () => {
  return (
    <>
    <Header/>
    student
    <Outlet/>
    <Footer/>
    </>
  )
}

export default StudentLayout