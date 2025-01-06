import React from 'react';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import Textarea from '@components/UI/Inputs/Textarea/Textarea';
import { useTranslation } from 'react-i18next'


export default function FeedbackForm() {

  const { t } = useTranslation('home');

  
  return (
    <div className="w-full box-border rounded-ss-[50px] rounded-se-[50px] mx-auto bg-blue-soft flex flex-col md:flex-row items-start justify-between py-20 px-[200px] gap-8">
      {/* Левая сторона */}
      <div className="flex flex-col md:w-2/3">
        <h1 className='text-[350%]'>🥳</h1>
        <h2 className="text-[350%] leading-tight font-bold text-white mb-4">
          {t('feedback_form.title')}
        </h2>
        <p className="text-lg text-white">
          {t('feedback_form.subtitle')}
        </p>
      </div>

      {/* Правая сторона */}
      <div style={{backgroundColor: "rgba(255,255,255, 0.1)"}} className="flex flex-col md:w-1/3 p-6 rounded-lg">
          <TextInput type="text" className="w-full border-none" id="name" placeholder={t('feedback_form.name')} />
          <br />
          <TextInput type="email" className="w-full border-none" id="email" placeholder={t('feedback_form.email')} />
          <br />
          <Textarea
            id="message"
            placeholder={t('feedback_form.message')}
            className="h-20 w-full border-none"
          />
          <br />
        <button className="h-12 bg-primary-def text-white font-medium rounded-md hover:bg-primary-hover">
        {t('feedback_form.submit')}
        </button>
      </div>
    </div>
  );
}
