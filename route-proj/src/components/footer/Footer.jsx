import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-28 bg-slate-900 flex text-white p-10 gap-28'>
        <h4>happy customer</h4>
        <h4>thank you for visiting</h4>
        <FaInstagram />
        <FaSquareTwitter />
        <FaFacebook />

    </div>
  )
}

export default Footer