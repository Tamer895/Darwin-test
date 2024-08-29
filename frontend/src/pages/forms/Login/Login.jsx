import React, { useState } from 'react'
import Authentication from '@components/layouts/Authentication/Authentication'
import {Link} from "react-router-dom"
import Title from '@components/UI/Typography/Title/Title'
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Password from "@UI/Inputs/Password/Password"
import Button from '@components/UI/Buttons/Button/Button';
import { useTranslation } from 'react-i18next'

import { setAuthToken } from '@utils/auth/auth';
import axios from 'axios';



export default function Login() {
  const { t } = useTranslation('auth');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('username', username)
    formData.append('password', password);

    try {
      // Send the POST request with the FormData
      const response = await axios.post('http://127.0.0.1:8000/users/login/', formData);
  

      setAuthToken(response.data['refresh'], response.data['access'], response.data['id'])

      // Handle the response
      // console.log('Server Response:', response.data);
      window.location.href = '/';
    } catch (error) {
    }
  };


  return (
    <Authentication>
        <form className='flex-center' onSubmit={handleSubmit}>

            <div className="">
                {/* titles */}
                <div className="">
                    <Title className="text-primary-def font-medium">{t('login.login_title')}</Title>
                    <Title size="1" className="font-bold text-blue-dark tracking-normal leading-snug mt-3">{t('login.title')}</Title>
                </div>


                {/* inputs */}
                <div className="flex flex-col mt-5 pt-5">
                    

                    {/* Email */}
                    <label className='mb-2 font-medium' for="email">{t('login.email')}</label>
                    <TextInput onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Alex" name="username" />

                    <br />

                    {/* Password  */}
                    <label className='mb-2 font-medium' for="password">{t('login.password')}</label>
                    <Password onChange={(e) => setPassword(e.target.value)} placeholder={t('login.password')} name="password" />

                    <br />

                    <Link>
                      <span className='font-normal text-sm text-primary-def hover:underline'>{t('login.forgot_password')}</span>
                    </Link>

                    <br />

                    <Button>{t('login.login')}</Button>
                </div>
            </div>
        </form>
    </Authentication>
  )
}
