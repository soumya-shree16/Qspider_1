import React from 'react'
import diprella from "../components/diprella.png"
import {FaEye} from "react-icons/fa";



const Home = () => {
  return (
    <div>
        <div className='logo'>
                <img id="img"src={diprella}></img>
            </div>
        <div className='home'>
        <h1 id="ho-h1">Login to your Account</h1>
        <p id="ho-p">login  using  social  network</p>
        <div className='icon'>
           <button id='face'>f</button>
           <button id='goo'>G+</button>
           <button id='in'>in</button>
        </div>
        <div className='or'>OR</div>
        <form className='form'>
        <input type="text" placeholder='Email'/>
        
        
        <input type="password" placeholder='password'/><FaEye />
        
       
        <br/>
        <button id='ho-btn'>Sign in</button>
        
        </form>
       
    </div>
    </div>

  )
}

export default Home