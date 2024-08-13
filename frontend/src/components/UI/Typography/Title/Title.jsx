import React, {useState} from 'react'

export default function Title({children, ...props}) {
  const list ={
    1: "36px",
    2: "30px",
    3: "24px",
    4: "18px",
    5: "12px",
    6: "4px",
  };

  const size = list[props.size];

  return (
    <h1 className={props.className} style={{fontSize: size}} {...props}>{children}</h1>
  )
}
