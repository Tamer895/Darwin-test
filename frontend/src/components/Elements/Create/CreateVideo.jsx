import React, { useState } from 'react';

import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import VideoField from '@UI/Inputs/FileField/VideoField';

import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import axios from 'axios';

export default function CreateVideo() {
  const [title, setTitle] = useState();
  const [video, setVideo] = useState();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const {t} = useTranslation('lesson');


  const handleChange = (e) => {
    const value = e.target.value;

    // Проверяем, есть ли символы, кроме чисел
    if (/\D/.test(value)) {
    setError('Только числа разрешены');
    } else {
    setError('');
    setOrder(value);
    }
};



  const lesson = useSelector((state) => state.lessons.lessonData);

  // Submitting data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error !== "") {
        return;
    }

    const formData = new FormData();

    formData.append('title', title);
    formData.append('video', video);
    formData.append('order', order);
    formData.append('lesson_id', lesson.id);

    try {
      const response = await axios.post('http://127.0.0.1:8000/elements/create-video/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      window.location.reload();
    } catch (error) {
      // console.error('Error submitting the form:', error);
    }
  };

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <InputContainer className="w-full" title={t('create_element.video.title_field')}>
        <TextInput onChange={(e) => setTitle(e.target.value)} className="w-full" />
      </InputContainer>

      <br />

      <InputContainer className="w-full" title={t('create_element.video.content_field')}>
      <VideoField className="w-full" setVideo={setVideo} />
      </InputContainer>

      <br />

      <InputContainer className="w-full" title={t('create_element.video.order_field')}>
            <TextInput value={order} onChange={handleChange} className="w-full"/>
            {error && <p className='text-sm' style={{color: 'red'}}>{error}</p>}
      </InputContainer>

      <br />
      <br />

      <Button type="submit" className="w-full">
        {t('create_element.create')}
      </Button>
    </form>
  );
}
