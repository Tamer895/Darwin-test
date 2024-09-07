import React from 'react'


import Feature from '@components/layouts/Containers/Feature/Feature'
import TransBtn from "@UI/Buttons/TransBtn/TransBtn"
import Welcome from '@components/layouts/Welcome/Welcome'
import AccordionComponent from '@components/UI/Accordion/Accordion'

import Offer from "@UI/Cards/Offer/Offer"
import Title from '@components/UI/Typography/Title/Title'
import { Helmet } from 'react-helmet-async'

import faqIcon from "@media/icons/undraw/faq.svg"
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation('home');



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
  ]


  return (
    <div>
      <Helmet>
        <title>Darwin: Главная</title>
        <meta name="description" content="Узнайте больше о нашей платформе" />
        <meta name="keywords" content="home, main, page" />
      </Helmet>

      <Welcome />


      {/* What we can offer */}

      <div className="w-full py-10 bg-none flex-col-center mb-32">

        <Title className="font-bold" size="2">What we can offer</Title>
        <p className='text-gray'>Three main opportunities we can offer to you</p>

        <div className="flex items-center justify-center mt-7">

          {offers.map((elem, index)=>(
            <Offer
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
        color="dodgerblue"
        feature="Feature"
        title="Reach users on every screen"
        text="Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices."
        img="https://storage.googleapis.com/cms-storage-bucket/ed2e069ee37807f5975a.jpg"
      >
        <TransBtn style={{borderRadius: "100px"}}>See the target platforms</TransBtn>
      </Feature>


      <Feature
        direction="flex-row-reverse"
        color="dodgerblue"
        feature="Feature"
        title="Reach users on every screen"
        text="Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices."
        img="https://storage.googleapis.com/cms-storage-bucket/ed2e069ee37807f5975a.jpg"
      >
        <TransBtn style={{borderRadius: "100px"}}>See the target platforms</TransBtn>
      </Feature>


      {/* <Carousel images={images}/> */}


      {/* Frequently asked questions */}
      <section className='w-4/5 mx-auto flex items-start justify-between py-40'>

        <div className="flex-col">
          <img width={300} src={faqIcon} alt="" loading='lazy' />
          <h1 className="font-semibold leading-tight my-6 text-[40px]">{t('FAQ.title')}</h1>
          <p className='text-black'>{t('FAQ.help')} <a className='text-primary-def hover:underline' href="/contacts">{t('FAQ.contact')}</a></p>
        </div>


        <div className="w-3/5">
          <AccordionComponent items={items} />
        </div>
      </section>

    </div>
  )
}
