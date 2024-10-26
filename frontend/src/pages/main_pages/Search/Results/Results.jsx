import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Course from '@components/UI/Cards/Course/Course';
import Loading from '@components/layouts/Loading/Loading';

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
                const response = await axios.get(`http://localhost:8000/courses/search/?query=${query}`);
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
        <div className='w-full flex items-center justify-between'>
            {loading ? (
                <Loading />
            ) : (


                (data.length > 0 ? data.map((course, index) => (
                  <Course
                      style={{
                          width: '400px',
                          padding: "10px"
                      }}
                      key={index}
                      name={course.name}
                      to={`/intro_lesson/${course.objectID}`}
                      img={"http://localhost:8000/media/" + course.preview}
                      language={course.language}
                      username={course.username}
                      rating={5}
                      level={course.level}
                      categories={course.category}
                  />
                )) : <p>No courses found</p>)


            )}
        </div>
    );
}
