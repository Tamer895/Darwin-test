import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Course from '@components/UI/Cards/Course/Course';

export default function LastCourses() {
  const [courses, setCourses] = useState([]); // Store course data
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [totalPages, setTotalPages] = useState(1); // Total number of pages

  useEffect(() => {
    fetchCourses(currentPage);
  }, [currentPage]);

  // Function to fetch courses based on the page number
  const fetchCourses = async (page) => {
    try {
      const response = await axios.get(`http://localhost:8000/courses/course/?page=${page}`);
      setCourses(response.data.results); // Update courses data
      setTotalPages(Math.ceil(response.data.count / response.data.results.length)); // Calculate total pages
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Handle page change when user clicks on next/previous buttons
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="w-full p-10">
      <h1 className="text-2xl font-semibold text-black-def">Последние добавленные уроки</h1>

      <div
        className="w-full flex items-center justify-start overflow-x-auto pb-10 pt-5"
        style={{
          whiteSpace: 'nowrap',
          overflowX: 'auto', // Ensure horizontal scrolling
          WebkitOverflowScrolling: 'touch', // Smooth scrolling for mobile devices
        }}
      >
        {courses.map((data, index) => (
          <div
            key={index}
            style={{
              minWidth: '400px', // Ensures that the card has a minimum width
              marginRight: '20px', // Adds some spacing between cards
              display: 'inline-block',
            }}
          >
            <Course
              name={data.name}
              to={`/intro_lesson/${data.id}`}
              img={data.preview}
              avatar={`http://localhost:8000${data.author.profile_photo}`}
              language={data.language}
              is_verified={data.author.is_verificated}
              username={data.author.username}
              rating={5}
              level={data.level}
              categories={data.category}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {/* <div className="pagination-controls mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 ml-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div> */}
    </section>
  );
}
