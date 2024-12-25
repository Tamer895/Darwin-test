import React, {useEffect, useState} from 'react'
import ButtonRow from '@components/UI/Buttons/ButtonRow/ButtonRow'
import axios from 'axios';
import Course from '@components/UI/Cards/Course/Course';
import { domain } from '@configs/api/domain';

export default function MyEducation() {

  const buttonLabels = [
    { label: "Started"},
  ];
  const [my_courses, setMyCourses] = useState([])

  const fetchMyCourses = async () => {
    try {
      const response = await axios.get(`${domain}/users/my-courses/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`, // Токен авторизации
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
    <div className='w-4/5 mx-auto py-10'>
      <h1 className="text-2xl mb-5 text-black-def">My learning courses</h1>
              
      <ButtonRow
        buttons={buttonLabels}
        lightBg="bg-white"
        darkBg="bg-black-def"
        activeTextColor="text-white"
        inactiveTextColor="text-black"
      />

        <div className="w-full flex items-center justify-start overflow-hidden pb-10 pt-5">
            {my_courses.map((data, index) => (
              <div key={index} style={{ minWidth: '350px', maxWidth: '350px', marginRight: '20px' }}>
                <Course
                  style={{ width: '350px', padding: "10px" }}
                  name={data.name}
                  to={`/intro_lesson/${data.id}`}
                  img={domain + data.preview}
                  avatar={`${domain}${data.author.profile_photo}`}
                  language={data.language}
                  is_verified={data.author.is_verificated}
                  username={data.author.username}
                  rating={5}
                  level={data.level}
                  categories={data.category}
                />
              </div>
            ))}
          </div>


    </div>
  )
}
