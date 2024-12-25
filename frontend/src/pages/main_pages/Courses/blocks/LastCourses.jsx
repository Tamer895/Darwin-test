import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Course from '@components/UI/Cards/Course/Course';
import ButtonRow from '@components/UI/Buttons/ButtonRow/ButtonRow';
import ArrowBtn from '@components/UI/Buttons/ArrowBtn/ArrowBtn';
import { domain } from '@configs/api/domain';
import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';

export default function LastCourses() {
  const [courses, setCourses] = useState([]); // Store course data
  const [pagination, setPagination] = useState({ next: null, previous: null, count: 0 }); // Pagination data
  const scrollRef = useRef(null); // Ref to the scrollable container
  const scrollAmount = 400; // The amount to scroll when clicking arrows
  const [level, setLevel] = useState('beginner');

  const buttonLabels = [
    { label: "Beginner", onClick: () => setLevel("beginner") },
    { label: "Intermediate", onClick: () => setLevel("intermediate") },
    { label: "Advanced", onClick: () => setLevel("advanced") },
  ];

  useEffect(() => {
    fetchCourses();
  }, [level]);

  // Function to fetch courses based on the page number
  const fetchCourses = async (url = `${COURSES_API_ROUTES.LATEST_COURSES}${level}/`) => {
    try {
      const response = await axios.get(url);
      setCourses(response.data.results); // Update courses data
      setPagination({
        next: response.data.next,
        previous: response.data.previous,
        count: response.data.count
      });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Handle scroll to left or right
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const newScrollPosition = direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  // Function to handle pagination (next and previous)
  const handlePagination = (url) => {
    fetchCourses(url);
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
                lightBg="bg-light_bg"
                darkBg="bg-black-def"
                activeTextColor="text-white"
                inactiveTextColor="text-black"
              />
            </div>
            <div className="flex items-center">
              <ArrowBtn onClick={() => handleScroll('left')} className="w-10 h-10 bg-gray-300 z-10">
                <span class="material-symbols-rounded">arrow_back</span>
              </ArrowBtn>
              
              <ArrowBtn style={{marginLeft:"10px"}} onClick={() => handleScroll('right')} className="w-10 h-10 bg-gray-300 rounded-full z-10">
                <span class="material-symbols-rounded">arrow_forward</span>
              </ArrowBtn>
            </div>
          </div>

          {/* Scrollable container */}
          <div ref={scrollRef} className="w-full flex items-center justify-start overflow-hidden pb-10 pt-5" style={{ whiteSpace: 'nowrap' }}>
            {courses.map((data, index) => (
              <div key={index} style={{ minWidth: '350px', maxWidth: '350px', marginRight: '20px' }}>
                <Course
                  style={{ width: '350px', padding: "10px" }}
                  name={data.name}
                  to={`/intro_lesson/${data.id}`}
                  img={domain + data.preview}
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

          {/* Pagination controls */}
          <div className="flex justify-between mt-5">
            {pagination.previous && (
              <Button onClick={() => handlePagination(pagination.previous)}>Previous</Button>
            )}
            {pagination.next && (
              <Button onClick={() => handlePagination(pagination.next)}>Next</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
