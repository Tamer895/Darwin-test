import axios from 'axios';

export default async function fetchDataID(id) {
  try {
    const response = await axios.get(`http://localhost:8000/users/user_info/${id}/`);
    return response.data; // Ensure this returns an array
  } catch (error) {
    throw error;
  }
}
