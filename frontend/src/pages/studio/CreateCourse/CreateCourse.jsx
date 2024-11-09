import axios from 'axios'

import React, { useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';

import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Sidebar from '@components/layouts/Sidebar/Sidebar';
import Content from '@components/layouts/Stacks/Content/Content';
import Form from '@components/layouts/Stacks/Form/Form';

import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Textarea from '@components/UI/Inputs/Textarea/Textarea';
import SelectComponent from '@components/UI/Select/Select';
import Radio from '@components/UI/Inputs/Radio/Radio';
import Button from '@components/UI/Buttons/Button/Button';
import ChipsInput from '@components/UI/Inputs/ChipsInput/ChipsInput';
import Course from '@components/UI/Cards/Course/Course';
import fetchDataID from '@utils/api/users/datasets/fetchDataID';

import { COURSES_API_ROUTES } from '../../../configs/api/Courses/courses';

import ImageField from '@components/UI/Inputs/FileField/ImageField';
import VideoField from '@components/UI/Inputs/FileField/VideoField';



export default function CreateCourse() {

  const { t } = useTranslation(['studio', 'errors']);


  const lang = [
      {label: "English", value: "en"},
      {label: "Русский", value: "ru"},
      {label: "Қазақша", value: "kz"},
  ];


  const isPrivate = [
    {label: t('create_courses.public'), value: false},
    {label: t('create_courses.private'), value: true}
  ]


  const levels = [
      {label: t('create_courses.beginner'), value: "beginner"},
      {label: t('create_courses.intermediate'), value: "intermediate"},
      {label: t('create_courses.advanced'), value: "advanced"}
    ]


    const user_id = localStorage.getItem('user_id');


    const [userdatas, setData] = useState([]);
    const [error, setError] = useState(false);


    // Fetching user('author') datas from Server
    useEffect(() => {
      const getData = async () => { // Define async function inside useEffect
        try {
          const result = await fetchDataID(user_id); // Await the result of the async function
          setData(result);
        } catch (error) {
           // Handle error
          // console.error('Error fetching data:', error);
        }
      };

      getData();
    }, []);



    // Preparing datas for formDATA
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();

    const [introVideo, setIntroVideo] = useState();

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [language, setLang] = useState('ru');
    const [status, setStatus] = useState(false);
    const [chips, setChips] = useState([]);
    const [level, setLevel] = useState('beginner');

  
  
    // Submitting datas
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();

      
      formData.append('name', name);
      formData.append('author', parseInt(user_id));
      formData.append('description', desc);
      formData.append('language', language);
      formData.append('is_private', status);
      formData.append('category', JSON.stringify(chips))
      formData.append('preview', image);  
      formData.append('intro_video', introVideo);  
      formData.append('level', level);

      try {
        const response = await axios.post(COURSES_API_ROUTES.CREATE, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        window.location.href = '/editor';
      } catch (error) {
        setError(true);
        // console.error('Error submitting the form:', error);
      }
    };


  return (
    <Flexbox direction="row" items="flex-start" justify="space-between" className="px-40 py-16 bg-light_bg">
      
      <Sidebar focused="1"/>
      



      <Content width="78%" className="flex-col items-center bg-white border-black-10 border-solid border rounded-xl py-10">


          

          

        {/* Course creating form */}
        <Form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
          {/* Example of course */}
          <Course 
              style={{width: "100%", marginBottom: 25}}      
              name={name}
              to=""
              img={imageURL}
              avatar={userdatas.profile_photo}
              username={userdatas.username}
              is_verified={userdatas.is_verificated} // Added is_verified prop
              language={language}
              rating={5}
              level={level}
              categories={chips}
          />


          <ImageField id="preview_field" className="w-full" setURL={setImageURL} setImage={setImage} />

          <br />

          <InputContainer className="w-full" for="intro_video" title={t('create_courses.intro_video')}>
            <VideoField required className="w-full" setVideo={setIntroVideo} />
          </InputContainer>


          <br />
          
          <InputContainer className="w-full" for="name" title={t('create_courses.name')}>
            <TextInput required onChange={(e) => setName(e.target.value)} className="w-full" type="text" name="name" />
          </InputContainer>

          <br />

          <InputContainer className="w-full" for="description" title={t('create_courses.description')}>
            <Textarea required onChange={(e) => setDesc(e.target.value)} className="w-full" type="text" name="description"></Textarea>
          </InputContainer>

          <br />


          <Flexbox direction="row" items='center' justify="center">
            <InputContainer for="lang" title={t('create_courses.language')}>
              <SelectComponent items={lang} value={language} onChange={(e) => setLang(e.target.value)} />
            </InputContainer>
            


            <InputContainer className="ml-5" for="status" title={t('create_courses.status')}>
              <SelectComponent items={isPrivate} value={status} onChange={(e) => setStatus(e.target.value)} />
            </InputContainer>
          </Flexbox>

          <br />

          <InputContainer className="w-full" for="categories" title={t('create_courses.categories')}>
            <ChipsInput required onChange={setChips} items={chips} placeholder="Category" />
          </InputContainer>

          <br />

          <InputContainer className="w-full" for="level" title={t('create_courses.level')}>
            <Radio required items={levels} setValue={setLevel} />
          </InputContainer>

          <br />
          <br />
          
          {error ? <div className="text-red-500 text-center">{t('errors:fill_all_fields')}</div> : ""}

          <Button type="submit">{t('create_courses.submit')}</Button>

        </Form>
      </Content>

    </Flexbox>
  )
}
