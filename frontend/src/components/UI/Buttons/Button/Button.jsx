import React from 'react'

export default function Button({children, ...props}) {
  return (
    <button className='standart-button rounded-md' {...props}>
        {children}
    </button>
  )
}
