import React, {useState} from 'react'
import CenteredForm from '@layouts/Stacks/Form/CenteredForm/CenteredForm'

import CreateText from './CreateText';
import CreateVideo from './CreateVideo';


export default function CreateElement() {

  const [isOpen, setIsOpen] = useState(false);
  



  return (
    <>
        <button onClick={()=>setIsOpen(!isOpen)} className='w-full text-primary-def text-sm py-2 rounded-md hover:bg-primary-5 ease-linear duration-100'>
            Add element
        </button>

        {isOpen && <CenteredForm>
            <CreateElementForm setState={setIsOpen}/>
        </CenteredForm>}
        
    </>
  )
}



function CreateElementForm(props) {

    const [currentElement, setCurrentElement] = useState(0);


    const buttons = [
        {text: "Text", onClick: ()=>setCurrentElement(0)},
        {text: "Video", onClick: ()=>setCurrentElement(1)},
    ]

    return (
       <div className='w-full'>

            <div className="w-full flex items-center justify-between">
              <h1 className='text-xl font-bold'>Create element</h1>

              <button className='w-10 h-10 rounded-full hover:bg-light_bg ease-linear duration-100 flex-center' onClick={()=>props.setState(false)} type="button">
                <span className="material-symbols-outlined text-gray text-2xl">
                close
                </span>
              </button>
            </div>

            <br />

            <div className="w-full flex">
                {buttons.map((e, index) => (
                    <button key={index} onClick={e.onClick} className={`flex-1 py-3 hover:bg-primary-5 ${index==currentElement ? "text-primary-def border-b-2 border-primary-def" : ""}`}>{e.text}</button>
                ))}
            </div>

            <br />

            
            {currentElement == 0 ? <CreateText/> : <CreateVideo/>}

       </div>
    );
}
