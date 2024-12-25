import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Sidebar from '@components/layouts/Sidebar/Sidebar';
import Content from '@components/layouts/Stacks/Content/Content';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Button from '@components/UI/Buttons/Button/Button';
import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';
import Slider from '@mui/material/Slider';
import Message from '@components/UI/Message/Message';


export default function DeleteCourse() {
  const { t } = useTranslation(['studio', 'errors']);
  const userData = JSON.parse(localStorage.getItem('user'));
  const [value, setValue] = useState('');

  const [isOpened, setIsOpened] = useState(false);

  const [slider, setSlider] = useState(0); // Default value

 
  
  const placeholder = userData.username+":"+"course_id"

  const courseId = value.split(':')[1]; 

  const [show, setShow] = useState(false);

  
  const handleChange = (event, newValue) => {
    setSlider(newValue); 
    if(newValue == 100){
      deleteCourse();
    }
  };


  const dataCheck = ()=>{
    if (!courseId) {
      alert(t('errors:invalid_course_id')); // Display an error if courseId is empty
      return;
    }
    else if (value.split(':')[0] != userData.username) {
      alert(`Your entered data ${value.split(':')[0]} is incorrect`); // Display an error if courseId is empty
      return;
    }
    else{
      setIsOpened(true); // Show the confirmation modal
    }
  }


  const deleteCourse = async () => {
    try {
      const response = await axios.delete(`${COURSES_API_ROUTES.DELETE}${courseId}/`, {
        data: { user_id: userData.id }, // Pass data in the config
      });
      alert(t('studio:course_deleted')); // Notify success
      window.location.href="/editor"
    } catch (error) {
      console.error(error.response || error.message);
      alert(t('errors:delete_failed')); // Notify failure
      window.location.reload()
    }
  };



  return (
    <Flexbox direction="row" items="flex-start" justify="space-between" className="px-40 py-16 bg-light_bg">
      <Sidebar focused="2" />
      <Content
        width="78%"
        className="flex-col items-center bg-white border-black-10 border-solid border rounded-xl py-10"
      >
        <div>
          <div className="flex mb-5">
            <TextInput
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="w-[300px] mr-1 focus:border-red-500"
            />
            <Button onClick={dataCheck} className="rounded-md bg-red-500 hover:bg-red-600">Delete</Button>
          </div>

          {isOpened &&
          <Slider
          aria-label="Temperature"
          value={slider}
          onChange={handleChange}
          shiftStep={1}
          step={1}
          marks={false}
          min={0}
          max={100}
          sx={{
            '& .MuiSlider-track': {
              height: 30, // Adjust the thickness of the track
              borderRadius: "100px 0 0 100px",
              backgroundColor: 'rgb(220 38 38)', // Optional: Change the background color of the track
              borderColor: "rgb(220 38 38)"
            },
            '& .MuiSlider-rail': {
              height: 30, // Adjust the thickness of the rail
              borderRadius: "100px",
              backgroundColor: "rgba(52, 71, 246, 0.5)"
            },
            '& .MuiSlider-thumb': {
              width: 30, // Optional: Adjust size of the thumb
              height: 30, // Optional: Adjust size of the thumb
              borderRadius: "100px",
              backgroundColor: "rgb(52, 71, 246)", // Optional: Change the background color of the thumb
            },
          }}
        />
          }
            
        </div>
      </Content>
      <Message
        show={show}
        title="Title"
        text="This is a confirmation message.is a confirmation message.is a confirmation message.is a confirmation message.is a confirmation message."
      />
    </Flexbox>
  );
}
