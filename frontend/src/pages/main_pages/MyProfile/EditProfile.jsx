import React, { useState, useEffect } from 'react';
import AvatarCircle from '@components/UI/Avatar/Avatar';
import axios from 'axios';
import TextInput from '@components/UI/Inputs/TextInput/TextInput';
import ImageField from '@components/UI/Inputs/FileField/ImageField';
import Button from '@components/UI/Buttons/Button/Button';
import InputContainer from '@components/UI/Inputs/InputContainer/InputContainer';

import { USERS_API_ROUTES } from '@configs/api/Users/users';

export default function EditProfile() {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState(user.profile_photo ? user.profile_photo : '');


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    axios.get(USERS_API_ROUTES.GET_BY_ID+`${user.id}/`)
      .then(response => {
        const data = response.data;
        setUserData(data);
        setUsername(data.username);
        setFirstName(data.first_name);
        setLastName(data.last_name);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [user.id]);

  function handleImageChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const image = new Image();
      image.onload = () => {
        setImage(selectedFile);
        setImageURL(URL.createObjectURL(selectedFile));
      };
      image.src = URL.createObjectURL(selectedFile);
    }
  }

  const handleProfileSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    if (image) formData.append('profile_photo', image);

    try {
      await axios.patch(USERS_API_ROUTES.PATCH+`${user.id}/`, formData);

      const updatedUserResponse = await axios.get(USERS_API_ROUTES.GET_BY_ID+`${user.id}/`);
      const updatedUser = updatedUserResponse.data;

      localStorage.setItem('user', JSON.stringify({
        id: updatedUser.id,
        username: updatedUser.username,
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        role: updatedUser.role,
        profile_photo: updatedUser.profile_photo
      }));
      
      alert('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile:", error);
      alert('Failed to update profile.');
    }
  };

  return (
    <section className="w-full mx-auto py-10 bg-light_bg">

      <div className="w-3/5 mx-auto">
        <h1 className="text-2xl text-black-def">Edit your profile</h1>
      </div>

      <br />

      <div className="box-border flex flex-col items-center p-5 w-3/5 mx-auto bg-white border border-black-10 rounded-lg">
        <form className="w-full" onSubmit={handleProfileSave}>
          <div className="w-full flex-center py-5">
            <input 
              type="file" 
              className="fileUpload"
              style={{ display: "none" }}
              accept=".png, .jpg, .jpeg"
              id="avatar-upload"
              onChange={handleImageChange}
            />
            <label htmlFor="avatar-upload">
              <AvatarCircle className="hover:cursor-pointer" sx={{ width: 100, height: 100 }} src={imageURL} />
            </label>
          </div>

          <div className="w-3/5 mx-auto">
            <h1 className="text-2xl text-black-def">Basic Information</h1>

            <br />

            <InputContainer className="w-full" title="Username">
              <TextInput value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" />
            </InputContainer>

            <br />

            <InputContainer className="w-full" title="First Name">
              <TextInput value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full" />
            </InputContainer>

            <br />

            <InputContainer className="w-full" title="Last Name">
              <TextInput value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full" />
            </InputContainer>

            <br />

            <Button type="submit">Save</Button>
          </div>
        </form>

        <br />
        <br />

      </div>
    </section>
  );
}
