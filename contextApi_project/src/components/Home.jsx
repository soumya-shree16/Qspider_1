import React, { createContext, useEffect, useState } from 'react'
import Nav from "./Nav"
import Card from "./Card"

export const Cart=createContext()

const Home = () => {
  const[data,setData]=useState([])
   const[cartitem,setCartitem]=useState(0)
   const[search,setSearch]=useState("")

const fdata=async () => {
  //logic to fetch data from api and update to setData
}
useEffect(()=>{
  fdata()
},[])
  return (
    <div>

        <Cart.Provider value={{cartitem,setCartitem,search,setSearch,data}}>
             <Nav />
             <Card/>
        </Cart.Provider>
    </div>
  )
}

export default Home