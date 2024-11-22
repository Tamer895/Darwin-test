import React from 'react'

export default function ArrowBtn({children, ...props}) {
  return (
    <button
    {...props}
    className="w-10 h-10 border border-black-def rounded-full flex-center hover:bg-black-def hover:text-white bg-gray-300 z-10">
      {children}
    </button>
  )
}
