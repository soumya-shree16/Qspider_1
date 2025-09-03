import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from "./components/footer/Footer"

const Start = () => {
  return (
    <div className='w-full h-[100vh] bg-blue-50' >
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Start