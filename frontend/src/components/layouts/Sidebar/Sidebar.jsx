import React from 'react'
import Flexbox from '@Stacks/Flexbox/Flexbox'
import Block from '@Stacks/Block/Block'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Sidebar(props) {

  const {t} = useTranslation('studio')

  const blocks = [
    {title: t('sidebar.edit_courses'), href: "/editor"},
    {title: t('sidebar.create_courses'), href: "/createcourse"},
    // {title: t('sidebar.give_access'), href: "/giveaccess"},
    {title: t('sidebar.delete_course'), href: "/deletecourse"},
  ]

  return (
    <Flexbox direction="column" items="center" justify="left" className='w-1/5 border p-3 bg-white border-black-10 border-solid rounded-xl'>

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
