import React, { useEffect, useState } from 'react'
import axios from "axios"

const Form = () => {
    const[users,setUsers]=useState([])
    const[error,setError]=useState(null)
    const[person,setPerson]=useState("")
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)


const fetch=async () => {
    try {
        const {data}=await axios.get("https://fakestoreapi.com/products")
        setUsers(data)
        setLoading(false)
    } catch (error) {
        setError(error.message)
        setLoading(false)
    }
    finally{
        setLoading(false)
    }
}

const handleInput=(e)=>{
    setPerson(e.target.value)
}

useEffect(()=>{
    fetch()
},[])

useEffect(()=>{
    if(!person){
        setData(users)
    }else{
        const res=users.filter((item)=>item.title.toLowerCase().includes(person.toLowerCase()))
        setData(res)
    }
},[users,person])

  return (
    <div>
        <input type="search" placeholder='search' value={person}  onChange={handleInput}/>
        <select name="" id="" onChange={handleInput}>
            <option value="">user</option>
            {
                data.map((user)=>(
                    <option key={user.id} value={user.title}>{user.title}</option>
                ))
            }
        </select>
        <table border={1}>
            <thead>
                <tr>
                    <th>id
                    </th>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                </tr>
            </thead>
         <tbody>
            {
                data.length > 0 ? (
                    data.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>{user.category}</td>
                        </tr>
                    ))
                ):(
                    <tr>
                    <td>not found</td>
                    </tr>
                )
            }
         </tbody>
        </table>
    </div>
  )
}

export default Form