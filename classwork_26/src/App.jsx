import React from 'react'
import Side from './components/Side'
import Home from "./components/Home"


const App = () => {
  return (
    <div className='main'>
        <div className='left'><Home/></div>
       <div className='right'><Side/>
       </div>
       </div>
  )
}

export default App