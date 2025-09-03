import React, { Fragment, useContext, useState,useEffect } from 'react'
import {Cart} from "./Home"
import axios from "axios"

const Card = ()=>{
    const [product,setProduct]=useState([])
    const {cartitem,setCartitem,search}=useContext(Cart)

    
    
    const data=async()=>{
      const items=await axios.get("https://fakestoreapi.com/products")
      setProduct(items.data)
    }
    
 useEffect(()=>{
    data()
 },[])

const filterData=product.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()));

 console.log(product);

  return (
    <div className='cards'>
        {
           filterData.map((add)=>{
                return(
                    <Fragment key={add.id}>
                        <div className='card'>
                             <img src={add.image} alt={add.title} style={{ width: "150px", height: "150px" }} />
                              <h5>{add.title}</h5>
                              <h3>Rs.{add.price}</h3>
                              <p>{add.category}</p>
                             <button onClick={()=>setCartitem(cartitem+1)}>Add to Card</button>
                             <button id='btn'>Buy now</button>
                        </div>
                       
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default Card