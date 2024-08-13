import React, {useState} from 'react'
import classes from "./styles/style.module.css"

export default function Radio(props) {

  const [selected, setSelected] = useState(0);

  const handleChange = (value, index) => {
    props.setValue(value);
    setSelected(index)
  }

  return (
    <div className={classes.radio}>
        {props.items.map((elem, index)=>(
            <button type="button" className={selected == index ? classes.selected : classes.radioItem} key={index} onClick={()=>handleChange(elem.value, index)}>
                {elem.title}
            </button>
        ))}
    </div>
  )
}
