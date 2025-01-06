import React from 'react'
import classes from "./style.module.css"
import Button from '@components/UI/Buttons/Button/Button'
import study from "@media/images/png/study.webp"
import team from "@media/images/png/Darwin_team.png"

export default function AboutEN() {
  return (
    <div className="w-full pt-5 pb-20">
      <section className={`w-[97%] h-[600px] bg relative mx-auto rounded-[30px] py-14 flex-col-center justify-center mb-32 ${classes.bg}`}>
        <h1 className='text-white text-6xl font-semibold'>About Darwin Platform</h1>
        <p align="center" className='w-[400px] text-white text-md mt-3 mb-5 opacity-70'>Click the button to explore more about our platform, its features, and meet the dedicated team behind it.</p>
        <a href="#first_block"><Button className="bg-white text-primary-def hover:bg-white hover:text-primary-def">Find out</Button></a>
      </section>

      <section className='w-3/5 mx-auto'>
        <h1 id="first_block" className='font-semibold text-3xl'><span className='text-primary-def'>Darwin</span> - Learning in a New Way</h1>
        <br />
        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Throughout the school year, many of us face difficulties in learning. Some struggle to prepare for exams independently, while others don’t know where to start, what to study, and gradually lose motivation. There are also those who aim to acquire <strong>new skills</strong> in their areas of interest. 
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          The <strong>Darwin</strong> platform was created to make the learning process accessible and engaging. It’s a project designed to provide <strong>widespread skill-sharing</strong> in the online space. <strong>Darwin</strong> provides simplified access to educational materials and courses, helping users quickly find the information they need. 
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Unlike major counterparts such as <strong>Coursera</strong> and <strong>Udemy</strong>, <strong>Darwin</strong> stands out for its <strong>simplicity and minimalist approach</strong>. Its intuitive interface allows learners to focus on studying without getting distracted by complicated settings, which promotes <strong>personal and professional growth</strong>.
        </p>

        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          Additionally, our platform offers convenient functionality for posting and searching for events. Simply put, on the <strong>Bulletin Board</strong>, you can find interesting events like volunteer projects, olympiads, and more. You can access detailed information about the event and participate.
        </p>
        <p className='leading-6 whitespace-pre-wrap text-gray mb-2'>
          This functionality helps users actively develop in their chosen fields, gain valuable practical experience, and improve their <strong>extracurricular achievements</strong>, which will be a significant advantage when applying to <strong>universities</strong>.
        </p>

        <br />

        <div className="w-full h-[500px] flex-center overflow-hidden">
          <img src={study} alt="" />
        </div>


        <br /><br /><br />

        <h1 id="first_block" className="font-semibold text-3xl"><span className="text-primary-def">Darwin</span> - The Team Behind the Future of Education</h1>
        <br />
        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          <strong>Darwin</strong> is an online platform striving to change the approach to education in Kazakhstan. Our team's main mission is to provide students with unique opportunities for productive learning and motivation. We aim to introduce an innovative approach to the educational system that will help students organize their knowledge and prepare for exams with ease and effectiveness.
        </p>

        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          Our platform addresses issues students face, such as the mismatch between classroom materials and exam requirements. We've created a solution that allows teachers to create lessons organized into "boxes," so students can easily and effectively review material, prepare for exams, and enhance their knowledge.
        </p>

        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          The <strong>Darwin</strong> team consists of high school and university students united for a single goal — to change education in Kazakhstan. We believe that every student or schoolchild can contribute to building the platform, and it’s through openness and accessibility that we aim to create a platform where everyone can find support and motivation for studying.
        </p>

        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          Our goal is not just to create a platform, but to implement it in schools, colleges, and universities across Kazakhstan, building an active community of students and teachers. We want <strong>Darwin</strong> to become a powerful tool for knowledge and experience sharing between students, creating a new community for effective learning.
        </p>

        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          Additionally, we actively collect feedback from our users through daily surveys on social platforms, which helps us improve functionality and maintain active interaction with the community.
        </p>

        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          We believe that with clear and short-term goals, we will continue to grow and reach new heights. Our team is motivated, and each of us is dedicated to creating a unique educational platform for students and teachers.
        </p>

        <p className="leading-6 whitespace-pre-wrap text-gray mb-2">
          In the future, we plan to implement our platform in educational institutions across Kazakhstan, to create a global community where every student and teacher can find the knowledge and support they need.
        </p>

        <br />

        <div className="w-full h-[500px] flex-center overflow-hidden">
          <img src={team} alt="" />
        </div>

        <br /><br /><br />

      </section>

      
    </div>
  )
}
