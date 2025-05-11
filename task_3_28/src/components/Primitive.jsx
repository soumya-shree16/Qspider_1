import React from 'react'
import NonPrimitive from './NonPrimitive'

const Primitive = () => {
   const string="soumya"
   const number=123
   const boolean=true
   const empty="null"
   const $=Symbol
   const bigInt=12.33333333333
  return (
    <div>
      <NonPrimitive datatype={string}/>
      <NonPrimitive datatype={number}/>
      <NonPrimitive datatype={boolean}/>
      <NonPrimitive datatype={empty}/>
      <NonPrimitive datatype={undefined}/>
      <NonPrimitive datatype={$}/>
      <NonPrimitive datatype={bigInt}/>
    </div>
  )
}

export default Primitive