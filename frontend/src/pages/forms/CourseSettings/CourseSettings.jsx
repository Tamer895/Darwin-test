import React, { useState } from 'react';
import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import CenteredForm from '@components/layouts/Stacks/Form/CenteredForm/CenteredForm';
import SelectComponent from '@components/UI/Select/Select';
import Radio from '@components/UI/Inputs/Radio/Radio';
import ChipsInput from '@components/UI/Inputs/ChipsInput/ChipsInput';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import { useTranslation } from 'react-i18next';
import Textarea from '@components/UI/Inputs/Textarea/Textarea';
import { useDispatch, useSelector } from'react-redux';

import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';

import axios from 'axios';

export default function CourseSettiings(props) {
  const courseData = useSelector((state) => state.courseID.courseData);
  // console.log(courseData)
  const { t } = useTranslation('lesson');

  const lang = [
    { label: 'English', value: 'en' },
    { label: 'Русский', value: 'ru' },
    { label: 'Қазақша', value: 'kz' },
  ];

  const levels = [
    { label: t('course_settings.levels.beginner'), value: 'beginner' },
    { label: t('course_settings.levels.intermediate'), value: 'intermediate' },
    { label: t('course_settings.levels.advanced'), value: 'advanced' },
  ];

  const [title, setTitle] = useState(courseData.name);
  const [desc, setDesc] = useState(courseData.description);
  const [language, setLang] = useState(courseData.language);
  const [chips, setChips] = useState(courseData.category);
  const [level, setLevel] = useState(courseData.level);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    
    formData.append('name', title);
    formData.append('description', desc);
    formData.append('language', language);
    formData.append('category', JSON.stringify(chips));
    formData.append('level', level);
    
    // alert(COURSES_API_ROUTES.PATCH+`${courseData.id}`);

    try {
      const response = await axios.patch(COURSES_API_ROUTES.PATCH(courseData.id), formData, {
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
    <CenteredForm className="max-w-xl">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-bold">Settings</h1>

          <button
            className="w-10 h-10 rounded-full hover:bg-light_bg ease-linear duration-100 flex-center"
            onClick={() => props.setState && props.setState(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-gray text-2xl">close</span>
          </button>
        </div>

        <br />

        <InputContainer className="w-full" title={t('course_settings.name')}>
          <TextInput
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
            value={title}
          />
        </InputContainer>

        <br />

        <InputContainer className="w-full" title={t('course_settings.description')}>
          <Textarea
            onChange={(e) => setDesc(e.target.value)}
            className="w-full"
            value={desc}
          />
        </InputContainer>

        <br />

        <InputContainer className="w-full" for="categories" title={t('course_settings.categories')}>
          <ChipsInput
            required
            onChange={setChips}
            value={chips}
            items={chips}
            placeholder="Category"
          />
        </InputContainer>

        <br />

        <InputContainer className="w-full" for="level" title={t('course_settings.level')}>
          <Radio
            className="flex flex-wrap"
            required
            items={levels}
            value={level}
            setValue={setLevel}
          />
        </InputContainer>

        <br />

        <Flexbox direction="row" items="center" justify="start">
          <InputContainer for="lang" title={t('course_settings.lang')}>
            <SelectComponent
              items={lang}
              value={language}
              onChange={setLang}
            />
          </InputContainer>
        </Flexbox>

        <br />

        <Button type="submit" className="w-full">
          {t('course_settings.update')}
        </Button>
      </form>
    </CenteredForm>
  );
}
