import React from 'react'
import Navlist from './Navlist'

const Navbar = () => {
   
  return (
    <nav className='nav'>
        <div className="logo"><h1>SpaceX</h1></div>
        <div className="li">
            <ul> 
            <li>FALCON 9</li>
            <li>FALCON HEAVY</li>
            <li>DRAGON</li>
            <li>STARSHIP</li>
            <li>HUMAN SPACEFLIGHT</li>
            <li>RIDESHARE</li>
            <li>STARSHIELD</li>
            <li>STARLINK</li>
        </ul>
        </div>
        <div className="shop">SHOP</div>
    </nav>
  )
}

export default Navbar