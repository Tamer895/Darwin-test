import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import FilterAuthorID from '@utils/api/courses/datasets/FilterAuthorID';

import Flexbox from '@components/layouts/Stacks/Flexbox/Flexbox';
import Sidebar from '@components/layouts/Sidebar/Sidebar';
import Content from '@components/layouts/Stacks/Content/Content';
import Course from '../../../components/UI/Cards/Course/Course';

import empty from "@media/images/png/undraw/empty.png"
import { domain } from '@configs/api/domain';

export default function MyCourses() {
  const { t } = useTranslation('studio');
  const [datas, setData] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const getData = async () => { 
      try {
        const user_id = localStorage.getItem('user_id'); // Get user_id from local storage

        const result = await FilterAuthorID(user_id);
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
      <Content width="78%" className="bg-white border-black-10 border-solid border rounded-xl">
        <Flexbox className="w-full p-6" items="flex-start" justify="space-between" wrap="wrap">
          {datas.length > 0 ? (
            datas.map((data, index) => (
              <Course
                style={{
                  width: '50%',
                  padding: "10px"
                }} // Added style prop to customize card size
                key={index} // Added key prop
                name={data.name}
                to={`/intro_lesson/${data.id}`}
                img={domain+data.preview}
                avatar={domain+data.author.profile_photo}
                language={data.language}
                is_verified={data.author.is_verificated} // Added is_verified prop
                username={data.author.username}
                rating={5}
                level={data.level}
                id={data.id}
                categories={data.category}
              />
            ))
          ) : (
            <div className="w-full flex flex-col items-center">
              <img style={{width: "150px", height: "150px"}} src={empty} alt="" />
              <h1 className='font-medium'>{t('edit_course.empty')}</h1>
            </div>
          )}
        </Flexbox>
      </Content>
    </Flexbox>
  );
}
