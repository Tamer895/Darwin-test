import React from 'react'
import {Link} from 'react-router-dom'

export default function InformCard(props) {

  return (
    <Link to={props.to}>
        <div style={{...props.style, borderTopWidth: '3px',}} className="border-primary-def pt-3">

            <h1 className='text-xl text-black-def font-medium mt-1 mb-2'>{props.title}</h1>

            <p style={{fontSize: 12}} className='text-gray'>{props.desc}</p>
        </div>
    </Link>
  )
}
