import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";

export default function Review({...props}) {
  return (
    <Link to={props.to}>
        <div {...props} className="card card-hover pt-5 flex-col-center border-2 border-black-10 bg-white rounded-2xl overflow-hidden">
            <Avatar sx={{ width: 56, height: 56 }} src={props.avatar} />


            <div className="flex-col-center p-5">
              <span className='text-2xl font-bold mb-3'>{props.name}</span>
              <p align="center" className='text-sm text-gray'>{props.review}</p>
            </div>

            <br />

            <button className='w-full flex-center-between standart-button m-0 py-3 px-5 font-normal'>
              <span>Explore</span>

              <span class="material-symbols-outlined ">
                arrow_forward
              </span>
            </button>
        </div>
    </Link>
  )
}
