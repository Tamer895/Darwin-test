import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Course from '@components/UI/Cards/Course/Course';
import Loading from '@components/layouts/Loading/Loading';


import { domain } from '@configs/api/domain';
import { COURSES_API_ROUTES } from '@configs/api/Courses/courses';

import axios from 'axios';

export default function Results() {
    const { query } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showNoCourses, setShowNoCourses] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(COURSES_API_ROUTES.SEARCH+`?query=${query}`);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // stop loading after fetching data
            }
        };


        fetchData();
    }, [query, data.length]);

    return (
        <div className='w-[1400px] mx-auto flex flex-wrap py-5 items-center justify-left'>
            {loading ? (
                <Loading />
            ) : (


                (data.length > 0 ? data.map((course, index) => (
                  <Course
                      style={{
                          width: '350px',
                          padding: "10px"
                      }}
                      key={index}
                      name={course.name}
                      to={`/intro_lesson/${course.objectID}`}
                      img={domain+"media/" + course.preview}
                      language={course.language}
                      username={course.author_data.username}
                      avatar={domain+`media/${course.author_data.profile_photo}`}
                      rating={5}
                      level={course.level}
                      categories={course.category}
                  />
                )) : <p>No courses found</p>)


            )}
        </div>
    );
}
