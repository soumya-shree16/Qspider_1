import React, { useState } from 'react'

const Form = () => {
  const [button,setButton]=useState("")
  const [check,setCheck]=useState([])
  const [songs,setSongs]=useState("")

    const handleForm=(e)=>{
          e.preventDefault()
          console.log({button,check,songs})
          setButton("")
          setCheck([])
          setSongs("")
    }
    const handleRadio=(e)=>{
         setButton(e.target.value)
    }
    const handleCheck=(e)=>{
         const{value,checked}=e.target
         if(checked){
            setCheck([...check,value])
         }
         else{
            setCheck(check.filter((food)=>food!==value))
         }
    }

    const handleSelect=(e)=>{
       setSongs(e.target.value)
    }

    
  return (
    <div>
        <form action="" onSubmit={handleForm}>
        <h1>FORM TASK 19 MAY</h1>
        <label htmlFor="button" className='lang'>Languange:</label>
        <br/>
        <input type="radio" name="button" id="" checked={button==="English"} onChange={handleRadio} value="English"/>English
        <input type="radio" name="button" id="" checked={button==="Hindi"} onChange={handleRadio} value="Hindi"/>Hindi
        <input type="radio" name="button" id="" checked={button==="Bengali"} onChange={handleRadio} value="Bengali"/>Bengali
        <input type="radio" name="button" id="" checked={button==="Odia"} onChange={handleRadio} value="Odia"/>Odia
        <input type="radio" name="button" id="" checked={button==="Telugu"} onChange={handleRadio} value="Telugu"/>Telugu
        <input type="radio" name="button" id="" checked={button==="Tamil"} onChange={handleRadio} value="Tamil"/>Tamil
        <input type="radio" name="button" id="" checked={button==="Kannada"} onChange={handleRadio} value="Kannada"/>Kannada
        <input type="radio" name="button" id="" checked={button==="Marathi"} onChange={handleRadio} value="Marathi"/>Marathi
        <input type="radio" name="button" id="" checked={button==="Urdu"} onChange={handleRadio} value="Urdu"/>Urdu
        <input type="radio" name="button" id="" checked={button==="Assamiya"} onChange={handleRadio} value="Assamiya"/>Assamiya
        <input type="radio" name="button" id="" checked={button==="Parsy"} onChange={handleRadio} value="Parsy"/>Parsy
        <input type="radio" name="button" id="" checked={button==="Sambalpuri"} onChange={handleRadio} value="Sambalpuri"/>Sambalpuri
        <input type="radio" name="button" id="" checked={button==="Malayalam"} onChange={handleRadio} value="Malayalam"/>Malayalam
        <input type="radio" name="button" id="" checked={button==="manipuri"} onChange={handleRadio} value="manipuri"/>manipuri
        <input type="radio" name="button" id="" checked={button==="Gujurati"} onChange={handleRadio} value="Gujurati"/>Gujurati
        <input type="radio" name="button" id="" checked={button==="Punjabi"} onChange={handleRadio} value="Punjabi"/>Punjabi
        <input type="radio" name="button" id="" checked={button==="Sindhi"} onChange={handleRadio} value="Sindhi"/>Sindhi
        <input type="radio" name="button" id="" checked={button==="Sindhi"} onChange={handleRadio} value="Nepali"/>Nepali
        <input type="radio" name="button" id="" checked={button==="Santali"} onChange={handleRadio} value="Santali"/>Santali
        <input type="radio" name="button" id="" checked={button==="Dogri"} onChange={handleRadio} value="Dogri"/>Dogri
    <br/>
    <br/>
    <label htmlFor="check" onSubmit={handleForm} className='lang'>Favourite Foods:</label>
    <br/>
        <input type="checkbox" value="biryani" onChange={handleCheck} checked={check.includes("biryani")}/>Biryani
        <input type="checkbox" value="chicken mughlai" onChange={handleCheck} checked={check.includes("chicken mughlai")}/>chicken mughlai
        <input type="checkbox" value="chicken lollipop" onChange={handleCheck} checked={check.includes("chicken lollipop")}/>chicken lollipop
        <input type="checkbox" value="chicken momo" onChange={handleCheck} checked={check.includes("chicken momo")}/>chicken momo
        <input type="checkbox" value="gupchup" onChange={handleCheck} checked={check.includes("gupchup")}/>gupchup
        <input type="checkbox" value="maggie" onChange={handleCheck} checked={check.includes("maggie")}/>maggie
        <input type="checkbox" value="prawn malai" onChange={handleCheck} checked={check.includes("prawn malai")}/>prawn malai
        <input type="checkbox" value="mushroom" onChange={handleCheck} checked={check.includes("mushroom")}/>mushroom
        <input type="checkbox" value="brocoli soup" onChange={handleCheck} checked={check.includes("brocoli soup")}/>brocoli soup
        <input type="checkbox" value="chilly garlic noodles" onChange={handleCheck} checked={check.includes("chilly garlic noodles")}/>chilly garlic noodles
        <br/>
        <br/>
        <label htmlFor="songs" className='lang'>Favourite Song:</label>
        <select name="song" id="song" onChange={handleSelect}>
            <option value=""></option>
            <option  value="romantic">romantic</option>
            <option  value="party">party</option>
            <option  value="sad">sad</option>
            <option  value="wedding song">wedding song</option>
            <option  value="happy ">happy </option>
        </select>
 <br/>
 <br/>
        
   <button className='btn'>submit</button>
   </form>
    </div>
    
  )
}

export default Form