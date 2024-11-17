import React, {useState} from 'react'
import AvatarCircle from '@components/UI/Avatar/Avatar'
import Button from '@components/UI/Buttons/Button/Button';
import TransBtn from '@components/UI/Buttons/TransBtn/TransBtn';
import about from "@media/images/svg/about.svg";

import axios from 'axios';

import Textarea from '@UI/Inputs/Textarea/Textarea';
import { USERS_API_ROUTES } from '@configs/api/Users/users';

import { Helmet } from "react-helmet-async";


export default function Description() {

  const [isEditing, setIsEditing] = useState(false);

  const userData = JSON.parse(localStorage.getItem('user'));
  const [description, setDescription] = useState(userData.description);



  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);

    try {
        await axios.patch(USERS_API_ROUTES.PATCH+`${userData.id}/`, formData);

        const updatedUserResponse = await axios.get(USERS_API_ROUTES.GET_BY_ID+`${userData.id}/`);
        const updatedUser = updatedUserResponse.data;

        localStorage.setItem('user', JSON.stringify({
            id: updatedUser.id,
            username: updatedUser.username,
            first_name: updatedUser.first_name,
            last_name: updatedUser.last_name,
            description: updatedUser.description,
            role: updatedUser.role,
            profile_photo: updatedUser.profile_photo
        }));
        setIsEditing(false);
        
      } catch (error) {
      }
  }

  return (
    <div className="box-border flex items-start justify-left p-5 w-3/5 mx-auto bg-white border border-dashed border-black-10 rounded-lg">
        <img className='mr-10' width="200" src={about} alt="" />

        <div className="">
          <h1 className='text-2xl font-medium m-0 text-black-def'>Write a description text about you</h1>

          {/* <p className='text-md my-5 text-black-def'>To craft an engaging, authentic introduction of yourself, start by highlighting key aspects of your personality, interests, and experiences in a way that feels natural and unique. Think of the traits and experiences that genuinely define you and set you apart, offering a balance between your professional and personal sides. Mention your field of expertise or passions, current goals, and what excites you most about what you do. This could be tied to a hobby, a work project, or even a cause you care about deeply.</p> */}
        
          {isEditing ? 
          <Textarea className="w-full h-24 text-md my-5" value={description} onChange={(e)=>setDescription(e.target.value)} type="text" />
          :
          <p className='text-md my-5 text-black-def'>{userData.description}</p>
          }

          {isEditing? (
            <Button style={{height: "40px"}} onClick={handleSave}>Save</Button>
          ) : (
            <Button style={{height: "40px"}} onClick={() => setIsEditing(true)}>Edit</Button>
          )}

        </div>
        <br />
    </div>
  )
}
