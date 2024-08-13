import React, { useState} from 'react'
import { useTranslation } from 'react-i18next';

import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import Textarea from '../../../components/UI/Inputs/Textarea/Textarea';

import Button from '@components/UI/Buttons/Button/Button';
import RoundedBtn from '@components/UI/Buttons/RoundedBtn/RoundedBtn';
import TransBtn from '@components/UI/Buttons/TransBtn/TransBtn';

import Announcement from '@components/UI/Cards/Announcement/Announcement';
import Review from '@components/UI/Cards/Review/Review';
import Course from '@components/UI/Cards/Course/Course';
import Offer from '@components/UI/Cards/Offer/Offer';
import InformCard from '@components/UI/Cards/InformCard/InformCard';

import SelectComponent from '../../../components/UI/Select/Select';

import Rate from '@components/UI/Rate/Rate';

import img from "@media/images/png/Darwinx2.png";



export default function Studio() {

  const { t } = useTranslation('studio');





  const items = [
    {value: 30, label: "Student"},
    {value: 20, label: "Teacher"},
  ]



  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  const labels = [
    {label: "Technology"},
    {label: "Business"},
    {label: "Marketing"},
    {label: "Finance"},
    {label: "Health"},
    {label: "Education"},
  ];


  return (
    <>

        {/* Main Landing (Welcome and creating course) */}
        <section className='flex-center py-10 bg-light_bg'>
            <div className="flex-col-center">

                

                <h1 className='text-black font-bold text-4xl'>{t('welcome.title')}</h1>
                <p className='text-gray mt-1'>{t('welcome.description')}</p>
                
                <TextInput type="text" placeholder="Name" />


                
                <SelectComponent value={age} onChange={handleChange} items={items} />
                

                <Textarea></Textarea>

                <Button>Button</Button>

                <br />
                <RoundedBtn>Button</RoundedBtn>
                <br />

                <TransBtn>Button</TransBtn>

                <Announcement img={img} style={{width: "300px"}} to="/my_education" author="FLEX Foundation" datetime="02.06.2024">
                  Бесплатное обучение в США. Подготовка к турам конкурсного отбора, личные дневники...
                </Announcement>

                <br />

                <Review 
                  style={{width: '300px'}}
                  to="https://x.com/elonmusk/status/1810290039974146328"
                  avatar="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" 
                  name="John Doe"
                  review="Lorem ipsum dolor sit amet, consectetur adip proident, sed do eiusmod tempor incididunt ut labore"
                />

                <br />

                <Course
                  style={{width: "300px"}}
                  img="https://www.keyweo.com/wp-content/uploads/2022/04/google-logo-history.jpg"
                  username="Google Inc"
                  name="Join us for a webinar hosted by Illinois Tech's own Kiah Ong, who'll be doing a deep dive on the required linear regression math courses"
                  rating={3.5}
                  level="Beginner"
                  avatar="https://yt3.googleusercontent.com/viNp17XpEF-AwWwOZSj_TvgobO1CGmUUgcTtQoAG40YaYctYMoUqaRup0rTxxxfQvWw3MvhXesw=s900-c-k-c0x00ffffff-no-rj"

                  categories={labels}
                />

                <br />

                <Offer 
                  style={{width: "300px"}}
                  icon="local_library"
                  title="Courses"
                  text="Learn different courses to suit your preferences"

                  value="2000+"
                  value_text="More than 2000 courses you can learn to expand your knowledge"
                />

                <br />

                <InformCard 
                  to="/"
                  style={{width: "300px"}}
                  title="More than 1000 courses"
                  desc="Enhance your skills and become a more successful professional"
                />


                <br />

                <Rate />


            </div>
        </section>
    </>
  )
}
