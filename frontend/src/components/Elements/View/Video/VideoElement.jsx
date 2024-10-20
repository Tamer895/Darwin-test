import React from 'react'
import Video from '@UI/Media/Video/Video'

export default function VideoElement(props) {
  return (
    <div className={`w-full mb-20 rounded-2xl cursor-pointer ease-linear duration-100 ${props.is_active ? "" : "hover:scale-105"}`}>
      <h1 className="font-bold text-3xl mb-5">{props.title}</h1>
      <Video src={props.video} width="100%" height="400px" />
    </div>
  )
}
