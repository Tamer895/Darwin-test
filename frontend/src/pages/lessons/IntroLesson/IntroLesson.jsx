import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";
import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Video from '@components/UI/Media/Video/Video';
import MainTitle from '@components/UI/Typography/MainTitle/MainTitle';
import Button from '@components/UI/Buttons/Button/Button';

import CenteredForm from '@components/layouts/Stacks/Form/CenteredForm/CenteredForm';

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';
import { useTranslation } from'react-i18next';

export default function IntroLesson() {
  const { id } = useParams(); 
  const {t} = useTranslation('lesson');


  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseID.courseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await FilterCourseID(id);

        dispatch(setCourse(courseData));

        localStorage.setItem('currentLesson', 0);
        localStorage.setItem('lastSeenCourseID', id);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);



  const currentLesson = localStorage.getItem('currentLesson');

  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar/>
        <Content className="flex flex-col items-start bg-white p-5 pb-10 rounded-xl border border-black-10 border-solid" width="78%">
          
          

          <Video poster={course.preview} src={course.intro_video} width="100%" height="500px"/>
          <div className="w-full mt-10">
            <MainTitle className='text-2xl font-bold'>About course</MainTitle>
            <p className='mt-5 text-gray'>{course.description}</p>
          </div>

        </Content>
      </Flexbox>
    </div>
  );
}
