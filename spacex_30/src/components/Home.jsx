import React from 'react'
import Navbar from './Navbar'

const Home = (props) => {
  const item=[
    {
      image:"https://spacex1-clone.netlify.app/assets/astronaut-PR2OUO69.jpg",
      title:"UPCOMING LAUNCH",
      name:"STARLINK MISSION",
      btntext:"WATCH"
    },
    {
      image:"https://spacex1-clone.netlify.app/assets/Starlink-Bruuxwb4.jpg",
      title:"UPCOMING LAUNCH",
      name:"STARLINK MISSION",
      btntext:"WATCH"
    },
    {
      image:"https://spacex1-clone.netlify.app/assets/stars-DYuU5mOz.jpg",
      title:"RECENT LAUNCH",
      name:"STARLINK MISSION",
      btntext:"REWATCH"
    },
    {
      image:"https://cdn.pixabay.com/photo/2012/11/28/10/34/rocket-launch-67643_1280.jpg",
      name:"ADVANCING HUMAN SPACEFLIGHT",
      btntext:"LEARN MORE"
    }
  ]
    
  return (
    <div className='home'>
     {item.map((item,index)=>(
      <div key={index} className='card' style={{backgroundImage:`url(${item.image})`}}>
        <div className='text'>
          <p id='para'>{item.title}</p>
          <h1 id='head1'>{item.name}</h1>
          <button id="btn">{item.btntext}</button>
        </div>
      </div>
     ))}
    </div>
  )
}

export default Home