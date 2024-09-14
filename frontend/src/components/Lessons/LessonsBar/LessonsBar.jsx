import React from 'react'
import { useSelector } from 'react-redux';

// import CurrentLesson from '@store/CurrentLesson';
import { useTranslation } from 'react-i18next';

export default function LessonsBar() {

  const {t} = useTranslation('lesson');


  const courseData = useSelector((state) => state.courseID.courseData);
  const currentLesson = useSelector((state) => state.currentLesson.id)

  let lessons = courseData.lessons == undefined ? [] : courseData.lessons


  function localizer(time) {
    const utcDate = new Date(time);
    
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = utcDate.getUTCFullYear();
  
    return `${day}.${month}.${year}`;
  }

  

  const handleRightClick = (event) => {
    event.preventDefault(); // Отключаем стандартное контекстное меню
    alert('Правая кнопка мыши нажата на блоке');
  };



  return (
    <div className="w-1/5">

      <div className="w-full bg-white duration-200 ease-linear cursor-pointer rounded-xl overflow-hidden border border-black-10 border-solid mb-5">
        {/* Introduction lesson */}
        <div className={`w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0 ${currentLesson == 0 ? 'bg-primary-def' : 'bg-white'}`}>

            <p className={`text-sm font-semibold ${currentLesson == 0 ? 'text-white' : 'text-primary-def'}`}>

              <span className={currentLesson == 0 ? 'text-white' : 'text-primary-def'}>{t('lesson')} 0</span> Introduction

            </p>

            <span className={`text-[12px] ${currentLesson == 0 ? "text-white" : "text-gray"}`}>{localizer(courseData.created_at)}</span>

        </div>
      </div>

      <div className='w-full bg-white rounded-xl overflow-hidden border border-black-10 border-solid'>


        


        {/* Lessons list */}
        {lessons.map((e, index) => (
          <div onContextMenu={handleRightClick} className={`w-full duration-100 ease-linear cursor-pointer p-3 border-b border-b-black-10 border-b-solid last:border-b-0 ${currentLesson == index+1 ? "bg-primary-def" : "bg-white hover:bg-primary-5"}`}>
            <p className='text-sm font-semibold' key={index}><span className='text-primary-def'>{t('lesson')} {index+1}</span> {e.title}</p>

            <span className='text-[12px] text-gray'>{localizer(e.created_at)}</span>
          </div>
        ))}

    </div>

    {/* Create lessons button */}
    <div className="w-full bg-white hover:scale-105 duration-200 ease-linear cursor-pointer rounded-xl border border-black-10 border-solid mt-5">
      <div className="flex flex-col items-center w-full p-3">

        <div className="flex-center w-10 h-10 border-2 border-primary-def border-dashed rounded-full">
          <span className="material-symbols-rounded text-primary-def">
          add
          </span>
        </div>

        <span className='text-sm mt-2 text-black-def'>{t('add_new')}</span>
        
      </div>
    </div>
  </div>
  )
}
