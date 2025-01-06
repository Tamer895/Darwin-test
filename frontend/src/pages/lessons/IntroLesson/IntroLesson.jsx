import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAccessToken } from '@utils/auth/auth';

import axios from 'axios';

import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";
import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Video from '@components/UI/Media/Video/Video';
import MainTitle from '@components/UI/Typography/MainTitle/MainTitle';
import Button from '@components/UI/Buttons/Button/Button';

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';
import { useTranslation } from 'react-i18next';

import { USERS_API_ROUTES } from '@configs/api/Users/users';

export default function IntroLesson() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const {t} = useTranslation('lesson');


  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseID.courseData);
  const [lessons, setLessons] = useState([]);
  const user_id = localStorage.getItem('user_id');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const courseData = await FilterCourseID(id);

        dispatch(setCourse(courseData));

        setLessons(courseData.lessons || []);
        localStorage.setItem('currentLesson', 0);
        localStorage.setItem('lastSeenCourseID', id);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);



  const addToMyCourses = async () => {
    try {
      const response = await axios.post(
        USERS_API_ROUTES.ADD_TO_MY_COURSES,
        { course_id: course.id, 
          user_id: user_id},
        {
          headers: {
            // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding course:', error.response?.data || error.message);
    }
  };



  const handleClick = () => {
    
    if (lessons.length > 0) {
      addToMyCourses();
      const firstLessonId = lessons[0].id;
      window.location.href=`/lesson/${firstLessonId}`;
      localStorage.setItem('currentLesson', firstLessonId);
      dispatch(setCurrentLesson(firstLessonId));
    } else {
      // console.warn("No lessons available to navigate.");
      addToMyCourses();
    }
  };


  const currentLesson = localStorage.getItem('currentLesson');

  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar/>
        <Content className="flex flex-col items-start bg-white p-5 pb-10 rounded-xl border border-black-10 border-solid" width="78%">
          
          

          <Video poster={course.preview} src={course.intro_video} width="100%" height="500px"/>
          <div className="w-full mt-16 px-7">
            <MainTitle className='text-2xl font-bold'>About course</MainTitle>
            <p className='mt-5 text-gray'>{course.description}</p>
          </div>

          <br />

          <div className="w-full flex justify-end">
            <Button className="rounded-lg" onClick={handleClick}>{t('start_learning')}</Button>
          </div>

        </Content>
      </Flexbox>
    </div>
  );
}
