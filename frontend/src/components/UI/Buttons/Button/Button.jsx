import React from 'react'

export default function Button({children, ...props}) {
  return (
    <button {...props} className='standart-button rounded-md'>
        {children}
    </button>
  )
}
