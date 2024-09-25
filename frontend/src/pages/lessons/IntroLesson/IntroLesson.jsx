import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PermissionForCourse from '@utils/auth/Permission';
import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";

import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Video from '@components/UI/Media/Video/Video';

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';
import { setLesson } from '@store/Lessons';

export default function IntroLesson() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons.lessonData);
  const course = useSelector((state) => state.courseID.courseData);
//   alert(course.intro_video)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await FilterCourseID(id);
        dispatch(setCourse(courseData));
        dispatch(setCurrentLesson(0));
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);  // Добавляем зависимости


  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar/>
        <Content className="bg-white p-5 rounded-xl border border-black-10 border-solid" width="78%">
          {lessons && lessons.map((lesson) => (
            <p key={lesson.id}>{lesson.title}</p>
          ))}

        <Video src={course.intro_video} width="100%" height="500px"/>

        </Content>
      </Flexbox>
    </div>
  );
}
