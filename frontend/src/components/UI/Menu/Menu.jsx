import React from 'react'
import classes from "./style/style.module.css";

export default function Menu({children, ...props}) {

  document.addEventListener('click', function(event) {
    const menu = document.getElementById(props.id);

    if (!menu.contains(event.target)) {
      props.onOpen(false)
    }
  });

  return (
        props.isOpen 
        ? <ul id={props.id} className={`${classes.list} ${props.className}`}>{children}</ul> 
        : <a></a>
  )
}
