import React from 'react'

export default function TransBtn({children, ...props}) {
  return (
    <button className="trans-button rounded-md flex-center-between" {...props}>
        {children}
        <span className="material-symbols-rounded ml-2">
          {props.icon}
        </span>
    </button>
  )
}
