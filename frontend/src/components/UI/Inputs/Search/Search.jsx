import React from 'react'

import search from "@media/icons/search.svg";

export default function Search(props) {
  return (
    <form action='' className='flex-center-between thin-border w-96 h-11 px-1 rounded-full'>
      <input className='pl-3 flex-1 outline-none text-sm' placeholder={props.placeholder} type="search" />

      <button className='flex-center bg-primary-def w-9 h-9 rounded-full transition-75 hover:opacity-90'>
        <i className="fi fi-rr-search mt-1 text-white"></i>
      </button>
    </form>
  )
}
