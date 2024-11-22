import React from 'react'

export default function TransBtn({children, ...props}) {
  return (
    <button className="trans-button rounded-full px-7 flex-center-between" {...props}>
        {children}
        <span className={`material-symbols-rounded ${props.icon !== undefined ? "ml-2" : ""}`}>
          {props.icon}
        </span>
    </button>
  )
}
