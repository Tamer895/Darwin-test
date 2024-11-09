import React, {useState, useEffect} from 'react'

import {useNavigate} from "react-router-dom"

import search from "@media/icons/search.svg";

export default function Search(props) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function AlgoliaSearch() {
   // Algolia search logic goes here
    navigate(`/search/results/${query}`);
  }

  return (
    <form onSubmit={AlgoliaSearch} className='flex-center-between thin-border h-11 px-1 rounded-full'>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} className='w-96 focus:w-[450px] duration-100 ease-linear pl-3 flex-1 outline-none text-sm' placeholder={props.placeholder}/>

      <button type='submit' className='flex-center bg-primary-def w-9 h-9 rounded-full duration-150 ease-linear hover:opacity-90 hover:w-16'>
        <i className="fi fi-rr-search mt-1 text-white"></i>
      </button>
    </form>
  )
}
