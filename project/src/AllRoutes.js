import React from 'react'
import { Routes , Route } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout'
import Dashboard from './Admin/Pages/Dashboard'
import StudentLayout from './Layouts/StudentLayout'
import SHome from './Student/Pages/Home'
import UserLayout from './Layouts/UserLayout'
import Home from './User/Pages/Home'

const AllRoutes = () => {
  return (
    
    <>
        <Routes>
            
            <Route path='' element={<UserLayout/>}>
                <Route path="" element={<Home/>}/>
            </Route>

            
            <Route path='student' element={<StudentLayout/>}>
                 <Route path="" element={<SHome/>}/>
                 
            </Route>

            
            <Route path='admin' element={<AdminLayout/>}>
                <Route path="" element={<Dashboard/>}/>
            </Route>
        </Routes>
    </>
    )
}

export default AllRoutes