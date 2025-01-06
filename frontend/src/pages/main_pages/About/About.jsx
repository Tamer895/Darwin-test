import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import AboutEN from './About_en';
import AboutKZ from './About_kz';
import AboutRU from './About_ru';

export default function About() {
  const { i18n } = useTranslation();
  
  const currentLanguage = localStorage.getItem('lng');;


  if (currentLanguage === 'en') {
    return <AboutEN/>
  }
  else if (currentLanguage === 'ru') {
    return <AboutRU/>
  }
  else if (currentLanguage === 'kz') {
    return <AboutKZ/>
  }
}
