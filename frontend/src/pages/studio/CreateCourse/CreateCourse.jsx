import axios from 'axios'

import React, { useState} from 'react'
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



export default function CreateCourse() {

  const { t } = useTranslation('studio');


  const lang = [
      {label: "English", value: "en"},
      {label: "Русский", value: "ru"},
      {label: "Қазақша", value: "kz"},
  ];


  const isPrivate = [
    {label: "Public", value: false},
    {label: "Private", value: true}
  ]


  const levels = [
      {label: "Beginner", value: "beginner"},
      {label: "Intermediate", value: "intermediate"},
      {label: "Advanced", value: "advanced"}
    ]



    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [language, setLang] = useState('');
    const [status, setStatus] = useState();
    const [level, setLevel] = useState('');
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();

      const user_id = localStorage.getItem('user_id');
      const user_data = await axios.get(`http://127.0.0.1:8000/users/user_info/${user_id}/`);
  
      formData.append('name', name);
      formData.append('author', user_id);
      formData.append('description', desc);
      formData.append('language', language);
      formData.append('is_private', status);
      formData.append('level', level);

      try {
        console.log(formData);
        const response = await axios.post('http://127.0.0.1:8000/courses/course/', formData);

        window.location.href = '/editor';
      } catch (error) {
        // console.error('Error submitting the form:', error);
      }
    };


  return (
    <Flexbox direction="row" items="flex-start" justify="space-between" className="px-40 py-16 bg-light_bg">
      
      <Sidebar focused="1"/>
      



      <Content width="78%" className="bg-white border-black-10 border-solid border-2 rounded-xl py-5">
        <Form onSubmit={handleSubmit}>
          
          <InputContainer className="w-96" for="username" title="Course name">
            <TextInput onChange={(e) => setName(e.target.value)} className="w-full" type="text" name="username" />
          </InputContainer>

          <br />

          <InputContainer className="w-96" for="username" title="Your course description">
            <Textarea onChange={(e) => setDesc(e.target.value)} className="w-full" type="text" name="username"></Textarea>
          </InputContainer>

          <br />

          <InputContainer className="w-96" for="username" title="Language">
            <SelectComponent items={lang} value={language} onChange={(e) => setLang(e.target.value)} />
          </InputContainer>

          <br />

          <InputContainer className="w-96" for="username" title="Private or Public?">
            <SelectComponent items={isPrivate} value={status} onChange={(e) => setStatus(e.target.value)} />
          </InputContainer>

          <br />

          <InputContainer className="w-96" for="username" title="Level">
            <Radio items={levels} setValue={setLevel} />
          </InputContainer>

          <br />
          <br />

          <Button type="submit">Submit</Button>

        </Form>
      </Content>

    </Flexbox>
  )
}
