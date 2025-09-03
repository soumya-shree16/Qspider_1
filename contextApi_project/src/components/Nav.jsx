import React, { useContext, useState } from 'react'
import {Cart} from "./Home"
import { FaShoppingCart } from "react-icons/fa";


const Nav = () => {
    const {cartitem,search,setSearch,data}=useContext(Cart)
    const[category,setCategory]=useState([])

const handleInput=(e)=>{
   setSearch(e.target.value)
   const filteritems=data.filter((item)=>item.includes(e.target.value))
   setSearch(filteritems)

}

  return (
    <div className='nav'>
        <h1>Navbar</h1>
      <input type="text" placeholder='search here....' className='input' value={search} onChange={handleInput}/>

      
      <select  id="dropdown" onChange={handleInput}>
        <option value=""></option>
        <option value="All Category">All Category</option>
        
      
      </select>
        <div className="cart">
          <FaShoppingCart size={40} className='icon'/>
          <span>{cartitem}</span>
        </div>
    </div>
  )
}

export default Nav