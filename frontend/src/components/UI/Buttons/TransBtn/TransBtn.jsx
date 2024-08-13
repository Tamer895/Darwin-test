import React from 'react'

export default function TransBtn({children, ...props}) {
  return (
    <button className='trans-button rounded-md' {...props}>
        {children}
    </button>
  )
}
