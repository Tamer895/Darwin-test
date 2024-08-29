import React from 'react'

export default function TextInput({ ...props }) {
  return (
    <input {...props} className={`h-12 px-4 text-sm outline-none border-input_border border-2 rounded-md focus:border-primary-def placeholder:text-black-50 ${props.className}`} />
  )
}
