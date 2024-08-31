import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Filter from '@utils/api/courses/datasets/Filter';

import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Sidebar from '@components/layouts/Sidebar/Sidebar';
import Content from '@components/layouts/Stacks/Content/Content';
import Course from '../../../components/UI/Cards/Course/Course';

export default function EditCourse() {
  const { t } = useTranslation('studio');
  const [datas, setData] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getData = async () => { 
      try {
        const user_id = localStorage.getItem('user_id'); // Get user_id from local storage

        const result = await Filter(user_id);
        console.log(result);
        setData(result);

      } catch (error) {

        setError(error); 
        console.error('Error fetching data:', error);

      }
    };

    getData();
  }, []);

  return (
    <Flexbox direction="row" items="flex-start" justify="space-between" className="px-40 py-16 bg-light_bg">
      <Sidebar focused="0" />
      <Content width="78%" className="bg-white border-black-10 border-solid border-2 rounded-xl">
        <Flexbox className="w-full" items="center" justify="space-between" wrap="wrap">
          {datas.length > 0 ? (
            datas.map((data, index) => (
              <Course
                style={{margin: 25}}
                key={index} // Added key prop
                name={data.name}
                to={`/${data.id}`}
                img={"http://localhost:8000"+data.preview}
                avatar={""}
                language={data.language}
                is_verified={data.author.is_verificated} // Added is_verified prop
                username={data.author.username}
                rating={5}
                level={data.level}
                categories={data.category}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </Flexbox>
      </Content>
    </Flexbox>
  );
}
