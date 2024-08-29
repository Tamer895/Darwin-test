import React, {useState, useEffect} from 'react'
import logo from "@media/images/png/Darwinx2.png";
import Search from '@UI/Inputs/Search/Search';

import { getAccessToken } from '@utils/auth/auth'

import { Link } from "react-router-dom";

import LanguageSwitcher from "@utils/translator/LanguageSwitcher";

import { useTranslation } from 'react-i18next';

import Button from '@UI/Buttons/Button/Button';
import TransBtn from '@UI/Buttons/TransBtn/TransBtn';

import Account from '@UI/Account/Account';




function Header() {
  const { t } = useTranslation('header');

  useEffect(() => {
    setPage(window.location.pathname)
  });


  const [page, setPage] = useState();

  const accessToken = getAccessToken();


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
      path: '/studio',
    }
  ];



  return (
    <header className='w-full fixed flex-col-center bg-white z-10 top-0'>

      {/* Up stage */}
      <div className="w-full h-16 flex-center-between bg-white px-5">

        
        <div className="overflow-hidden h-16 flex-center">
          <Link to="/">
            <img style={{height: "65px"}} src={logo} alt="" />
          </Link>
        </div>


        <div>
          <Search placeholder={t('search')}/>
        </div>


        <div className='flex-center-between'>
            <LanguageSwitcher />

            {accessToken == null ? 

                <div className="flex items-center ml-5">
                  <Link to="/login"><TransBtn>{t('login')}</TransBtn></Link>
                  <Link to="/step1"><Button style={{marginLeft: "10px"}}>{t('signup')}</Button></Link>
                </div>


             : 
                <div className="flex items-center">
                  <i className="fi fi-rr-bell text-2xl mt-2 mx-4 text-gray"></i>
                  <Account />
                </div>
             }
        </div>
      </div>


      {/* Down stage */}
      <div className="flex items-center justify-start w-full border-b border-black-10">
        <div className="">
        {links.map((elem, index) => (

          // Links of the header
          <Link key={index} to={elem.path}>
            <button 
              onClick={()=>navigate(index)} 
              style={page == elem.path ? {borderBottomWidth: '3px'} : {borderBottomWidth: "0"}}
              className={`h-14 px-6 text-gray ${elem.path == page ? 'font-medium text-primary-def border-primary-def' : ''}`}
            >
              {elem.title}
            </button>
          </Link>


        ))}  
        </div>
      </div>
    </header>
  )
}
export default Header;