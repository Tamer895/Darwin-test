import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import FilterLessonID from '@utils/api/lessons/FilterLessonID';
import FilterCourseID from '@utils/api/courses/datasets/FilterCourseID';

import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import Video from '@components/UI/Media/Video/Video';
import MainTitle from '@components/UI/Typography/MainTitle/MainTitle';
import CreateElement from '@components/Elements/Create/CreateElement';
import CenteredForm from '@components/layouts/Stacks/Form/CenteredForm/CenteredForm';
import Button from '@components/UI/Buttons/Button/Button';

import VideoElement from '@components/Elements/View/Video/VideoElement';
import TextElement from '@components/Elements/View/Text/TextElement';

import { setLesson } from '@store/Lessons';
import { setCourse } from '@store/CourseID';

export default function Lesson() {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const lesson = useSelector((state) => state.lessons.lessonData);
  const courseData = useSelector((state) => state.courseID.courseData) === undefined ? null : '';

  const [elements, setElements] = useState([]);

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
  }, [courseData, dispatch]);

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

      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  // Handle lesson submission
  const pushLesson = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('is_active', true);

    try {
      await axios.patch(`http://127.0.0.1:8000/courses/lesson/${lesson.id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      window.location.reload();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="w-full my-0 mx-auto bg-light_bg p-5">
      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar />
        <Content className="flex flex-col items-start bg-white p-10 px-[10%] rounded-xl border border-black-10 border-solid" width="78%">
          <div className="w-full">
            <div className="w-full mb-20">
              <MainTitle>{lesson.title}</MainTitle>
              <p className="text-gray text-sm whitespace-pre-line mt-5">{lesson.description}</p>
            </div>

            {/* Render sorted elements */}
            <ul>
              {elements.map((element) => (
                <li key={element.id}>
                  {element.type === 'video' ? (
                    <VideoElement is_active={lesson.is_active} id={element.id} video={element.video} title={element.title}/>
                  ) : (
                    <TextElement is_active={lesson.is_active} id={element.id} title={element.title} text={element.text} />
                  )}
                </li>
              ))}
            </ul>

            {/* Conditional rendering for lesson submission */}
            {lesson.is_active === false && (
              <>
                <CreateElement />
                <div className="w-full flex items-center justify-end mt-5">
                  <Button onClick={pushLesson}>Push the lesson</Button>
                </div>
              </>
            )}
          </div>
        </Content>
      </Flexbox>
    </div>
  );
}
