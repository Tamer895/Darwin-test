import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Course from '@components/UI/Cards/Course/Course';
import Button from '@components/UI/Buttons/Button/Button';

import { domain } from '@configs/api/domain';
// import Skeletom from '@mui'

import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';


export default function LastCourses() {
  const [courses, setCourses] = useState([]); // Store course data
  const scrollRef = useRef(null); // Ref to the scrollable container
  const scrollAmount = 400; // The amount to scroll when clicking arrows

  useEffect(() => {
    fetchCourses();
  }, []);

  // Function to fetch courses based on the page number
  const fetchCourses = async () => {
    try {
      const response = await axios.get(COURSES_API_ROUTES.LATEST_COURSES);
      // console.log(response.data)
      setCourses(response.data); // Update courses data
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Function to handle scrolling the container to the left or right
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const newScrollPosition =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth', // Smooth scrolling effect
      });
    }
  };

  return (
    <section className="w-full p-10 relative">
      <h1 className="text-2xl text-black-def">Последние добавленные уроки</h1>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="w-full flex items-center justify-start overflow-hidden pb-10 pt-5"
        style={{
          whiteSpace: 'nowrap',
          WebkitOverflowScrolling: 'touch', // Smooth scrolling for mobile devices
          scrollBehavior: 'smooth', // Ensure smooth scroll behavior
        }}
      >
        {courses.map((data, index) => (
          <div
            key={index}
            style={{
              minWidth: '350px', // Ensures that the card has a minimum width
              marginRight: '20px', // Adds some spacing between cards
              // display: 'inline-block',
            }}
          >
            <Course
              style={{
                  width: '350px',
                  padding: "10px"
              }}
              name={data.name}
              to={`/intro_lesson/${data.id}`}
              img={domain+data.preview}
              avatar={`${domain}${data.author.profile_photo}`}
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

      {/* Left and Right arrow buttons */}
      <Button
        onClick={() => handleScroll('left')}
        style={{borderRadius: "100px"}}
        className="w-16 h-16 absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 z-10"
      >
        <span class="material-symbols-rounded">
        arrow_back
        </span>
      </Button>
      <Button
        onClick={() => handleScroll('right')}
        style={{borderRadius: "100px"}}
        className="w-16 h-16 absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
        <span class="material-symbols-rounded">
        arrow_forward
        </span>
      </Button>
    </section>
  );
}
