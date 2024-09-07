import React from 'react'

export default function VideoAPI(props) {
  return (
    <video width={props.width} height={props.height} controls>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
  )
}
