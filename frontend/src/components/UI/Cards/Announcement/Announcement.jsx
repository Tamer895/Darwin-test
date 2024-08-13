import React from 'react'
import { Link } from 'react-router-dom';

export default function Announcement({children, ...props}) {
  return (
      <Link to={props.to}>
        <div style={props.style} className="card card-hover flex-col-center border-2 border-black-10 rounded-2xl overflow-hidden text-sm">

            {/* Image  */}
            <div className="w-full h-40 overflow-hidden flex items-center justify-center">
                <img className='w-full h-40 object-cover' src={props.img} alt="" />
            </div>

            {/* Content */}
            <div className="bg-white w-full p-5">

                <span className='text-gray'>
                    {props.author}
                </span>

                <p className='py-5 font-medium text-black-def'>
                    {children}
                </p>

                <span className='text-gray'>
                    {props.datetime}
                </span>

            </div>
        </div>
      </Link>
    )
}
