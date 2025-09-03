import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex ps-52 gap-48 pt-8 text-slate-50 bg-transparent  top-0 fixed'>
        <div>
            <h1 className='text-3xl'>CayoBeach</h1>
        </div>
        <div>
            <ul className='flex gap-12'>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>Habitaclones</li>
                <li className='hover:underline'>Servicious</li>
                <li className='hover:underline'>Sobre nostrous</li>
                <li className='hover:underline'>Contacts</li>
            </ul>
        </div>
        <div className='flex gap-4'>
            <IoSearchOutline  className=''/>
            <h3>Espahol</h3>
        </div>
    </div>
  )
}

export default Navbar