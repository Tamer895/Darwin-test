import React, {useState} from 'react'


import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import NumberInput from '@components/UI/Inputs/NumberInput/NumberInput';
import Textarea from '@UI/Inputs/Textarea/Textarea';

import { useDispatch, useSelector } from'react-redux';

import { useTranslation } from 'react-i18next';

import axios from 'axios';


export default function CreateText() {
    
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [order, setOrder] = useState(null);

    const {t} = useTranslation('lesson');

    const lesson = useSelector((state) => state.lessons.lessonData);
  

    
    const [error, setError] = useState('');

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

     

    // Submitting datas
    const handleSubmit = async (e) => {
      e.preventDefault();
  

      if (error !== "") {
        return;
      }


      const formData = new FormData();
  
      
      formData.append('title', title);
      formData.append('text', text);
      formData.append('order', order);
      formData.append('lesson_id', lesson.id)
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/elements/create-text/', formData, {
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
    <form className='w-full' onSubmit={handleSubmit}>


        <InputContainer className="w-full" title={t('create_element.text.title_field')}>
            <TextInput onChange={(e) => setTitle(e.target.value)} className="w-full"/>
        </InputContainer>

        <br />

        <InputContainer className="w-full" title={t('create_element.text.content_field')}>
            <Textarea onChange={(e) => setText(e.target.value)} className="w-full"/>
            <span className={`text-sm ${text.length > 1000 ? "text-red-500" : ""}`}>{text.length}/1000</span>
        </InputContainer>

        <br />

        <InputContainer className="w-full" title={t('create_element.text.order_field')}>
            <TextInput value={order} onChange={handleChange} className="w-full"/>
            {error && <p className='text-sm' style={{color: 'red'}}>{error}</p>}
        </InputContainer>

        <br />

        <br />

        <Button type="submit" className="w-full">{t('create_element.create')}</Button>
    </form>
  )
}
