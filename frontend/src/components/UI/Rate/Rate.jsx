import React from 'react'
import Rating from '@mui/material/Rating'

export default function Rate({...props}) {
  return (
    <Rating
      name="simple-controlled"
      precision={0.5}
      {...props}
    />
  )
}
