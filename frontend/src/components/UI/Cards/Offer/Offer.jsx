import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/style.css"

export default function Offer(props) {
  return (
    <Link to={props.to}>
      <div style={props.style} className="bg-white flex-col-center card card-hover shadow-lg rounded-2xl overflow-hidden text-sm">
        <div className="w-full flex-col-center">

            {/* Top container */}
            <div className="w-3/4 flex-col-center py-5">
                <span style={{fontSize: 35}} className="material-symbols-outlined text-primary-def">
                  {props.icon}
                </span>

                <h1 className='text-lg font-medium my-2 text-black-def'>{props.title}</h1>

                <p align="center" className='text-gray text-sm'>{props.text}</p>
            </div>


            {/* Bottom container */}
            <div className="w-3/4 flex-col-center py-5 border-top">
                <h1 className='text-lg font-medium text-black-def'>{props.value}</h1>

                <p align="center" className='text-gray text-sm mt-2'>{props.value_text}</p>
            </div>

            {/* Explore Button */}
            <button className='w-full flex-center-between standart-button m-0 py-3 px-5 font-normal'>
              <span>Explore</span>

              <span className="material-symbols-outlined ">
                arrow_forward
              </span>
            </button>
        </div>
      </div>
    </Link>
  )
}
