import React, { useState } from 'react'

const Form = () => {
     const[email,setEmail]=useState("")
     const[password,setPassword]=useState("")
     const[error,setError]=useState("")
     const[conformpassword,setConformpassword]=useState("")
    

    const handleForm=(e)=>{
       e.preventDefault()
       setEmail("")
       setPassword("")
       setError("")
       setConformpassword("")

      
      
       console.log({email,password,conformpassword})
    }

    const handleEmail=(e)=>{
         const{name,value}=e.target
         setEmail(value)
     if (!value.includes('@')) {
      setError("Email must contain '@'");
    }
     else {
      setError("");
      e.target.style.outlineColor="green" // Clear error if valid
    }
  
       
    };

    const handlePass=(e)=>{
       const{name,value}=e.target

       if(name==="password"){
        setPassword(value)
       }
       else if(name === "conformpassword") {
        setConformpassword(value);
        
       }

        if(value.length>6){
            e.target.style.outlineColor="green";
         }
       
         else{
            e.target.style.outlineColor="red";
         }

        //  if(password.value!==conformpassword.value){
        // //    alert("message doesnot match")
        //     //   e.target.style.outlineColor="red"
        //     e.target.style.outlineColor="blue"
        //  }else{
        //     setError("")
           
         
      
    }
  return (
    <div >
        <form onSubmit={handleForm} className='form' >
            <h1 >Form Validation</h1>
            <label htmlFor="email" >Email:</label>
            <input type="text" name="email" id='email' placeholder='enter your email' value={email} onChange={handleEmail}/>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' placeholder='enter password' value={password} onChange={handlePass} />
            <br/>
            <label htmlFor="password">Confirm password:</label>
            <input type="password" name='conformpassword' id='conformpassword' placeholder='enter conform password' value={conformpassword} onChange={handlePass}/>
           
            <br/>
            <button>login</button>
        </form>
         {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  )
}

export default Form