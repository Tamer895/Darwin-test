import React, { useEffect } from 'react'
import Connection from './Conditions/Connection';

export default function Provider() {

  const list = [
    <Connection/>
  ];


  return (
    <div id="alertProvider" className='w-full'>
      {list.map((item, index) => (
        <div className='w-full' key={index}>
            {item}
        </div>
      ))}
    </div>
  )
}
