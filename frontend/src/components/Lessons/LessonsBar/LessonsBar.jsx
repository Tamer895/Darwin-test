import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import CreateLesson from '@pages/forms/CreateLesson/CreateLesson';
import TextWithEllipsis from '@UI/Typography/Text/TextWithEllipsis';

import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";
import PermissionForCourse from "@utils/auth/Permission";

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';

export default function LessonsBar() {
  const { t } = useTranslation('lesson');
  const dispatch = useDispatch();

  const [createLesson, setCreateLesson] = useState(false);

  const courseData = useSelector((state) => state.courseID.courseData);
  const author_id = courseData.author ? courseData.author.id : null;
  const user_id = localStorage.getItem('user_id');

  const currentLesson = parseInt(localStorage.getItem('currentLesson'));
  const lessons = courseData.lessons || null;

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

  return (
    <div className="w-1/5">
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
      <div className="w-full bg-white rounded-xl overflow-hidden border border-black-10 border-solid">
        {lessons && lessons
          .filter(e => e.is_active)
          .map((e, index) => (
            <Link to={`/lesson/${e.id}`} key={e.id}>
              <div
                onClick={() => handleClick(e.id)} // Use lesson ID instead of index
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
          ))}
      </div>

      {/* Inactive Lessons */}
      {author_id == user_id && (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-black-10 border-solid mt-5">
          {lessons && lessons
            .filter(e => !e.is_active)
            .map((e, index) => (
              <Link to={`/lesson/${e.id}`} key={e.id}>
                <div
                  onClick={() => handleClick(e.id)} // Use lesson ID instead of index
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
            ))}
        </div>
      )}

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

      {createLesson && <CreateLesson setState={setCreateLesson} />}
    </div>
  );
}
