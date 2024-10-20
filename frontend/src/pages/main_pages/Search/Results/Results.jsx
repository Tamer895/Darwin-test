import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Course from '@components/UI/Cards/Course/Course';

import axios from 'axios';


export default function Results() {
    const { query } = useParams(); 
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/courses/search/?query=${query}`); 
            setData(response.data);
        } catch (err) {
            setError(err.message); 
        }
        };

        fetchData();
    }, []); 


    return (
        <div className='w-full flex items-center justify-between'>
            {data.length > 0 ? (
            data.map((data, index) => (
              <Course
                style={{
                  width: '400px',
                  padding: "10px"
                }} // Added style prop to customize card size
                key={index} // Added key prop
                name={data.name}
                to={`/intro_lesson/${data.objectID}`}
                img={"http://localhost:8000/media/"+data.preview}
                // avatar={"http://localhost:8000"+data.author.profile_photo}
                language={data.language}
                // is_verified={data.author.is_verificated} // Added is_verified prop
                username={data.username}
                rating={5}
                level={data.level}
                categories={data.category}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
    )
}
