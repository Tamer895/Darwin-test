import React from 'react'
import {Routes, Route} from 'react-router-dom';

import IsAuthenticated from '../auth/IsAuthenticated';


import Home from '@pages/main_pages/Home/Home';
import About from '@pages/main_pages/About/About';
import CreateCourse from '@pages/studio/CreateCourse/CreateCourse';
import MyCourses from '@pages/studio/EditCourse/MyCourses';
import IntroLesson from '@pages/lessons/IntroLesson/IntroLesson';
import Lesson from '@pages/lessons/Lesson/Lesson';
import Courses from '@pages/main_pages/Courses/Courses';
import Results from '@pages/main_pages/Search/Results/Results';

// forms
import Login from '@pages/forms/Login/Login';
import Step1 from '@pages/forms/Signup/Step1';
import Step2 from '@pages/forms/Signup/Step2';


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      {/* forms */}
      <Route path="/login" element={<Login/>} />
      <Route path="/step1" element={<Step1/>} />
      <Route path="/step2" element={<Step2/>} />

      {/* courses */}
      <Route path="/courses" element={<Courses/>} />

      {/* studio */}
      <Route path="/createcourse" element={<IsAuthenticated><CreateCourse/></IsAuthenticated>} />
      <Route path="/editor"element={<IsAuthenticated><MyCourses/></IsAuthenticated>} />
      <Route path="/intro_lesson/:id" element={<IntroLesson/>} />
      <Route path="/lesson/:id" element={<Lesson/>} />

      {/* Search */}
      <Route path="/search/results/:query" element={<Results/>} />

      {/* Lessons */}
    </Routes>
  )
}
