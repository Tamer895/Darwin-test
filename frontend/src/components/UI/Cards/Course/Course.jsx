import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

export default function Course(props) {


  const truncatedText = props.name.length > 40 ? props.name.slice(0, 40) + '...' : props.name;

  const chips = props.categories;

  return (
    <Link to={props.to}>
        <div style={props.style} className="card card-hover flex-col-center border-2 border-black-10 rounded-2xl overflow-hidden text-sm">

            {/* Image  */}
            <div className="w-full h-40 overflow-hidden flex items-center justify-center">
                <img className='w-full h-40 object-cover' src={props.img} alt="" />
            </div>

            {/* Content */}
            <div className="bg-white w-full p-2">

                <div className="w-full p-2">
                    <div className="flex items-center">
                        <Avatar sx={{ width: 30, height: 30 }} src={props.avatar} />
                        
                        <span className='ml-2 text-gray'>{props.username}</span>

                        <span style={{fontSize: 15}} className="material-symbols-rounded ml-1 text-primary-def">
                        verified
                        </span>
                    </div>

                    <p className='font-medium mt-3 mb-2 text-md text-black-def'>{truncatedText}</p>

                    <span className='text-sm text-black-50'>{props.level}</span>

                    <div className="flex-col">
                        <div className="flex items-center mb-3 mt-2">
                            <span className='mr-1 text-primary-def font-medium'>{props.rating}</span>
                            <Rating size="small" precision={0.5} name="read-only" value={props.rating} readOnly />
                        </div>

                        <div className="flex items-center flex-wrap">
                        {chips.map((elem, index) => (
                            <Chip 
                                key={index}
                                sx={{
                                    backgroundColor: 'white', // Replace with your custom color
                                    color: '#4F46E5', // Replace with your desired text color
                                    border: "1px solid #4F46E5",
                                    marginRight: "5px",
                                    marginBottom: "5px",
                                }}
                                variant="outlined" 
                                label={elem.label} 
                                size="small" 
                            />
                        ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
