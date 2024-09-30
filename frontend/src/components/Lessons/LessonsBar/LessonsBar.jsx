import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID";

import PermissionForCourse from "@utils/auth/Permission";

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';





export default function LessonsBar() {
  const { t } = useTranslation('lesson');
  const dispatch = useDispatch(); // Initialize useDispatch

  const [isPermitted, setIsPermitted] = useState(true);

  const courseData = useSelector((state) => state.courseID.courseData);
  const currentLesson = parseInt(localStorage.getItem('currentLesson'));
  let lessons = courseData.lessons === undefined ? null : courseData.lessons;


  

  function localizer(time) {
    const utcDate = new Date(time);
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = utcDate.getUTCFullYear();

    return `${day}.${month}.${year}`;
  }

  const handleClick = (index) => {
    localStorage.setItem('currentLesson', index);
  };

  return (
    <div className="w-1/5">
      <div className="w-full bg-white duration-200 ease-linear cursor-pointer rounded-xl overflow-hidden border border-black-10 border-solid mb-5">
        {/* Introduction lesson */}
        <a href={`/intro_lesson/${courseData.id}`}>
          <div className={`w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0 ${currentLesson === 0 ? 'bg-primary-def' : 'bg-white hover:bg-primary-5'}`}>
            <p className={`text-sm font-semibold ${currentLesson === 0 ? 'text-white' : 'text-black-def'}`}>
              <span className={currentLesson === 0 ? 'text-white' : 'text-primary-def'}>{t('lesson')} 0</span> Introduction
            </p>
            <span className={`text-[12px] ${currentLesson === 0 ? 'text-white' : 'text-gray'}`}>{localizer(courseData.created_at)}</span>
          </div>
        </a>
      </div>

      <div className="w-full bg-white rounded-xl overflow-hidden border border-black-10 border-solid">
        {/* Lessons list */}
        {lessons !== null
          ? lessons.map((e, index) => (
              <Link to={`/lesson/${e.id}`} key={e.id}>
                <div
                  onClick={() => handleClick(index+1)}
                  className={`w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0 ${currentLesson === index + 1 ? 'bg-primary-def' : 'bg-white hover:bg-primary-5'} `}
                >
                  <p className={`text-sm font-semibold ${currentLesson === index + 1 ? 'text-white' : 'text-black-def'}`}>
                    <span className={currentLesson === index+1 ? 'text-white' : 'text-primary-def'}>{t('lesson')} {index + 1}</span> {e.title}
                  </p>
                  <span className={`text-[12px] ${currentLesson === index+1 ? 'text-white' : 'text-gray'}`}>{localizer(e.created_at)}</span>
                </div>
              </Link>
            ))
          : ""}
      </div>

      {/* Create lessons button */}
      {isPermitted ? <div className="w-full bg-white hover:scale-105 duration-200 ease-linear cursor-pointer rounded-xl border border-black-10 border-solid mt-5">
        <div className="flex flex-col items-center w-full p-3">
          <div className="flex-center w-10 h-10 border-2 border-primary-def border-dashed rounded-full">
            <span className="material-symbols-rounded text-primary-def">add</span>
          </div>
          <span className="text-sm mt-2 text-black-def">{t('add_new')}</span>
        </div>
      </div> : ""}
      
    </div>
  );
}
