import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Menu from '@UI/Menu/Menu';
import CreateLesson from '@pages/forms/CreateLesson/CreateLesson';
import CourseSettiings from '../../../pages/forms/CourseSettings/CourseSettings';
import TextWithEllipsis from '@UI/Typography/Text/TextWithEllipsis';

import { LESSONS_API_ROUTES } from '../../../configs/api/Lessons/lessons';

import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";
import PermissionForCourse from "@utils/auth/Permission";

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';

import "./style.css"

import axios from 'axios';

export default function LessonsBar() {
  const { t } = useTranslation('lesson');
  const dispatch = useDispatch();
  
  const divRef = useRef(null);
  const [createLesson, setCreateLesson] = useState(false);
  const [courseSettings, setCourseSettings] = useState(false);
  const [isOpen, setIsOpen] = useState();

  const courseData = useSelector((state) => state.courseID.courseData);
  const author_id = courseData.author ? courseData.author.id : null;
  const user_id = localStorage.getItem('user_id');
  const currentLesson = parseInt(localStorage.getItem('currentLesson'));
  const lessons = courseData.lessons || null;

  // Convert UTC time to DD.MM.YYYY format
  function localizer(time) {
    const utcDate = new Date(time);
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
    const year = utcDate.getUTCFullYear();
    return `${day}.${month}.${year}`;
  }

  const handleClick = (lessonId) => {
    localStorage.setItem('currentLesson', lessonId);
    dispatch(setCurrentLesson(lessonId));
  };

  const handleRightClick = (e, index) => {
    e.preventDefault();
    setIsOpen(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicked outside the div with a specific class
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Deactivate lesson
  async function deactivate(id) {
    const formData = new FormData();
    formData.append('is_active', false);

    try {
      await axios.patch(LESSONS_API_ROUTES.PATCH + `${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      window.location.reload();
    } catch (error) {
      // console.error('Error submitting the form:', error);
    }
  }

  // Delete lesson
  async function deleteLesson(id) {
    try {
      await axios.delete(LESSONS_API_ROUTES.DELETE+`${id}/`);
      window.location.reload();
    } catch (error) {
      // console.error('Error deleting the lesson:', error);
    }
  }

  return (
    <div className="w-1/5">
      {/* Introduction lesson */}
      <div className="w-full bg-white duration-200 ease-linear cursor-pointer rounded-xl overflow-hidden border border-black-10 border-solid mb-5">
        <a href={`/intro_lesson/${courseData.id}`}>
          <div className={`w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0 ${currentLesson === 0 ? 'bg-primary-def' : 'bg-white hover:bg-primary-5'}`}>
            <p className={`text-sm font-semibold ${currentLesson === 0 ? 'text-white' : 'text-black-def'}`}>
              <span className={currentLesson === 0 ? 'text-white' : 'text-primary-def'}>{t('lesson')} 0</span> Introduction
            </p>
            <span className={`text-[12px] ${currentLesson === 0 ? 'text-white' : 'text-gray'}`}>{localizer(courseData.created_at)}</span>
          </div>
        </a>
      </div>

      {/* Active Lessons */}
      <div className="w-full bg-white rounded-xl overflow-hidden border border-black-10 border-solid active_lessons">

        {lessons && lessons
          .filter(e => e.is_active)
          .map((e, index) => (
            <div key={e.id}>
              <Link to={`/lesson/${e.id}`}>
                <div
                  onClick={() => handleClick(e.id)}
                  onContextMenu={(e) => handleRightClick(e, index + 1)}
                  className={`w-full p-3 border-b border-b-black-10 border-b-solid ${
                    currentLesson === e.id ? 'bg-primary-def' : 'bg-white hover:bg-primary-5'
                  }`}
                >
                  <p className={`text-sm font-semibold ${currentLesson === e.id ? 'text-white' : 'text-black-def'}`}>
                    <span className={currentLesson === e.id ? 'text-white' : 'text-primary-def'}>
                      {t('lesson')} {index + 1}
                    </span>{' '}
                    <TextWithEllipsis maxLength={53} text={e.title} />
                  </p>
                  <span className={`text-[12px] ${currentLesson === e.id ? 'text-white' : 'text-gray'}`}>
                    {localizer(e.created_at)}
                  </span>
                </div>
              </Link>



              {isOpen === index + 1 && author_id == user_id &&(
                <div ref={divRef}>
                  <Menu id="active_lesson" isOpen={true}>
                    <li><button onClick={() => deactivate(e.id)}>Deactivate</button></li>
                    <li className="text-red-500"><button onClick={() => deleteLesson(e.id)}>Delete</button></li>
                  </Menu>
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Inactive Lessons */}
      {author_id == user_id && (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-black-10 border-solid mt-5">
          {lessons && lessons
            .filter(e => !e.is_active)
            .map((e, index) => (
              <React.Fragment key={e.id}>
                <Link to={`/lesson/${e.id}`}>
                  <div
                    onClick={() => handleClick(e.id)}
                    onContextMenu={(e) => handleRightClick(e, -(index + 1))}
                    className={`w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0 ${
                      currentLesson === e.id ? 'bg-primary-def' : 'bg-white hover:bg-primary-5'
                    }`}
                  >
                    <p className={`text-sm font-semibold ${currentLesson === e.id ? 'text-white' : 'text-black-def'}`}>
                      <span className={currentLesson === e.id ? 'text-white' : 'text-primary-def'}>
                        {t('lesson')} {index + 1}
                      </span>{' '}
                      <TextWithEllipsis maxLength={53} text={e.title} />
                    </p>
                    <span className={`text-[12px] ${currentLesson === e.id ? 'text-white' : 'text-gray'}`}>
                      {localizer(e.created_at)}
                    </span>
                  </div>
                </Link>


                {isOpen === -(index + 1) && (
                  <div ref={divRef}>
                    <Menu id="active_lesson" isOpen={true}>
                      <li className="text-red-500"><button onClick={() => deleteLesson(e.id)}>Delete</button></li>
                    </Menu>
                  </div>
                )}

                
              </React.Fragment>
            ))}
        </div>
      )}

      {/* Create Lesson */}
      {author_id == user_id && (
        <div onClick={() => setCreateLesson(!createLesson)} className="w-full bg-white hover:scale-105 duration-200 ease-linear cursor-pointer rounded-xl border border-black-10 border-solid mt-5">
          <div className="flex flex-col items-center w-full p-3">
            <div className="flex-center w-10 h-10 border-2 border-primary-def border-dashed rounded-full">
              <span className="material-symbols-rounded text-primary-def">add</span>
            </div>
            <span className="text-sm mt-2 text-black-def">{t('add_new')}</span>
          </div>
        </div>
      )}

      {/* General settings */}
      {author_id == user_id && (
        <div onClick={() => setCourseSettings(!courseSettings)} className="w-full bg-white hover:scale-105 duration-200 ease-linear cursor-pointer rounded-xl border border-black-10 border-solid mt-5">
          <div className="flex flex-col items-center w-full p-3">
            <span className="material-symbols-rounded text-primary-def text-4xl">settings</span>
            <span className="text-sm mt-2 text-black-def">{t('general_settings')}</span>
          </div>
        </div>
      )}

      {createLesson && <CreateLesson setState={setCreateLesson} />}
      {courseSettings && <CourseSettiings setState={setCourseSettings} />}
    </div>
  );
}