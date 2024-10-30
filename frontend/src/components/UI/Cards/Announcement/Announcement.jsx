import React from 'react'
import { Link } from 'react-router-dom';

export default function Announcement({children, ...props}) {


    function localizer(time) {
        const utcDate = new Date(time);
        const day = String(utcDate.getUTCDate()).padStart(2, '0');
        const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
        const year = utcDate.getUTCFullYear();
        return `${day}.${month}.${year}`;
    }

  return (
        <div style={props.style} className={`card cursor-pointer card-hover flex-col-center border-2 border-black-10 rounded-2xl overflow-hidden text-sm ${props.className}`}>

            {/* Image  */}
            <div className="w-full h-40 overflow-hidden flex items-center justify-center">
                <img className='w-full h-40 object-cover' src={props.img} alt="" />
            </div>

            {/* Content */}
            <div className="bg-white w-full p-5">

                <div className='text-gray flex items-center'>
                    <img className='w-8 h-8 rounded-full mr-2' src={props.logo} alt="" />
                    
                    <span>{props.author}</span>
                </div>

                <p className='py-2 font-medium text-black-def'>
                    {children}
                </p>

                <span className='text-gray'>
                    {localizer(props.datetime)}
                </span>

            </div>
        </div>
    )
}
