import React from 'react'

function Content({children, ...props}) {
  return (
    <div {...props} style={{width: props.width, height: props.height}} className={`flex-center overflow-hidden ${props.className}`}>
      {children}
    </div>
  )
}

export default Content
