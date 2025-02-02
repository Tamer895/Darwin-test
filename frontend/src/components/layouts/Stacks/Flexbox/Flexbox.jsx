import React from 'react'

export default function Flexbox({children, ...props}) {
  return (
    <div style={{alignItems: props.items, justifyContent: props.justify, flexDirection: props.direction, flexWrap: props.wrap}} className={`flex box-border ${props.className}`}>
      {children}
    </div>
  )
}
