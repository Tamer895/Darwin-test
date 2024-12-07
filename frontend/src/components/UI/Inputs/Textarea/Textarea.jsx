import React from 'react'

export default function Textarea({children, ...props}) {
  return (
    <textarea {...props} className={`pt-3 h-12 px-4 text-sm outline-none border focus:border-2 border-input_border rounded-md focus:border-primary-def placeholder:text-black-50 ${props.className}`}>
      {children}
    </textarea>
  )
}
