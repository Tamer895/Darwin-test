import React from 'react'
import { useSelector } from 'react-redux';

export default function LessonsBar() {

  const courseData = useSelector((state) => state.courseID.courseData);

  let lessons = courseData.lessons == undefined ? [] : courseData.lessons


  function localizer(time) {
    const utcDate = new Date(time);
    
    const day = String(utcDate.getUTCDate()).padStart(2, '0');
    const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = utcDate.getUTCFullYear();
  
    return `${day}.${month}.${year}`;
  }

  return (
    <div className="w-1/5">
      <div className='w-full bg-white rounded-xl border border-black-10 border-solid'>
        <div className="w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0">
            <p className='text-sm font-semibold'><span className='text-primary-def'>Lesson 0</span> Introduction</p>

            <span className='text-[12px] text-gray'>{localizer(courseData.created_at)}</span>
        </div>

        {lessons.map((e, index) => (
          <div className="w-full p-3 border-b border-b-black-10 border-b-solid last:border-b-0">
            <p className='text-sm font-semibold' key={index}><span className='text-primary-def'>Lesson {index+1}</span> {e.title}</p>

            <span className='text-[12px] text-gray'>{localizer(e.created_at)}</span>
          </div>
        ))}


    </div>


    <div className="w-full bg-white hover:scale-105 duration-200 ease-linear cursor-pointer rounded-xl border border-black-10 border-solid mt-5">
      <div className="flex flex-col items-center w-full p-3 border-b border-b-black-10 border-b-solid ">

        <div className="flex-center w-10 h-10 border-2 border-primary-def border-dashed rounded-full">
          <span className="material-symbols-rounded text-primary-def">
          add
          </span>
        </div>

        <span className='text-sm mt-2 text-black-def'>Add new lesson</span>
        
      </div>
    </div>
  </div>
  )
}
