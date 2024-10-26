import React from 'react'
import "./style.css";

import logo from "@media/images/png/Darwin-rec.png";

export default function Loading() {
  return (
    <div className='fixed z-50 inset-0 flex flex-col items-center justify-center bg-white'>
        <img width={100} src={logo} alt="" />
        <br />
        <div className="loader mx-auto"></div>
    </div>
  )
}
