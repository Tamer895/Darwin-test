import React, {useState} from 'react'

import {Link} from "react-router-dom"

import Password from "@UI/Inputs/Password/Password"

import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import Title from '@components/UI/Typography/Title/Title'
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import CenteredForm from '@components/layouts/Stacks/Form/CenteredForm/CenteredForm'

import { LESSONS_API_ROUTES } from '../../../configs/api/Lessons/lessons';

import { useDispatch, useSelector } from'react-redux';

import { useTranslation } from 'react-i18next';

import axios from 'axios';
import Textarea from '@components/UI/Inputs/Textarea/Textarea';


export default function CreateLesson(props) {

  const {t} = useTranslation('lesson');


  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const courseData = useSelector((state) => state.courseID.courseData);

  // Submitting datas
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('course', courseData.id);

    try {
      const response = await axios.post(LESSONS_API_ROUTES.POST, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      window.location.reload();
    } catch (error) {
      // console.error('Error submitting the form:', error);
    }
  };



  return (
    <CenteredForm>
        <form className='w-full' onSubmit={handleSubmit}>

            <div className="w-full flex items-center justify-between">
              <h1 className='text-xl font-bold'>{t('create_lesson.title')}</h1>

              <button className='w-10 h-10 rounded-full hover:bg-light_bg ease-linear duration-100 flex-center' onClick={()=>props.setState(false)} type="button">
                <span className="material-symbols-outlined text-gray text-2xl">
                close
                </span>
              </button>
            </div>

            <br />

            <InputContainer className="w-full" title={t('create_lesson.title_field')}>
                <TextInput onChange={(e) => setTitle(e.target.value)} className="w-full"/>
            </InputContainer>

            <br />

            <InputContainer className="w-full" title={t('create_lesson.description_field')}>
                <Textarea onChange={(e) => setDesc(e.target.value)} className="w-full"/>
            </InputContainer>

            <br />

            <br />

            <Button type="submit" className="w-full">{t('create_lesson.create')}</Button>
        </form>
    </CenteredForm>
  )
}
