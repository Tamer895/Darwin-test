import React, {useEffect} from 'react'


import Feature from '@components/layouts/Containers/Feature/Feature'
import TransBtn from "@UI/Buttons/TransBtn/TransBtn"
import Welcome from '@components/layouts/Welcome/Welcome'
import AccordionComponent from '@components/UI/Accordion/Accordion'

import Offer from "@UI/Cards/Offer/Offer"
import Title from '@components/UI/Typography/Title/Title'
import { Helmet } from 'react-helmet-async'

import faqIcon from "@media/icons/undraw/faq.svg"
import { useTranslation } from 'react-i18next'
import classes from "./style.module.css"

import RoundedText from '@components/UI/Typography/RoundedText/RoundedText'
import {useNavigate} from "react-router-dom"

import events from "@media/images/png/undraw/events.png"
import courses from "@media/images/png/undraw/online_learning.png"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS styles


export default function Home() {
  const { t } = useTranslation('home');
  const navigate = useNavigate();


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether the animation should run once when it enters the viewport
    });
  }, []);


  const user_id = localStorage.getItem('user_id');
  useEffect(() => {
    if(user_id !== null) {
      navigate("courses/");
    }
    else {
      ;
    }
  }, [])
  

  // Offers
  const offers = [
    {
      to: "",
      icon: "access_time",
      title: "Quick & Reliable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque ullamcorper commodo.",
      value: "15",
      value_text: "Hours",
    },
    {
      to: "",
      icon: "access_time",
      title: "Quick & Reliable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque ullamcorper commodo.",
      value: "15",
      value_text: "Hours",
    },
    {
      to: "",
      icon: "access_time",
      title: "Quick & Reliable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque ullamcorper commodo.",
      value: "15",
      value_text: "Hours",
    },
  ]

  // Accordion items
  const items = [
    {title: t('FAQ.q1'), content: t('FAQ.a1')},
    {title: t('FAQ.q2'), content: t('FAQ.a2')},
    {title: t('FAQ.q1'), content: t('FAQ.a1')},
  ]


  return (
    <div className={`overflow-hidden ${classes.home_bg}`}>
      <Helmet>
        <title>Darwin: Главная</title>
        <meta name="description" content="Узнайте больше о нашей платформе" />
        <meta name="keywords" content="home, main, page" />
      </Helmet>

      <Welcome />


      {/* What we can offer */}

      <div style={{top: "-100px"}} className={`w-[97%] relative mx-auto rounded-[50px] py-14 flex-col-center mb-32 ${classes.offer_bg}`}>

        <Title className="font-bold text-[250%] text-white">What we can offer</Title>
        <p className='text-white'>Three main opportunities we can offer to you</p>

        <div className="flex items-center justify-center mt-7">

          {offers.map((elem, index)=>(
            <Offer
              data-aos="fade-up"
              key={index}
              to={elem.to}
              style={{width: "300px", margin: "0 10px"}}
              icon={elem.icon}
              title={elem.title}
              text={elem.text}
              value={elem.value}
              value_text={elem.value_text}
            />
          ))}

        </div>
      </div>


      {/* Features */}
      <Feature
       data-aos="fade-right"
        color="dodgerblue"
        feature={t('features.course.feature')}
        title={t('features.course.title')}
        text={t('features.course.description')}
        img={courses}
      >
        <TransBtn style={{borderRadius: "100px"}}>{t('features.course.button')}</TransBtn>
      </Feature>


      <Feature
       data-aos="fade-left"
        direction="flex-row-reverse"
        color="dodgerblue"
        feature={t('features.b_board.feature')}
        title={t('features.b_board.title')}
        text={t('features.b_board.description')}
        img={events}
      >
        <TransBtn style={{borderRadius: "100px"}}>{t('features.b_board.button')}</TransBtn>
      </Feature>


      {/* <Carousel images={images}/> */}


      {/* Frequently asked questions */}
      <section data-aos="fade-up" className='w-[97%] mx-auto my-10 rounded-[50px] bg-light_bg flex flex-col items-start py-40'>

        <div className="w-4/5 mx-auto">
          <div data-aos="fade-up" className="w-full flex-col mb-10">
            <h1 className="font-semibold leading-tight my-4 text-[50px]">{t('FAQ.title')}</h1>
            <p className='text-black font-medium flex items-center'>
               {t('FAQ.help')} <a className='text-primary-def hover:underline ml-2' href="/contacts">{t('FAQ.contact')}</a></p>
          </div>


          <div data-aos="fade-up" className="w-full flex flex-col items-start">

            <RoundedText>Functionality</RoundedText>
            <br />
            <AccordionComponent items={items} />

            <br /><br />

            <RoundedText>Functionality</RoundedText>
            <br />
            <AccordionComponent items={items} />
          </div>
        </div>
      </section>



      {/* Your Effort */}
      <section data-aos="fade-up" className={classes.effort}>
          <h1 className='text-primary-def uppercase font-bold'><span>Приложите ваши усилия для создания нового сообщества</span> Станьте частью чего-то большего</h1>
      </section>

    </div>
  )
}
