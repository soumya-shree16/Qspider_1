import React from 'react'
import ImageSide from './components/ImageSide'
import Registration from './components/Registration'

const App = () => {
  return (
    <div className='container'>
      <div className="left">
        <ImageSide/>
      </div>
      <div className="right">
        <Registration/>
      </div>
    </div>
  )
}

export default App