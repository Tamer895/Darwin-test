import React, { useEffect, useState, useRef } from 'react';
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
import GrayBtn from '@components/UI/Buttons/GrayBtn/GrayBtn';

import { LESSONS_API_ROUTES } from '@configs/api/Lessons/lessons';

import VideoElement from '@components/Elements/View/Video/VideoElement';
import TextElement from '@components/Elements/View/Text/TextElement';
import ImageElement from '@components/Elements/View/Image/ImageElement'; // Import ImageElement component

import { setLesson } from '@store/Lessons';
import { setCourse } from '@store/CourseID';

export default function Lesson() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const lesson = useSelector((state) => state.lessons.lessonData);
  const courseData = useSelector((state) => state.courseID.courseData) === undefined ? null : '';

  const [elements, setElements] = useState([]);

  const divRef = useRef(null); // Reference to the div
  const [isFullscreen, setIsFullscreen] = useState(false); // State to track fullscreen

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (divRef.current.requestFullscreen) {
        divRef.current.requestFullscreen();
      } else if (divRef.current.webkitRequestFullscreen) {
        divRef.current.webkitRequestFullscreen(); // Safari
      } else if (divRef.current.msRequestFullscreen) {
        divRef.current.msRequestFullscreen(); // IE/Edge
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
      setIsFullscreen(false);
    }
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lessonData = await FilterLessonID(id);

        dispatch(setLesson(lessonData));

        const mergedElements = [
          ...lessonData.videos.map((video) => ({ ...video, type: 'video' })),
          ...lessonData.text.map((text) => ({ ...text, type: 'text' })),
          ...lessonData.images.map((image) => ({ ...image, type: 'image' })) // Add image elements here
        ];

        const sortedElements = mergedElements.sort((a, b) => a.order - b.order);

        setElements(sortedElements);
      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  const pushLesson = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('is_active', true);

    try {
      await axios.patch(LESSONS_API_ROUTES.PATCH + `${lesson.id}/`, formData, {
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

        <div ref={divRef} className="w-[78%] overflow-scroll flex flex-col items-start bg-white p-10 px-[10%] rounded-xl border border-black-10 border-solid">
          <div className="w-full">
            <div className="w-full mb-20">
              <div className="flex items-center justify-between">
                <MainTitle>{lesson.title}</MainTitle>
                <GrayBtn onClick={toggleFullscreen}>
                  <span className="material-symbols-outlined">
                    {isFullscreen ? "fullscreen_exit" : "fullscreen"}
                  </span>
                </GrayBtn>
              </div>

              <p className="text-gray text-sm whitespace-pre-line mt-5">{lesson.description}</p>
            </div>

            {/* Render sorted elements */}
            <ul>
              {elements.map((element) => (
                <li key={element.id}>
                  {element.type === 'video' ? (
                    <VideoElement is_active={lesson.is_active} id={element.id} video={element.video} title={element.title} />
                  ) : element.type === 'text' ? (
                    <TextElement is_active={lesson.is_active} id={element.id} title={element.title} text={element.text} />
                  ) : (
                    <ImageElement is_active={lesson.is_active} id={element.id} title={element.title} image={element.image} /> // Render image
                  )}
                </li>
              ))}
            </ul>

            {lesson.is_active === false && (
              <>
                <CreateElement />
                <div className="w-full flex items-center justify-end mt-5">
                  <Button onClick={pushLesson}>Push the lesson</Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Flexbox>
    </div>
  );
}
