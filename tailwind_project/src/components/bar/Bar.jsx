import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

const Bar = () => {
  return (
    <div className='flex ps-[360px] gap-32 pt-10 w-[100%] bg-slate-50 h-32 text-sm'>
        <div className='flex gap-4'>
            <CiCalendar size={30} color='#0db498' />
              <span>  <p>Fencha Etrida</p>
                <p className='font-bold'>10 june 2021</p></span>
        </div>
        <div className='flex gap-4'>
            <CiCalendar size={30} color='#0db498' />
                <span><p>Fencha Salide</p>
                <p className='font-bold'>10 junio 2021</p></span>
        </div>
        <div className='flex gap-3'>
            <BsPeople size={30} color='#0db498' />
              <span> <p>Cuartos Para</p>
                <p className='font-bold'>3 persons</p></span>
        </div>
        <div>
          <button className='bg-teal-600 text-gray-50 w-32 h-10 rounded-2xl shadow-2xl transition-shadow font-semibold'>
            Resercer Ahora</button>
         </div> 
    </div>
  )
}

export default Bar