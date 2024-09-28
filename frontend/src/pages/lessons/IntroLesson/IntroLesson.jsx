import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";
import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Video from '@components/UI/Media/Video/Video';

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';

export default function IntroLesson() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseID.courseData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await FilterCourseID(id);
        dispatch(setCourse(courseData));
        dispatch(setCurrentLesson(0));
        localStorage.setItem('lastSeenCourseID', id);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar/>
        <Content className="flex flex-col items-start bg-white p-5 rounded-xl border border-black-10 border-solid" width="78%">
          <Video poster={course.preview} src={course.intro_video} width="100%" height="500px"/>
          <div className="w-full mt-10">
            <h1 className='text-2xl font-bold'>About course</h1>
            <p>{course.description}</p>
          </div>
        </Content>
      </Flexbox>
    </div>
  );
}
