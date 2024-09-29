import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FilterLessonID from '@utils/api/lessons/FilterLessonID';
import FilterCourseID from '@utils/api/courses/datasets/FilterCourseID';

import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Video from '@components/UI/Media/Video/Video';
import MainTitle from '@components/UI/Typography/MainTitle/MainTitle';

import { setLesson } from '@store/Lessons';
import { setCourse } from '@store/CourseID';

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




  const [elements, setElements] = useState([]);

  // Fetch lesson data when `id` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lessonData = await FilterLessonID(id);

        // Dispatch the lesson data to the store
        dispatch(setLesson(lessonData));

        // Combine and sort the videos and text by 'order' on the frontend
        const mergedElements = [
          ...lessonData.videos.map((video) => ({ ...video, type: 'video' })),
          ...lessonData.text.map((text) => ({ ...text, type: 'text' })),
        ];

        // Sort elements by the 'order' field
        const sortedElements = mergedElements.sort((a, b) => a.order - b.order);
        
        // Set the sorted elements in state
        setElements(sortedElements);
        localStorage.setItem('currentLesson', lessonData.id);

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
          <div className="w-full">


            <MainTitle>{lesson.title}</MainTitle>
            <p className='text-gray text-sm'>{lesson.description}</p>

            <br />



            {/* Render sorted elements */}
            <ul>
              {elements.map((element) => (
                <li key={element.id}>
                  {element.type === 'video' ? (
                    <Video src={element.video} width="70%" height="400px"/>
                  ) : (
                    <p>{element.title}: {element.text}</p>
                  )}
                </li>
              ))}
            </ul>




          </div>
        </Content>
      </Flexbox>
    </div>
  );
}
