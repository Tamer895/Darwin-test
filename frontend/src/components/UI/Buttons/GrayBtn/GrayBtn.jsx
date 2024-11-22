import React from 'react'

export default function GrayBtn({children, ...props}) {
  return (
    <button
    {...props}
    className={`flex-center border rounded-full border-black-10 m-0 p-1 box-border bg-light_bg hover:bg-[#e1e7ea] ease-linear ${props.className}`} 
    >
        {children}
    </button>
  )
}
