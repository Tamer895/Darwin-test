import axios from 'axios';

export default async function FilterLessonID(id) {
  try {
    const response = await axios.get(`http://localhost:8000/editcourse/lesson/${id}/`);
    return response.data; // Ensure this returns an array
  } catch (error) {
    throw error;
  }
}
