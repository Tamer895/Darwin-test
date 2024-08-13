import React from 'react'

import logo from "@media/images/png/Darwinx2.png";

import { useTranslation } from 'react-i18next'

import Title from '@UI/Typography/Title/Title';
import {Link} from 'react-router-dom';



export default function Footer() {
  const { t } = useTranslation('footer');


  const column_one = [
    {title: t('navigation.my_edu'), link: '/my_edu'},
    {title: t('navigation.courses'), link: '/courses'},
    {title: t('navigation.bulletin_board'), link: '/bulletin_board'},
    {title: t('navigation.studio'), link: '/studio'},
  ]

  const column_two = [
    {title: t('extra_links.contact_us'), link: ''},
    {title: t('extra_links.faq'), link:''},
    {title: t('extra_links.terms_and_conditions'), link: ''},
    {title: t('extra_links.privacy_policy'), link: ''},
  ]


  const social_links = [
    {icon: "fa-brands fa-telegram", link: "/"},
    {icon: "fa-brands fa-youtube", link: "/"},
    {icon: "fa-brands fa-x-twitter", link: "/"},
    {icon: "fa-brands fa-facebook", link: "/"},
  ]


  return (
    <footer style={{borderTopWidth: "1px"}} className='flex-center-between p-24 border-black-10'>

      {/* Link columns */}
      <div className="flex items-start">

        {/* Column 1 */}
        <nav className='flex flex-col items-start'>
          <Title size="4" className="text-black-def font-medium mb-2">{t('navigation.title')}</Title>

          {column_one.map((elem, index) => (
            <a className='text-gray mb-2 hover:text-primary-def' key={index} href={elem.link}>{elem.title}</a>
          ))}
        </nav>

        {/* Column 2 */}
        <nav className='flex flex-col items-start ml-16'>
          <Title size="4" className="text-black-def font-medium mb-2">{t('extra_links.title')}</Title>

          {column_two.map((elem, index) => (
            <a className='text-gray mb-2 hover:text-primary-def' key={index} href={elem.link}>{elem.title}</a>
          ))}
        </nav>
      </div>

      {/* Social media icons */}
      <div className="flex flex-col">

        {/* Logo */}
        <Link to="/">
          <img className='cursor-pointer' width="150" src={logo} alt="" />
        </Link>

        {/* Social media links */}
        <div className="mb-4 mt-3">
          <nav>
            {social_links.map((elem, index)=>(
              <Link key={index} to={elem.link}>
                <i className={`${elem.icon} text-xl mr-2 text-black-def hover:text-primary-def transition-75`}></i>
              </Link>
            ))}
          </nav>
        </div>

        {/* Text */}
        <p className='w-64 text-gray text-sm'>{t('text')}</p>
      </div>

    </footer>
  )
}
