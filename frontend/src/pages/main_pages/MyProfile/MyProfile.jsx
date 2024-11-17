import React from 'react'
import AvatarCircle from '@components/UI/Avatar/Avatar'
import Button from '@components/UI/Buttons/Button/Button';
import TransBtn from '@components/UI/Buttons/TransBtn/TransBtn';
import about from "@media/images/svg/about.svg";
import Description from '@components/layouts/Profile/Description';

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
      <Description/>
    </section>
  )
}
