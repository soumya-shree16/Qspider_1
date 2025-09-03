import React,{useRef,useState} from 'react'


const Right = () => {
    const nameRef=useRef()
    const positionRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()
    const countryRef=useRef()
    const cityRef=useRef()
    const passwordRef=useRef()
    const confirmRef=useRef()

    const handleForm=(e)=>{
       e.preventDefault()
    }  
    return (
    <div className='right' >
        <h2>Register Form</h2>
        <form onSubmit={handleForm}>
             <div className='form'>
                <div className='grid'>
                  <label htmlFor="name">First Name:</label>
                  <input type="text" id='name' placeholder='enter your first name' ref={nameRef}/>
                </div>
             </div>
        </form>
    </div>
  )
}

export default Right