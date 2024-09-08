import React, {useEffect, useState} from 'react'

import { useParams, useNavigate } from 'react-router-dom';

import PermissionForCourse from '../../../utils/auth/Permission';
import FilterCourseID from "@utils/api/courses/datasets/FilterCourseID"

import LessonsBar from '@components/Lessons/LessonsBar/LessonsBar';
import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Content from '@components/layouts/Stacks/Content/Content';
import VideoAPI from '@components/UI/Media/Video/VideoAPI';

import { useSelector, useDispatch } from 'react-redux';

import { setCourse } from '@store/CourseID';
import { setCurrentLesson } from '@store/CurrentLesson';

export default function EditCourse() {
  const { id } = useParams(); 
  // const course = useSelector((state) => state.courseID.courseData);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      const courseData = await FilterCourseID(id);

      dispatch(setCourse(courseData));

      PermissionForCourse(courseData.author.id)

      dispatch(setCurrentLesson(0))
    };

    fetchData();
  }, []);



  return (
    <div className='w-full my-0 mx-auto bg-light_bg p-5'>

      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar/>


        <Content className="bg-white rounded-xl border border-black-10 border-solid" width="78%" height="700px">
          
        </Content>
      </Flexbox>
    </div>
  )
}
