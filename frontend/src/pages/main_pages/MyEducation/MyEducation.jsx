import React, {useEffect, useState} from 'react'
import ButtonRow from '@components/UI/Buttons/ButtonRow/ButtonRow'
import axios from 'axios';
import Course from '@components/UI/Cards/Course/Course';
import CoursesRow from '@components/layouts/CoursesRow/CoursesRow';
import { useTranslation } from 'react-i18next';

import { domain } from '@configs/api/domain';

export default function MyEducation() {
  const { t } = useTranslation('my_education');

  const links = [
    {
      title: "Started",
      path: '/my_education',
    },
    {
      title: "Liked",
      path: '/my_education2',
    },
  ];



  const [my_courses, setMyCourses] = useState([])
  const [page, setPage] = useState(window.location.pathname);

  const fetchMyCourses = async () => {
    try {
      const response = await axios.post(`${domain}/users/my-courses/`, {
        user_id: localStorage.getItem('user_id'),
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMyCourses(response.data.my_courses); // Список курсов
    } catch (error) {
      console.error('Error fetching courses:', error.response?.data || error.message);
    }
  };
  
  useEffect(() => {
    fetchMyCourses();
  }, []);


  return (
    <div className='w-9/10 mx-auto pb-10'>
      {/* <h1 className="text-2xl mb-5 text-black-def">My learning courses</h1>
      
              
      <ButtonRow
        buttons={buttonLabels}
        lightBg="bg-white"
        darkBg="bg-black-def"
        activeTextColor="text-white"
        inactiveTextColor="text-black"
      /> */}

      {/* <div className="w-full p-10 pt-12 flex flex-col bg-primary-def">
        <div className="w-full">
          <h1 className='text-white font-medium text-4xl'>My education</h1>
        </div>
      </div> */}

      <CoursesRow title={t('main_title')} courses={my_courses} />


    </div>
  )
}
