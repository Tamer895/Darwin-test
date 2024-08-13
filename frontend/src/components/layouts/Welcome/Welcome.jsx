import React from 'react'
import "./styles/style.css"
import Button from "@UI/Buttons/Button/Button"
import TransBtn from "@UI/Buttons/TransBtn/TransBtn"
import { useTranslation } from 'react-i18next'

export default function Welcome() {
  const { t } = useTranslation('home');

  return (
    <div data-aos="fade-up" className="welcome">
      <div className="w-1/2 flex-col-center">

        <h1 align="center" className='font-black text-5xl'>{t('welcome.title1')}<span className='text-primary-def underline'>Darwin</span>{t('welcome.title2')}</h1>

        <p className='text-gray text-md my-7' align="center">{t('welcome.description')}</p>


        <div className="buttons">
            <TransBtn>{t('welcome.login')}</TransBtn>
            <Button>{t('welcome.signup')}</Button> 
        </div>       
      </div>
    </div>
  )
}
