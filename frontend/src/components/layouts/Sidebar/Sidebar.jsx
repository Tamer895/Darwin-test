import React from 'react'
import Flexbox from '@Stacks/Flexbox/Flexbox'
import Block from '@Stacks/Block/Block'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {

  const blocks = [
    {title: "Edit courses", href: "/editor"},
    {title: "Create course", href: "/createcourse"},
    {title: "Course settings", href: "/editor"},
    {title: "Edit courses", href: "/editor"},
  ]

  return (
    <Flexbox direction="column" items="center" justify="left" className='w-1/5 border-2 p-3 bg-white border-black-10 border-solid rounded-xl'>

        {blocks.map((e, index) => (
            <Link className='w-full' key={index} to={e.href}>
              <Block className={`px-5 py-2 rounded-lg ease-linear duration-200 ${parseInt(props.focused) == index ? "bg-primary-def text-white" : "bg-white text-black-def hover:bg-primary-5"}`}>
                <span className='text-sm'>{e.title}</span>
              </Block>
            </Link>
  
        ))}
      
    </Flexbox>
  )
}
