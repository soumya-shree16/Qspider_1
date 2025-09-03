import React from 'react'
import video from "../assets/video2.mp4"

const Contact = () => {
  return (
    <div>
        <div className='bg-indigo-100 w-full h-[100vh] overflow-hidden flex '>
            <div className='w-1/2 h-full'>
               <video className='w-full h-full  ' src={video} autoPlay playsInline loop muted ></video>
            </div>
           <div className="w-1/2 min-h-screen flex items-center justify-center  bg-indigo-100  px-4">
      <div className="w-full max-w-md  p-8 rounded-xl bg-gray-50 shadow-lg border-blue-900">
        <h1 className="text-3xl font-bold mb-6 text-center  text-blue-800">Contact Us</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Name:</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-4 py-2 rounded-md  text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email:</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded-md  text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Your Message:</label>
            <textarea 
              placeholder="Enter your message" 
              rows="4"
              className="w-full px-4 py-2 rounded-md  text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-2 bg-blue-700 hover:bg-indigo-600 transition  rounded-md font-semibold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Contact