import React from 'react'

import ReactTypingEffect from 'react-typing-effect';

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

        <h1 className=' font-black text-black-def text-[400%] leading-[70px] uppercase'>{t('welcome.title1')}<span className='text-primary-def underline'>Darwin</span><ReactTypingEffect
            text={[`${t('welcome.title2')}`]}
            speed={100}
            eraseSpeed={50}
            typingDelay={200}
            className="text-black-def underline"
            cursor=" "
          /></h1>

        {/* <h1 className='font-black text-black-def text-[400%] leading-[70px] uppercase'>
          
        </h1> */}

        <p className='text-black-def text-md my-7'>{t('welcome.description')}</p>


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

      <div>
        <img width={400} src={studyIcon} alt="" loading='lazy' />
      </div>
    </div>
  )
}
