import { useEffect } from "react"
import React from 'react'

export default function IsAuthenticated({children}) {

  useEffect(()=>{
    const user_id = localStorage.getItem('user_id');
    if (user_id == null) {
      window.location.href = '/step1';
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
