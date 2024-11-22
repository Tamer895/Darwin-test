import React, {useEffect, useState} from 'react';


import Authentication from '@components/layouts/Authentication/Authentication';

import AvatarCircle from '@components/UI/Avatar/Avatar';
import Title from '@components/UI/Typography/Title/Title';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Password from "@UI/Inputs/Password/Password";
import Button from '@components/UI/Buttons/Button/Button';
import Textarea from "@components/UI/Inputs/Textarea/Textarea";
import Radio from '@components/UI/Inputs/Radio/Radio';
import ChipsInput from '@components/UI/Inputs/ChipsInput/ChipsInput';
import ImageField from '@components/UI/Inputs/FileField/ImageField';


import { useTranslation } from 'react-i18next';
import { setAuthToken } from '@utils/auth/auth';
import {useNavigate, useLocation} from 'react-router-dom';

import { USERS_API_ROUTES } from '@configs/api/Users/users';

import "./styles/style.css"

import axios from 'axios';





const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


// Step2 of registration process
export default function Step2() {

  // Language translator
  const { t } = useTranslation('auth');

  // navigation
  const navigate = useNavigate();

  useEffect(() => {
    if (!email ||!password) {
      navigate('/step1');
    }
  }, [])

  // Radio value


  const query = useQuery();
  const email = query.get('email');
  const password = query.get('password');

  const items_radio = [
    {label: t('step2.student'), value: "student"},
    {label: t('step2.tutor'), value: "tutor"},
  ];




  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState();



    function imagename(e){
    
      const selectedFile = e.target.files[0];
    
        // Дополнительные проверки размеров и соотношения сторон
      const image = new Image();
      image.onload = () => {
        setImage(selectedFile);
        setImageURL(URL.createObjectURL(selectedFile));
      };
      image.src = URL.createObjectURL(selectedFile);
    }


  const [val, setVal] = useState("student");
  const [chips, setChips] = useState([]);
  const [nickname, setNickname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");





  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('email', email)
    formData.append('password', password);
    formData.append('username', nickname);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('description', description);
    formData.append('profile_photo', image);  // Added image to FormData
    formData.append('role', val);
    formData.append('preferences', JSON.stringify(chips))

    try {
      // Send the POST request with the FormData
      const response = await axios.post(USERS_API_ROUTES.REGISTER, formData);
  

      setAuthToken(response.data['refresh'], response.data['access'], response.data['id'])
      localStorage.setItem('user', JSON.stringify(response.data['user']));

      // Handle the response
      // console.log('Server Response:', response.data);
      window.location.href = '/';
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

    return (
      <Authentication>
      <form className='flex-center' onSubmit={handleSubmit}>
  
  
          <div className="">
              {/* titles */}
              {/* <span>{email}{password}</span> */}
              <div className="">
                  <Title className="text-primary-def font-medium">{t('step2.step2_title')}</Title>
                  <Title size="1" className="font-bold text-blue-dark tracking-normal leading-snug mt-3">{t('step2.title')}</Title>
              </div>
  
  
              {/* inputs */}
              <div className="flex flex-col mt-5 pt-5">

                  <div className="w-full flex-center py-5">
                  
                    <input 
                      type="file" 
                      className='fileUpload'
                      style={{display: "none"}}
                      id="avatar-upload"
                      onChange={imagename}
                    />
                    <label htmlFor="avatar-upload">
                      <AvatarCircle className="hover:cursor-pointer" sx={{ width: 100, height: 100 }} src={imageURL} />
                    </label>
                  </div>

                  {/* Name */}
                  <label className='mb-2 font-medium' for="nickname">{t('step2.nickname')}</label>
                  <TextInput required onChange={(e)=>setNickname(e.target.value)} type="text" placeholder="Alex123" name="nickname" />
  
                  <br />

                  {/* First name */}
                  <label className='mb-2 font-medium' for="first_name">{t('step2.first_name')}</label>
                  <TextInput required onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder={t('step2.first_name')} name="first_name" />

                  <br />

                  {/* Last name */}
                  <label className='mb-2 font-medium' for="last_name">{t('step2.last_name')}</label>
                  <TextInput required onChange={(e)=>setLastName(e.target.value)} type="text" placeholder={t('step2.last_name')} name="last_name" />

                  <br />
  
                  {/* Password  */}
                  <label className='mb-2 font-medium' for="description">{t("step2.description")}</label>
                  <Textarea required onChange={(e)=>setDescription(e.target.value)} name="description"></Textarea>
  
                  <br />
  
                  {/* Repeat Password 
                  <label className='mb-2 font-medium' for="password">{t('step1.repeat')}</label>
                  <Password placeholder={t('step1.password')} name="password" />
  
                  <br /> */}

                  <label className='mb-2 font-medium' for="password">{t('step2.role')}</label>
                  <Radio 
                    items={items_radio}
                    setValue={setVal}
                  />

                  <br />

                  <label className='mb-2 font-medium' for="password">{t('step2.preferences')}</label>
                  <ChipsInput onChange={setChips} items={chips} placeholder={t('step2.example')} />

                  <br />
  

  
                  <Button type="submit">{t('step2.signup')}</Button>
              </div>
          </div>
      </form>
      </Authentication>
    )
}
