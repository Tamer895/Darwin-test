import React from 'react'

export default function InputContainer({children, ...props}) {


  return (
  
    <div className={props.className}>
      <label className='text-sm text-black-def mb-2 font-medium' for={props.for}>{props.title} {props.desc != undefined ? <span className='text-gray font-normal'>({props.desc})</span> : <span></span>}</label><br/>
      {children}
    </div>
  )
}
