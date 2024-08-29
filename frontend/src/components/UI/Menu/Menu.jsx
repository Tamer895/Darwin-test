import React from 'react'
import classes from "./style/style.module.css";

export default function Menu({children, ...props}) {
  return (
        
        props.isOpen 
        ? <ul className={`${classes.list} ${props.className}`}>{children}</ul> 
        : <a></a>
  )
}
