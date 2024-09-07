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

export default function EditCourse() {
  const { id } = useParams(); 
  const [authorID, setAuthorID] = useState();
  const course = useSelector((state) => state.courseID.courseData);
  const dispatch = useDispatch();

  PermissionForCourse(1)

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await FilterCourseID(id);
      dispatch(setCourse(courseData));
    };

    fetchData();
  }, []);



  return (
    <div className='w-full bg-light_bg p-5'>

      <Flexbox direction="row" items="flex-start" justify="space-between">
        <LessonsBar/>


        <Content className="bg-white rounded-xl border border-black-10 border-solid" width="78%">
          
        </Content>
      </Flexbox>
    </div>
  )
}
