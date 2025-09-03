import React from 'react'
import left from "../../assets/frame1.png"
import { CiCalendar } from "react-icons/ci";
import right from "../../assets/frame2.png"

const Main = () => {
  return (
    <div className='p-40 '>
        <div className=' ps-[400px]'>
            <h1 className='text-5xl font-semibold'>!Disfruta nos Contros</h1>
            <p className='text-base pl-28 pt-2'>Realizamos todo tipos de events</p>
        </div>
        <div className='pt-20 flex gap-20'>
            <img src={left} width={"700px"} alt="" />
            <div className='p-10'>
                <h3 className='text-teal-700 font-semibold'>ae playa noreste</h3>
                <h1 className='text-2xl font-bold'>Tommorrowland Beach</h1>
                <div className='pt-6 text-s text-slate-500'>    <pre >This is beach task i could done</pre> 
                  <pre>This in some hour</pre></div>
             
                    <div className='flex pt-3'>
                         <CiCalendar size={30} color='#0db498' />
                         <p className='text-teal-700 font-semibold'>10 june 2021</p>
                         <p className='text-teal-600'>. per dias</p>
                       
                    </div>
                      <button className='bg-teal-600 mt-9 text-gray-50 w-32 h-10 rounded-2xl shadow-2xl transition-shadow'>Me intersa</button>
            </div>
        </div>
          <div className='pt-20 flex gap-20'>
        
            <div className='p-10 pt-20'>
                <h3 className='text-teal-700 font-semibold'>ae playa noreste</h3>
                <h1 className='text-2xl font-bold'>Tommorrowland Beach</h1>
                <div className='pt-6 text-s text-slate-500'>    <pre >This is beach task i could done</pre> 
                  <pre>This in some hour</pre></div>
             
                    <div className='flex pt-3'>
                         <CiCalendar size={30} color='#0db498' />
                         <p className='text-teal-700 font-semibold'>10 june 2021</p>
                         <p className='text-teal-600'>. per dias</p>
                       
                    </div>
                      <button className='bg-teal-600 mt-9 text-gray-50 w-32 h-10 rounded-2xl shadow-2xl transition-shadow'>Me intersa</button>
            </div>
              <img src={right} width={"700px"} height={"300px"}alt="" />
        </div>
    </div>
  )
}

export default Main