// src/LanguageSwitcher.js

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./styles/style.css";


const LanguageSwitcher = () => {


  // Languages list
  const langs = {
    "en": "English",
    "ru": "Русский",
    "kz": "Қазақша"
  }


  let currentLanguage = localStorage.getItem('lng');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  });

  const { i18n } = useTranslation();



  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
  const [state, setState] = useState("hidden");



  const handleChange = (event) => {
    setState("hidden")
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('lng', newLanguage); 
    i18n.changeLanguage(newLanguage);
  };


  return (
    <div className='flex-center-between'>
      
 
      <div 
        onClick={ state == "hidden" ? () => setState("") : () => setState("hidden") } 
        className='switcher'
      >
        <span class="material-symbols-outlined text-black-70 text-2xl">
        language
        </span>

        <span className='lng'>{langs[selectedLanguage]}</span>

        <span class="material-symbols-outlined">
          arrow_drop_down
        </span>
      </div>

      <ul className={`languages-list ${state}`}>
        <li>
          <button value="en" onClick={handleChange}>English</button>
        </li>
        <li>
          <button value="ru" onClick={handleChange}>Русский</button>
        </li>
        <li>
          <button value="kz" onClick={handleChange}>Қазақша</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
