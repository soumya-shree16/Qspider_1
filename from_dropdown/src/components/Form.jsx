import React, { useEffect , useState} from 'react'
import axios from "axios"

const Form = () => {
    const[users,setusers]=useState([])
    const[person,setPerson]=useState("")
    const[filterData,setFilterData]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)

    const fetchData=async()=>{
        try {
            const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        setusers(data)
        } catch (error) {
            console.log(error.message);
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
       
    };

    useEffect(()=>{
        fetchData()
    },[])
    console.log(users)

    const handleInput=(e)=>{
        const {value}=e.target
        setPerson(value)
    }

    useEffect(()=>{
      if(!person){
        setFilterData(users)
      }
      else{
        const result=users.filter((user)=>user.name.includes(person))
        setFilterData(result)
      }
    },[users,person])

    if(loading) return <h1 style={{color:"red"}}> loading..........</h1>
    if(error) return <h1>{error}</h1>


  return (
    <div className='table'>
       <h1>DROPDOWN TASK</h1>
     <label htmlFor="drop" className='label'>users:</label>
    <select  id="drop" onChange={handleInput} className='select'>
        <option value=""></option>
        {
            users.map((user)=>(
               <option key={user.id} value={user.name} className='op'>{user.name}</option>
            ))
        }
    </select>

       <table border={1}>
        <thead>
            <tr className='head'>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>city</th>
            </tr>
        </thead>
        <tbody>
           {
            filterData.length===0?<tr><td colSpan={5}>No data found</td></tr>:filterData.map((user)=>{
                return(
                    <tr key={user.id}>
                         <td>{user.id}</td>
                         <td>{user.name}</td>
                         <td>{user.username}</td>
                         <td>{user.email}</td>
                         <td>{user.address.city}</td>
                    </tr>
                )
})
           } 
        </tbody>
       </table>
    </div>
  )
}

export default Form