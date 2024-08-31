import React from 'react'

export default function Form({children, ...props}) {
  return (
    <form {...props} className={`flex flex-col items-start ${props.className}`} onSubmit={props.onSubmit}>
      {children}
    </form>
  )
}
