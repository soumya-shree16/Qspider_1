
import './App.css'
import Left from "./components/Left"
import Right from "./components/Right"

function App() {
  

  return (
    <div className='container'>
       <div className='left'>
        <Left/>
       </div>
       <div className='right'>
        <Right/>
       </div>
    </div>
  )
}

export default App
