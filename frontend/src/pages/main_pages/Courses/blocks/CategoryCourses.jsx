import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';
import CoursesRow from '@components/layouts/CoursesRow/CoursesRow';
import { useTranslation } from 'react-i18next'

function CategoryCourseRow({ category }) {
  const { t } = useTranslation('courses');
  const [courses, setCourses] = useState([]); // Store course data

  useEffect(() => {
    // alert(COURSES_API_ROUTES.CATEGORY_COURSE+category)
    fetchCourses();
  }, []); // Refetch if category changes

  const fetchCourses = async () => {
    try {
      const response = await axios.get(COURSES_API_ROUTES.CATEGORY_COURSE+category+"/");
      setCourses(response.data); // Update courses data
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return <CoursesRow title={`${t('category')}: `+category} courses={courses} />;
}

function CategoryCourses() {
  const user = JSON.parse(localStorage.getItem('user')); // Parse user preferences
  const categories = user?.preferences || []; // Safeguard in case preferences is undefined


  return (
    <>
      {categories.map((value, index) => (
        <CategoryCourseRow key={index} category={value} />
      ))}
    </>
  );
}

export default CategoryCourses;
