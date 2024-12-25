import React from 'react'

export default function RoundedBtn({children, ...props}) {
  return (
    <button className='standart-button rounded-full bg-opacity-85' {...props}>
        {children}
    </button>
  )
}
