import axios from 'axios';

export default async function FilterAuthorID(id) {
  try {
    const response = await axios.get(`http://localhost:8000/courses/author_id/${id}/`);
    return response.data; // Ensure this returns an array
  } catch (error) {
    throw error;
  }
}
