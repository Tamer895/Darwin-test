import React from 'react'
import PageTitle from '../../../components/layouts/PageTitle/PageTitle'
import Feature from '../../../components/layouts/Containers/Feature/Feature'
import TransBtn from "@UI/Buttons/TransBtn/TransBtn"
import Welcome from '../../../components/layouts/Welcome/Welcome'
import AccordionComponent from '@components/UI/Accordion/Accordion'

import Offer from "@UI/Cards/Offer/Offer"
import Title from '../../../components/UI/Typography/Title/Title'

export default function Home() {


  // Images for carousel
  const images = [
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
    "https://i.pinimg.com/564x/25/01/1c/25011c90293c7de8aed7887f4a026761.jpg",
    "https://i.pinimg.com/564x/13/e9/31/13e9317a6aa6a9fbe79f2cb3c3f5f746.jpg",
  ]


  // Offers
  const offers = [
    {
      to: "",
      icon: "access_time",
      title: "Quick & Reliable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque ullamcorper commodo.",
      value: "15",
      value_text: "Hours",
      fade: "fade-right"
    },
    {
      to: "",
      icon: "access_time",
      title: "Quick & Reliable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque ullamcorper commodo.",
      value: "15",
      value_text: "Hours",
      fade: "fade-up"
    },
    {
      to: "",
      icon: "access_time",
      title: "Quick & Reliable",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy mi in neque ullamcorper commodo.",
      value: "15",
      value_text: "Hours",
      fade: "fade-left"
    },
  ]


  return (
    <div>

      <Welcome />

      <PageTitle
        title="Welcome to the Home Page"
        text="Lorem ipsum dolor sit amet, consectet ut labore et dolore magna"
      />


      {/* What we can offer */}

      <div className="w-full py-10 bg-light_bg flex-col-center mb-32">

        <Title className="font-bold" size="2">What we can offer</Title>
        <p className='text-gray'>Three main opportunities we can offer to you</p>

        <div className="flex items-center justify-center mt-7">

          {offers.map((elem, index)=>(
            <Offer
              key={index}
              aos={elem.fade}
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
      <div data-aos="fade-right">
        <Feature
          color="dodgerblue"
          feature="Feature"
          title="Reach users on every screen"
          text="Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices."
          img="https://storage.googleapis.com/cms-storage-bucket/ed2e069ee37807f5975a.jpg"
        >
          <TransBtn style={{borderRadius: "100px"}}>See the target platforms</TransBtn>
        </Feature>
      </div>


      <div data-aos="fade-left">
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
      </div>


      {/* <Carousel images={images}/> */}


      {/* Often questions */}
      <section className='w-full flex-col-center py-40'>
        <Title className="font-bold" size="2">Frequently asked questions</Title>
        <p className='text-gray'>Find answers for your questions</p>

        <br />

        <div className="w-full px-48">
          <AccordionComponent aria_controls="panel1-content" id="panel1-header" question="Title" answer="Loremsadwa" />
          <AccordionComponent aria_controls="panel1-content" id="panel1-header" question="Title" answer="Loremsadwa" />
          <AccordionComponent aria_controls="panel1-content" id="panel1-header" question="Title" answer="Loremsadwa" />
          <AccordionComponent aria_controls="panel1-content" id="panel1-header" question="Title" answer="Loremsadwa" />
        </div>
      </section>

    </div>
  )
}
