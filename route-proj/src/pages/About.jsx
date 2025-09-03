import React from 'react'

const About = () => {
  return (
    <div className=' h-[100vh]  bg-indigo-100 p-32 overflow-hidden flex gap-10'>
        <div className='w-[60%] h-[70vh] '>
            <h1 className='text-5xl px-40 font-bold text-blue-800'>OUR MISSION</h1>
            
                <p className='pt-10 text-xl font-medium text-slate-800'>"My mission as a student is to continuously grow through learning, stay curious, and pursue 
                knowledge with integrity and discipline.I strive to develop the skills and character needed 
                to contribute meaningfully to society, achieve my academic and personal goals,
                  and become a responsible, empathetic, and innovative individual."</p>
            
        </div>
        <div className='w-[40%] h-[70vh] '>
            <img className='rounded-xl h-[60vh]'
            src="https://cdn.pixabay.com/photo/2020/02/18/08/59/board-4858827_1280.jpg" alt="" />
        </div>
    </div>
  )
}

export default About