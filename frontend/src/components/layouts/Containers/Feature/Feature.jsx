import React from 'react'

export default function Feature({children, ...props}) {
  return (
    <div style={{backgroundColor: props.background}} className={`w-full px-48 flex items-center justify-between my-0 mx-auto ${props.direction}`}>
      <div className="w-1/2">
        <h4 className='font-semibold text-2xl' style={{color: props.color}}>{props.feature}</h4>
        <h1 className='font-semibold text-6xl mt-4 mb-6'>{props.title}</h1>

        <p className='text-gray text-lg font-normal'>{props.text}</p>

        <br />

        {children}
      </div>
      <div className="">
        <img loading='lazy' width="450" src={props.img} alt="" />
      </div>
    </div>
  )
}
