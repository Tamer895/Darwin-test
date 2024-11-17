import axios from 'axios';
import { LESSONS_API_ROUTES } from '@configs/api/Lessons/lessons';

export const deactivateLesson = async (id) => {
  const formData = new FormData();
  formData.append('is_active', false);
  return axios.patch(`${LESSONS_API_ROUTES.PATCH}${id}/`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const deleteLesson = async (id) => {
  return axios.delete(`${LESSONS_API_ROUTES.DELETE}${id}/`);
};
