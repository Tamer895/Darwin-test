import React from 'react'
import classes from "./styles/style.module.css"

import Title from "@UI/Typography/Title/Title"
import AuthHeader from '../Header/AuthHeader/AuthHeader'

import { useTranslation } from 'react-i18next'


export default function Authentication({children, ...props}) {
  const { t } = useTranslation('auth');


  const list = [
    {text: t('list.check1')},
    {text: t('list.check2')},
    {text: t('list.check3')},
    {text: t('list.check4')},
  ]


  return (
    <section className={classes.auth_section}>
        {/* <AuthHeader/> */}


      
        <div className="flex-center bg-white bg-opacity-80 p-8 rounded-xl box-shadow">
            <div style={{width: "400px"}}>
              {children}
            </div>
        </div>



        {/* <div className="flex-1 h-full">
            <div className="w-3/4 bg-white p-10 mt-28 ml-14 rounded-xl box-shadow">
              <Title className="font-semibold text-black-def" size="3">{t('list.title')}</Title>
              <ul className='pt-5 mt-5 border-black-10' style={{borderTopWidth: "1px"}}>
                {list.map((elem, index) => (
                  <li className='flex items-center mb-4 text-gray' key={index}>
                    <span className="material-symbols-outlined text-primary-def mr-3">
                    check
                    </span>
                    {elem.text}
                  </li>
                ))}
              </ul>
            </div>
        </div> */}
    </section>
  )
}
