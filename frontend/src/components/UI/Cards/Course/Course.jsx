import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { useTranslation } from 'react-i18next';
import RoundedBtn from '../../Buttons/RoundedBtn/RoundedBtn';

export default function Course(props) {

  const [t] = useTranslation('course');


  const truncatedText = props.name.length > 40 ? props.name.slice(0, 40) + '...' : props.name;

  const chips = props.categories;

//   console.log(chips)

  const langs = {
    en: 'English',
    ru: 'Русский',
    kz: 'Қазақша',
  }

  return (
    <a className={`box-border p-0 m-0 ${props.className}`} style={props.style} href={props.to}>

        <div className="w-full box-border card card-hover flex-col-center border-2 border-black-10 rounded-2xl overflow-hidden text-sm">

            {/* Image  */}
            <div className="w-full bg-white h-52 p-2 overflow-hidden flex items-center justify-center border-0">
                {props.img == undefined ? <div className='w-full h-full bg-black-10 border-0 rounded-[10px] object-cover'></div> : <img className='w-full h-full border-0 rounded-[10px] object-cover' src={props.img} alt="" />}
                
                {/* <button className="absolute top-3 right-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 py-2 px-3">Save</button> */}
            </div>

            {/* Content */}
            <div className="bg-white w-full p-2">

                <div className="w-full p-2">
                    <div className="flex items-center">
                        <Avatar sx={{ width: 30, height: 30 }} src={props.avatar} />
                        
                        <span className='ml-2 text-gray'>{props.username}</span>

                        {props.is_verified ? <span style={{fontSize: 15}} className="material-symbols-rounded ml-1 text-primary-def">
                        verified
                        </span> : ""}
                    </div>

                    <p className='font-medium mt-3 mb-2 text-md text-black-def'>{truncatedText}</p>

                    <span className='text-sm text-black-50'>{t(`levels.${props.level}`)} - {langs[props.language]}</span>

                    {props.id == undefined ? "" :
                    <div className='mt-[10px]'>
                        <span className='text-sm text-primary-def'>ID: {props.id}</span>
                    </div>
                    }

                    <div className="flex-col">
                        <div className="flex items-center mb-3 mt-2">
                            {/* <span className='mr-1 text-primary-def font-medium'>{props.rating}</span> */}
                            {/* <Rating size="small" precision={0.5} name="read-only" value={props.rating} readOnly /> */}
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
                                label={elem} 
                                size="small" 
                            />
                        ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </a>
  )
}
