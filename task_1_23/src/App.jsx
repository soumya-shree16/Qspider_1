import react from "react"
const username="soumya"
const useremail="soumyashree@12"
const phone=96685
const home="bbsr"
const stream=false
const age=null
const experience=undefined

const App=()=>{
    return(
     <div>
        <h1 id="my">Hello  Welcome</h1>
        <h3>my name is :{username}</h3>
        <h3>my email is :{useremail}</h3>
        <h3>my phone is :{phone}</h3>
        <h3>my home is :{home}</h3>
        <h3>my stream  is :{stream?"mca":"bba"}</h3>
        <h3>my age is:{age??"secret"}</h3>
        <h3>my salary is:{experience??"fresher"}</h3>
     </div>
    )
}

export default App