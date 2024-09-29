import React from 'react'

export default function MainTitle({children, ...props}) {
  return (
    <h1 style={{fontSize: "225%", fontWeight: "900"}} {...props}>
        {children}
    </h1>
  )
}
