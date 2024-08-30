import React from 'react'
import {Routes, Route} from 'react-router-dom';

import IsAuthenticated from '../auth/IsAuthenticated';


import Home from '@pages/main_pages/Home/Home';
import About from '@pages/main_pages/About/About';
import CreateCourse from '@pages/studio/CreateCourse/CreateCourse';
import EditCourse from '@pages/studio/EditCourse/EditCourse';

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

      {/* studio */}
      <Route path="/createcourse" element={<IsAuthenticated><CreateCourse/></IsAuthenticated>} />
      <Route path="/editor"element={<EditCourse/>} />
    </Routes>
  )
}
