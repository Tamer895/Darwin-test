import React from 'react'

export default function TextInput({ ...props }) {
  return (
    <input {...props} type="text" className={`h-12 px-4 text-sm outline-none border-input_border border focus:border-2 rounded-md focus:border-primary-def placeholder:text-black-50 ${props.className}`} />
  )
}
