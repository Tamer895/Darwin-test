import React, { useState, useEffect } from 'react'
import classes from "./styles/style.module.css"

export default function Radio(props) {

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(props.value === undefined ? 0 : props.items.findIndex(item=>item.value === props.value))
  },[]);

  const handleChange = (value, index) => {
    props.setValue(value);
    setSelected(index)
  }

  return (
    <div className={`${classes.radio} ${props.className}`}>
        {props.items.map((elem, index)=>(
            <button type="button" className={selected == index ? classes.selected : classes.radioItem} key={index} onClick={()=>handleChange(elem.value, index)}>
                {elem.label}
            </button>
        ))}
    </div>
  )
}
