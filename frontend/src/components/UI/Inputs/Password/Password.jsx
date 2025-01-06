import React, {useState} from 'react'

export default function TextInput({ ...props }) {
    const [type, setType] = useState("password")


    function show(currentType) {
      if(currentType == "text") {
        setType("password")
      }
      else {
        setType("text")
      }
    }

  return (
    <div className="flex items-center justify-center">
        <input type={type} className='w-full h-12 px-4 text-sm outline-none border-input_border  border focus:border-2 rounded-md focus:border-primary-def placeholder:text-black-50' {...props} />
        <button type='button' onClick={()=>show(type)} className='flex-center ml-1 h-12 px-4 text-sm outline-none border-input_border border focus:border-2 rounded-md focus:border-primary-def placeholder:text-black-50'>
          {type=="text" ? <span class="material-symbols-outlined text-gray">visibility</span> : <span class="text-gray material-symbols-outlined">visibility_off</span>}
        </button>
    </div>
  )
}
