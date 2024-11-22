import React from 'react'

export default function RoundedText({children}) {
  return (
      <span className='bg-black-def text-sm text-white rounded-full py-2 px-5'>{children}</span>
  )
}
