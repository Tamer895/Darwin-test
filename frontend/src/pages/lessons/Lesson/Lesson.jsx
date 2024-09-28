import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FilterLessonID from '@utils/api/lessons/FilterLessonID';
import FilterCourseID from '@utils/api/courses/datasets/FilterCourseID';

import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';

import { setCurrentLesson } from '@store/CurrentLesson';
import { setCourse } from '@store/CourseID';
import { setLesson } from '@store/Lessons';

export default function Lesson() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const lesson = useSelector((state) => state.lessons.lessonData);
  const courseData = useSelector((state) => state.courseID.courseData) == undefined ? null : "";

  // Fetch the course data if it's missing from the store
  const setLessons = async () => {
    try {
      const lastSeenCourseID = localStorage.getItem('lastSeenCourseID');
      const courseData = await FilterCourseID(parseInt(lastSeenCourseID, 10));
      console.log(courseData);
      dispatch(setCourse(courseData));
      dispatch(setCurrentLesson(0));
    } catch (error) {
      console.error('Error fetching course data:', error);
    }
  };

  useEffect(() => {
    if (!courseData) {
      setLessons();
    }
  }, [courseData, dispatch]); // Correct dependency list

  // Fetch lesson data when `id` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lessonData = await FilterLessonID(id);
        dispatch(setLesson(lessonData));
        dispatch(setCurrentLesson(0));
      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar />
        <Content className="flex flex-col items-start bg-white p-5 rounded-xl border border-black-10 border-solid" width="78%">
          {lesson?.title}
        </Content>
      </Flexbox>
    </div>
  );
}
