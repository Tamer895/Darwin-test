import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Course from '@components/UI/Cards/Course/Course';
import Button from '@components/UI/Buttons/Button/Button';
import ArrowBtn from '@components/UI/Buttons/ArrowBtn/ArrowBtn';

import { domain } from '@configs/api/domain';
// import Skeletom from '@mui'

import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';
import ButtonRow from '@components/UI/Buttons/ButtonRow/ButtonRow';


export default function LastCourses() {
  const [courses, setCourses] = useState([]); // Store course data
  const scrollRef = useRef(null); // Ref to the scrollable container
  const scrollAmount = 400; // The amount to scroll when clicking arrows

  const buttonLabels = [
    {label: "Beginner", onClick: () => alert("nasn")},
    {label: "Intermediate"},
    {label: "Advanced"},
  ];

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
    <section className='box-border w-full p-10'>
      <div className="box-border w-full bg-light_bg rounded-2xl">
        <div className="w-full p-10 relative">

          <div className="flex-center-between">
            <div className="">
              <h1 className="text-3xl font-medium text-black-def">Последние добавленные уроки</h1>
              <h2 className='text-md font-normal mt-1 text-gray'>Откройте для себя самые недавно добавленные уроки для улучшения вашего обучения</h2>

              <br />

              <ButtonRow
                buttons={buttonLabels}
                lightBg="bg-light_bg"  // The light background for the row
                darkBg="bg-black-def"    // The dark background for the moving bar
                activeTextColor="text-white" // Text color when a button is active
                inactiveTextColor="text-black" // Text color when a button is inactive
              />
            </div>

            <div className="flex items-center">
              {/* Left and Right arrow buttons */}
              <ArrowBtn
                onClick={() => handleScroll('left')}
                className="w-10 h-10 bg-gray-300 z-10"
              >
                <span class="material-symbols-rounded">
                arrow_back
                </span>
              </ArrowBtn>
              <ArrowBtn
                onClick={() => handleScroll('right')}
                style={{marginLeft: "10px"}}
                className="w-10 h-10 bg-gray-300 rounded-full z-10"
              >
                <span class="material-symbols-rounded">
                arrow_forward
                </span>
              </ArrowBtn>
            </div>
          </div>

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
                  minWidth: '350px',
                  maxWidth: '350px', // Ensures that the card has a minimum width
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

        </div>
      </div>
    </section>
  );
}
