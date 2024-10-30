import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Textarea from '@components/UI/Inputs/Textarea/Textarea';
import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';
import ImageField from '@components/UI/Inputs/FileField/ImageField';
import VideoField from '@components/UI/Inputs/FileField/VideoField';
import { useTranslation } from 'react-i18next';

function CreateAnnouncement() {
  const userData = JSON.parse(localStorage.getItem('user'));

  const [url, setImageURL] = useState();
  const [image, setImage] = useState();

  const [preview, setPreview] = useState();
  const [previewURL, setPreviewURL] = useState();

  const [video, setVideo] = useState();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [sourceName, setSourceName] = useState();
  const [link, setLink] = useState();

  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  let formattedDate = `${month}/${date}/${year}`;



  useEffect(() => {
    if(!userData.is_staff) {
      window.location.replace('/404');
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('description', description);
    formData.append('source_name', sourceName);
    formData.append('link', link);
    
    formData.append('source_avatar', image);
    formData.append('preview', preview);
    formData.append('video', video);

    try {
      const response = await axios.post('http://localhost:8000/announcements/announcement/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      window.location.reload();
    } catch (error) {
      alert("Data error")
    }
  };

  return (
    <section className='w-1/2 mx-auto py-20'>
      <h1 className='text-2xl text-black-def'>Create Announcement</h1>
      <br />
      <form className='w-full' onSubmit={handleSubmit}>


        <InputContainer title='Title'>
          <TextInput value={title} onChange={(e) => setTitle(e.target.value)} className="w-full" type='text' placeholder='Enter announcement title' />
        </InputContainer>

        <br />

        <InputContainer title='Content'>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-32" placeholder='Enter announcement content' />
        </InputContainer>

        <br />

        <InputContainer title='Source name'>
          <TextInput value={sourceName} onChange={(e) => setSourceName(e.target.value)} className="w-full" placeholder='Source name' />
        </InputContainer>

        <br />

        <InputContainer title='Source logo 4x4'>
          <ImageField id="image" setURL={setImageURL} setImage={setImage} className="w-full" />
        </InputContainer>

        <br />

        <InputContainer title='Preview'>
          <ImageField id="preview" setURL={setPreviewURL} setImage={setPreview} className="w-full" />
        </InputContainer>

        <br />

        <InputContainer title='Video'>
          <VideoField setVideo={setVideo} className="w-full" />
        </InputContainer>

        <br />

        <InputContainer title='Link'>
          <TextInput value={link} onChange={(e) => setLink(e.target.value)} type="link" className="w-full" placeholder='https://' />
        </InputContainer>

        <br />
        <h1 className='text-black-def'>Current date is: <span className='text-black-50'>{formattedDate}</span></h1>
        <br />

        <Button type='submit' className='w-24' variant='primary'>
          Create
        </Button>
      </form>
    </section>
  )
}

export default CreateAnnouncement;
