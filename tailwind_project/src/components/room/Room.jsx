import React from 'react'
import room1 from "../../assets/room1.png"
import Child from './Child'
import room2 from "../../assets/room2.jpg"
import room3 from "../../assets/room3.jpg"

const Room = () => {
    const data=[
        {
            image:room1,
            title:"Wildnerness club at Big ceddar",
            para:"2 barios",
            price:"$816",
            room:"/3 night"
        },
          {
            image:room2,
            title:"Wildnerness club at Big ceddar",
            para:"2 barios",
            price:"$816",
            room:"/5 night"
        },
          {
            image:room3,
            title:"Wildnerness club at Big ceddar",
            para:"2 barios",
            price:"$816",
            room:"/6 night"
        }
    ]
  return (
    <div>
        <div className='p-32  ps-[450px]'>
            <h1 className='ps-16 text-5xl font-bold'>Habitacioes de lujo</h1>
            <p className='ps-[120px] pt-4 text-lg'>Vea todo nuestro catalogo de habitacioes</p>
        </div>
        <div className='flex ps-60 gap-16'>
            {
                data.map((item,index)=>(
                    
                        <Child key={index}   
                            image={item.image}
                            title={item.title}
                            para={item.para}
                            price={item.price}
                            room={item.room}/>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Room