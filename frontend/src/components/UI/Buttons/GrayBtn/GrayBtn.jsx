import React from 'react'

export default function GrayBtn({children, ...props}) {
  return (
    <button
    {...props}
    className={`flex-center border border-black-10 m-0 p-1 box-border bg-light_bg hover:bg-primary-def ease-linear duration-200 hover:text-white`} 
    >
        {children}
    </button>
  )
}
