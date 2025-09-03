import React from 'react'

const Child = (props) => {
  return (
    <div className=' '>
        <img src={props.image} alt="" />
        <div className='pt-6 pl-3'>
            <h1 className='font-semibold'>{props.title}</h1>
        <p className='text-xs text-slate-500 font-semibold'>{props.para}</p>
        <div className='flex'>
           <h3 className='text-teal-600 font-semibold text-2xl pt-2'>{props.price}</h3>
           <h5 className='text-teal-500 font-semibold text-lg pt-2'>{props.room}</h5>
        </div>
        
        </div>
    </div>
  )
}

export default Child