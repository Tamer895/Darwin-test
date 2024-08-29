import React from 'react'
import "./styles/style.css"
import Button from "@UI/Buttons/Button/Button"
import TransBtn from "@UI/Buttons/TransBtn/TransBtn"
import { useTranslation } from 'react-i18next'

import {Link} from "react-router-dom"

import studyIcon from "@media/icons/undraw/study.svg"

export default function Welcome() {
  const { t } = useTranslation('home');

  return (
    <div className="welcome px-[10%]">
      <div className="w-1/2 flex-col items-start">

        <h1 className='font-black text-5xl'>{t('welcome.title1')}<span className='text-primary-def underline'>Darwin</span>{t('welcome.title2')}</h1>

        <p className='text-gray text-md my-7'>{t('welcome.description')}</p>


        <div className="buttons flex items-center">

            <Link className='btn' to="/login">
              <TransBtn icon="arrow_forward">
                {t('welcome.login')}
              </TransBtn>
            </Link>

            <Link className='btn' to="/step1">
              <Button>{t('welcome.signup')}</Button> 
            </Link>
        </div>       
      </div>

      <div className="">
        <img width={400} src={studyIcon} alt="" />
      </div>
    </div>
  )
}
