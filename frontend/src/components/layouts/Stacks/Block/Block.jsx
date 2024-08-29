import React from 'react'

export default function Block({children, ...props}) {
  return (
    <div className={`w-full ${props.className}`}>
      {children}
    </div>
  )
}
