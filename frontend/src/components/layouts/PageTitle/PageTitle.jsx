import React from 'react'

export default function PageTitle(props) {
  return (
    <div className="w-full bg-blue-def py-16 px-12">
      <div className="">

        <h1 className='font-bold text-white text-4xl mb-4'>{props.title}</h1>   

        <p className='text-white text-md'>{props.text}</p>
      </div>
    </div>
  )
}
