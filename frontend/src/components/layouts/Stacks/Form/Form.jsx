import React from 'react'

export default function Form({children, ...props}) {
  return (
    <form className='flex flex-col items-start' onSubmit={props.onSubmit}>
      {children}
    </form>
  )
}
