import React, {useEffect, useState} from 'react'

import Form from '@components/layouts/Stacks/Form/Form';
import { Link } from 'react-router-dom';
import Authentication from '@components/layouts/Authentication/Authentication'
import Title from '@components/UI/Typography/Title/Title'
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Password from "@UI/Inputs/Password/Password"
import Button from '@components/UI/Buttons/Button/Button';
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom'



// Step1 of registration process
export default function Step1() {
    const [formData, setFormData] = useState({ password: '', repeated_password: '', email: '' });
    const [code, setCode] = useState("");
    const [enteredCode, setEnteredCode] = useState(null)

    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();
  
    const { t } = useTranslation('auth');

    const emailErrorText = emailError != "" ? t(`email_errors.${emailError}`) : "";



    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  


    const handleSubmit = async (e) => {
      e.preventDefault();

      if(formData.password == formData.repeated_password){
        try {
          const response = await axios.post('http://127.0.0.1:8000/users/getcode/', formData);


          if(response.data['boolean']) {
            setEmailError(response.data['message'])
          }
          else {
            setCode(response.data['code']);
            let ver = prompt("please enter your code")
            setEnteredCode(ver);
  
  
            if(enteredCode == code){
                // window.location.href = "/step2";
                navigate(`/step2?email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}`);
            } else if (enteredCode == null) {
                alert("code is not correct")
            } 
            else {
                alert("code is not correct")
            }
          }


        } catch (error) {
          console.error('Error:', error);
        }
      }
      else {
        alert("passwords do not match")
      }
    };


  


  return (
    <Authentication>
    <form className='flex-center'>


        <div className="">
            {/* titles */}
            <div className="">
                <Title className="text-primary-def font-medium">{t('step1.step1_title')}</Title>
                <Title size="1" className="font-bold text-blue-dark tracking-normal leading-snug mt-3">{t('step1.title')}</Title>
            </div>


            {/* inputs */}
            <form className="flex flex-col mt-5 pt-5">

                {/* Email */}
                <label className='mb-2 font-medium' for="email">{t('step1.email')}</label>
                <TextInput required value={formData.email} onChange={handleChange}  type="email" placeholder="example@gmail.com" name="email" />
                <span className='text-sm text-red-500'>{emailErrorText}</span>

                <br />

                {/* Password  */}
                <label className='mb-2 font-medium' for="password">{t('step1.password')}</label>
                <Password required value={formData.password} onChange={handleChange}  placeholder={t('step1.password')} name="password" />

                <br />

                {/* Repeat Password  */}
                <label className='mb-2 font-medium' for="password">{t('step1.repeat')}</label>
                <Password required value={formData.repeated_password} onChange={handleChange}  placeholder={t('step1.password')} name="repeated_password" />

                <br />

                <Link to="/login"><span className='font-normal text-sm text-primary-def hover:underline'>{t('step1.have_account')}</span></Link>

                <br />

                <Button onClick={handleSubmit}>Get code</Button>
            </form>
        </div>
    </form>
    </Authentication>
  )
}
