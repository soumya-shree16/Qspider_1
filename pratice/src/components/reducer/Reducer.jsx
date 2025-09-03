import React, { useEffect, useReducer } from 'react'
import { reducer,initialState } from './reducerdata'
import axios from "axios"
  import {  toast } from 'react-toastify';


const Reducer = () => {
    const[startValue,dispatch]=useReducer(reducer,initialState)

    const fetch=async () => {
        try {
            const {data}=await axios.get("https://api.github.com/users")
            dispatch({type:"success",payload:data})
        } catch(error) {
            dispatch({type:"error",payload:error.message})
            
        }
    }
    useEffect(()=>{
        fetch()
    },[])


    const deleteitem=(user)=>{
        const filterdata = startValue.users.filter((item)=>item.id!==user.id)
        dispatch({type:"removeuser",payload:filterdata})
       toast.error("deleted",{position:"top-center"})
    }

    const addfriend=(user)=>{
        dispatch({type:"friend",payload:user})
        toast.success("sucessfully added",{position:"top-center"})
    }

function checkfriends(user){
    const status=startValue.friends.filter((item)=>item.id===user.id)
    return status.length!==0?true:false
}

  return (
    <div className='main'>
        {
            startValue.users.map((user)=>{
                return(
                  <div key={user.id} className='parent'>
                      <img src={user.avatar_url} alt=""  className='img '/>
                      <h3 className='h3'>{user.login}</h3>
                      <div className='btn'>
                            <button className="fi" onClick={()=>deleteitem(user)}>Delete</button>
                      <button  
                       className={`req ${checkfriends(user)?"sucess":""}`}
                      onClick={()=>addfriend(user)}>Add to Friend</button>
                      </div>
                 
                </div>
                )
                
            })
        }
    </div>
  )
}

export default Reducer