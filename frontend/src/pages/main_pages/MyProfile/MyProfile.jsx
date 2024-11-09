import React from 'react'
import AvatarCircle from '@components/UI/Avatar/Avatar'
import Button from '@components/UI/Buttons/Button/Button';
import TransBtn from '@components/UI/Buttons/TransBtn/TransBtn';
import about from "@media/images/svg/about.svg";

import { Helmet } from "react-helmet-async";



export default function MyProfile() {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <section className='w-full mx-auto py-10 bg-light_bg'>
      <Helmet>
        <title>My profile</title>
        <meta name="description" content="Change setting and personal datas of your profile" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Home Page - My App" />
        <meta property="og:description" content="Welcome to the home page of My App!" />
      </Helmet>

      {/* Title */}
      <div className="w-3/5 mx-auto">
        <h1 className='text-2xl text-black-def'>Your profile</h1>
      </div>

      <br />

      {/* User profile and editing personal datas */}
      <div className="box-border flex items-center justify-between p-5 w-3/5 mx-auto bg-white border border-black-10 rounded-lg">

        <div className="flex items-center justify-start">
          <AvatarCircle style={{width: "100px", height: "100px"}} src={user.profile_photo} alt={user.username.toUpperCase()} />

          <div className="ml-5">

            <div className="">
              <h1 className='text-xl mb-3'>{user.first_name} {user.last_name}</h1>
              <span className='text-white text-sm bg-primary-def py-1 px-2 rounded-sm'>{user.role}</span>
            </div>
          </div>
        </div>


        <TransBtn onClick={()=>window.location.href='/editprofile/'} style={{height: "40px"}}>Editing</TransBtn>
      </div>

      <br />

      {/* Improve my preview */}
      <div className="box-border flex items-start justify-left p-5 w-3/5 mx-auto bg-white border border-dashed border-black-10 rounded-lg">
        <img className='mr-10' width="200" src={about} alt="" />

        <div className="">
          <h1 className='text-2xl font-medium m-0 text-black-def'>Write a description text about you</h1>

          <p className='text-md my-5 text-black-def'>To craft an engaging, authentic introduction of yourself, start by highlighting key aspects of your personality, interests, and experiences in a way that feels natural and unique. Think of the traits and experiences that genuinely define you and set you apart, offering a balance between your professional and personal sides. Mention your field of expertise or passions, current goals, and what excites you most about what you do. This could be tied to a hobby, a work project, or even a cause you care about deeply.</p>
        
          <Button style={{height: "40px"}}>Write</Button>
        </div>
      <br />


      
      </div>
    </section>
  )
}
