import React from 'react'

import search from "@media/icons/search.svg";

export default function Search(props) {
  return (
    <form action='' className='flex-center-between thin-border h-11 px-1 rounded-full'>
      <input className='w-96 focus:w-[450px] duration-100 ease-linear pl-3 flex-1 outline-none text-sm' placeholder={props.placeholder} type="search" />

      <button className='flex-center bg-primary-def w-9 h-9 rounded-full duration-150 ease-linear hover:opacity-90 hover:w-16'>
        <i className="fi fi-rr-search mt-1 text-white"></i>
      </button>
    </form>
  )
}
