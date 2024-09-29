import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FilterLessonID from '@utils/api/lessons/FilterLessonID';
import FilterCourseID from '@utils/api/courses/datasets/FilterCourseID';

import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Button from '@components/UI/Buttons/Button/Button';

import { setCurrentLesson } from '@store/CurrentLesson';
import { setCourse } from '@store/CourseID';
import { setLesson } from '@store/Lessons';

import Video from '@components/UI/Media/Video/Video';

import MainTitle from '@components/UI/Typography/MainTitle/MainTitle';




export default function Lesson() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const lesson = useSelector((state) => state.lessons.lessonData);
  const courseData = useSelector((state) => state.courseID.courseData) == undefined ? null : "";




  // Fetch the course data if it's missing from the store
  const setLessons = async () => {
    try {
      const lastSeenCourseID = localStorage.getItem('lastSeenCourseID');
      const courseData = await FilterCourseID(parseInt(lastSeenCourseID));

      dispatch(setCourse(courseData));
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
        // dispatch(setCurrentLesson(parseInt(lessonData.id)));
        localStorage.setItem('currentLesson', lessonData.id);

      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);


  const currentLesson = localStorage.getItem('currentLesson');



  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar />
        <Content className="flex flex-col items-start bg-white p-5 rounded-xl border border-black-10 border-solid" width="78%">
          {/* {lesson?.title} */}

          <div className="w-full">
            <MainTitle>{lesson.title}</MainTitle>
            <p className='text-gray text-sm'>{lesson.description}</p>

            <br />

            <ul>
              {lesson.videos == undefined ? "" : lesson.videos.map((video) => (
                <li key={video.id}>
                  <Video src={video.video} width="70%" height="400px"/>
                </li>
              ))}
            </ul>

            <br />
            <ul>
              {lesson.text == undefined ? "" : lesson.text.map((text) => (
                <li key={text.id}>{text.title}: {text.text}</li>
              ))}
            </ul>
          </div>
        </Content>
      </Flexbox>
    </div>
  );
}
