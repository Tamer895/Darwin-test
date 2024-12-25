import React from 'react'
import Divider from '@components/UI/Divider/Divider';

export default function Step({children, ...props}) {

  const is_active = props.active == props.number ? true : false;
  const is_finished = props.active > props.number ? true : false;

  return (
    <div {...props} className="w-full flex flex-col">
        <div className='w-full flex items-center'>
            <div className={`w-10 h-10 rounded-full flex-center text-white mr-3 ${is_active ? "bg-primary-def" : `${is_finished ? "bg-green-500" : "bg-black-25"}`}`}>
                <h1 className='font-bold'>{props.number}</h1>
            </div>

            <h2 className={`${is_active ? "text-black-def" : "text-black-25"}`}>{props.title}</h2>
        </div>
        
        <div className={`w-full pt-5 ${is_active ? "" : "hidden"}`}>
            <Divider />
            <br />
            {children}
        </div>
    </div>
  )
}
