import React from 'react'
import Video from '@UI/Media/Video/Video'
import GrayBtn from '@UI/Buttons/GrayBtn/GrayBtn';
import { useDispatch, useSelector } from 'react-redux';
import { ELEMENTS_API_ROUTES } from '@configs/api/Elements/elements';
import axios from 'axios';

export default function VideoElement(props) {
  const courseData = useSelector((state) => state.courseID.courseData);
  const author_id = courseData.author ? courseData.author.id : null;
  const user_id = localStorage.getItem('user_id');



  async function Delete(id) {
    try {
      await axios.delete(ELEMENTS_API_ROUTES.VIDEO.VIDEO + `${id}/`);
      window.location.reload();
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  }

  
  return (
    <div className={`w-full mb-20 py-5 ease-linear duration-100 ${props.is_active ? "" : "cursor-pointer"}`}>
      
      <div className={`w-full ${props.is_active ? "":"flex-center-between"}`}>
        <h1 className="font-bold text-3xl mb-5">{props.title}</h1>

        <div className={`flex flex-row items-center justify-center ${props.is_active ? "hidden" : ""} ${author_id==user_id ? "" : "hidden"}`}>
          <GrayBtn onClick={()=>Delete(props.id)}>
            <span class="material-symbols-outlined">
            delete
            </span>
          </GrayBtn>

        </div>
      </div>
      <Video src={props.video} width="100%" height="400px" />
    </div>
  )
}
