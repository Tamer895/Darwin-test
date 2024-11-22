import React, { useState, useEffect } from 'react';
import logo from "@media/images/png/Darwinx2.png";
import Search from '@UI/Inputs/Search/Search';
import { getAccessToken } from '@utils/auth/auth';
import { Link } from "react-router-dom";
import LanguageSwitcher from "@utils/translator/LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import Button from '@UI/Buttons/Button/Button';
import TransBtn from '@UI/Buttons/TransBtn/TransBtn';
import Account from '@UI/Account/Account';

function Header() {
  const { t } = useTranslation('header');
  const [page, setPage] = useState(window.location.pathname);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [hideTop, setHideTop] = useState(false);


  const accessToken = getAccessToken();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Определение направления прокрутки
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      // Скрываем верхнюю часть при прокрутке вниз, показываем при прокрутке вверх
      if (scrollDirection === 'down' && currentScrollPos > 50) {
        setHideTop(true);
      } else if (scrollDirection === 'up') {
        setHideTop(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, scrollDirection]);


  const links = [
    {
      title: t('links.my_edu'),
      path: '/my_education',
    },
    {
      title: t('links.courses'),
      path: '/courses',
    },
    {
      title: t('links.bulletin_board'),
      path: '/bulletin_board',
    },
    {
      title: t('links.studio'),
      path: '/createcourse',
    }
  ];


  return (
    <header className="w-full fixed bg-white top-0 z-40 ">
      {/* Нижняя часть (она будет фиксирована, занимает всё место) */}
      <div className="w-full">
        {/* Верхняя часть хедера, которая скрывается */}
        <div className={`h-16 flex-center-between bg-white px-5 transition-transform duration-300 ${hideTop ? '-translate-y-full' : 'translate-y-0'} fixed top-0 left-0 w-full`}>
          <div className="overflow-hidden h-16 flex-center">
            <Link to="/">
              <img style={{ height: "65px" }} src={logo} alt="" />
            </Link>
          </div>

          <div>
            <Search placeholder={t('search')} />
          </div>

          <div className="flex-center-between">
            <LanguageSwitcher />

            {accessToken == null ? (
              <div className="flex items-center ml-5">
                <Link to="/login"><TransBtn>{t('login')}</TransBtn></Link>
                <Link to="/step1"><Button style={{ marginLeft: "10px" }}>{t('signup')}</Button></Link>
              </div>
            ) : (
              <div className="flex items-center">
                {/* <i className="fi fi-rr-bell text-2xl mt-2 mx-4 text-gray"></i> */}
                <Account />
              </div>
            )}
          </div>
        </div>

        {/* Нижняя часть хедера, которая остаётся на месте и занимает место верхней при её скрытии */}
        <div className={`flex items-center justify-start w-full border-b bg-white border-black-10 transition-all duration-300 ${hideTop ? 'mt-0 shadow-md' : 'mt-16'}`}>
          <div className='flex-center-between'>
            {links.map((elem, index) => (
              <a className='flex flex-col items-center' key={index} href={elem.path}>
                <button 
                  onClick={() => setPage(elem.path)} 
                  style={page === elem.path ? { borderBottomWidth: '3px' } : { borderBottomWidth: "0" }}
                  className={`h-14 px-6 hover:text-primary-def ease-linear duration-200 text-gray ${elem.path === page ? 'font-medium text-primary-def border-white' : ''}`}
                >
                  {elem.title}
                </button>
                {elem.path == page ? <div className='w-full h-[3px] bg-primary-def rounded-ss-full rounded-se-full'></div>  : ""}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
