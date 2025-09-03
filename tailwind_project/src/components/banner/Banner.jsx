import React from 'react'
import banner from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div className='h-[30vh] w-full bg-cover bg-center text-slate-50 ps-[550px] pt-20' style={{backgroundImage:`url(${banner})`}}>
        <h1 className='text-3xl font-extrabold'>Una super experiencia para cuntar</h1>
        <button className=' w-40 h-9 mt-5 bg-white text-teal-700 ms-40  rounded-2xl font-semibold'>Reservar ahora</button>
    </div>
  )
}

export default Banner