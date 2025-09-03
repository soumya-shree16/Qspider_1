import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-24 bg-gradient-to-tl from-blue-600 via-gray-800 to-slate-900 text-white shadow-2xl flex'>
       <div className="w-[30%]  px-20 flex items-center justify-between h-full px">
        <h1 className='text-4xl font-bold text-indigo-400'><Link to="/">soumya</Link></h1>
       </div>
       <div className='w-[60%] h-full flex items-center justify-evenly px-[320px]'>
        <ul className='flex gap-20 text-lg font-medium '>
            <li className="hover:text-red-500 cursor-pointer transition duration-200"><NavLink  to="/">Home</NavLink></li>
            <li className="hover:text-red-500 cursor-pointer transition duration-200"><NavLink to="/about">About</NavLink></li>
            <li className="hover:text-red-500 cursor-pointer transition duration-200"><NavLink to="/contact">Contact</NavLink></li>
            <li className="hover:text-red-500 cursor-pointer transition duration-200"><NavLink to="/service">Service</NavLink></li>
        </ul>
       </div>
       <div className='mt-8 '>
        <button className='text-lg bg-white w-20 h-8 text-blue-800 font-semibold rounded-xl hover:bg-red-500 hover:text-white'><Link to="/register">Register</Link></button>
       </div>
    </div>
  )
}

export default Navbar