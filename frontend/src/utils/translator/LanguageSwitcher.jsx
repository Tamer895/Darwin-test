// src/LanguageSwitcher.js

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/style.css';

const LanguageSwitcher = () => {
  // List of languages
  const langs = {
    en: 'English',
    ru: 'Русский',
    kz: 'Қазақша',
  };

  // Get current language from localStorage or default to 'en'
  const currentLanguage = localStorage.getItem('lng') || 'en';

  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
  const [state, setState] = useState('hidden');

  const languageSwitcherRef = useRef(null);

  // Change language when `currentLanguage` changes
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  // Close dropdown when clicking outside the container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageSwitcherRef.current && !languageSwitcherRef.current.contains(event.target)) {
        setState('hidden');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setState('hidden');
    setSelectedLanguage(newLanguage);
    localStorage.setItem('lng', newLanguage); // Store selected language in localStorage
    i18n.changeLanguage(newLanguage); // Change language in i18next
  };

  return (
    <div className='flex-center-between' ref={languageSwitcherRef}>
      <div
        onClick={state === 'hidden' ? () => setState('') : () => setState('hidden')}
        className='switcher'
      >
        <span className='material-symbols-outlined text-black-70 text-2xl'>language</span>

        <span className='lng'>{langs[selectedLanguage]}</span>

        <span className='material-symbols-outlined'>arrow_drop_down</span>
      </div>

      <ul className={`languages-list ${state}`}>
        <li>
          <button value='en' onClick={handleChange}>
            {langs.en}
          </button>
        </li>
        <li>
          <button value='ru' onClick={handleChange}>
            {langs.ru}
          </button>
        </li>
        <li>
          <button value='kz' onClick={handleChange}>
            {langs.kz}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
