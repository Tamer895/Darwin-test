import React from 'react'

function Content({children, ...props}) {
  return (
    <section style={{width: props.width, height: props.height}} className={`flex-center overflow-hidden ${props.className}`}>
      {children}
    </section>
  )
}

export default Content
