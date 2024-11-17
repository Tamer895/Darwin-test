import React, { useState } from 'react';

import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import ImageField from '@UI/Inputs/FileField/ImageField'; // Adjust this import based on your file field component for images
import { ELEMENTS_API_ROUTES } from '@configs/api/Elements/elements';

import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import axios from 'axios';

export default function CreateImage() {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const { t } = useTranslation('lesson');

  const handleChange = (e) => {
    const value = e.target.value;

    // Validate input for numeric values only
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
    formData.append('image', image);
    formData.append('order', order);
    formData.append('lesson_id', lesson.id);

    try {
      const response = await axios.post(ELEMENTS_API_ROUTES.IMAGE.CREATE, formData, {
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
      <InputContainer className="w-full" title={t('create_element.image.title_field')}>
        <TextInput onChange={(e) => setTitle(e.target.value)} className="w-full" />
      </InputContainer>

      <br />

      <InputContainer className="w-full" title={t('create_element.image.content_field')}>
        <ImageField className="w-full" setImage={setImage} />
      </InputContainer>

      <br />

      <InputContainer className="w-full" title={t('create_element.image.order_field')}>
        <TextInput value={order} onChange={handleChange} className="w-full" />
        {error && <p className='text-sm' style={{ color: 'red' }}>{error}</p>}
      </InputContainer>

      <br />
      <br />

      <Button type="submit" className="w-full">
        {t('create_element.create')}
      </Button>
    </form>
  );
}
