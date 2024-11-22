import React from 'react'

export default function Button({children, ...props}) {
  return (
    <button {...props} className={`standart-button rounded-full px-7 flex-center ${props.className}`}>
        {children}
    </button>
  )
}
