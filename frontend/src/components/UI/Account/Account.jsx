import React, {useState} from 'react';

import axios from 'axios';

import Menu from '@UI/Menu/Menu';
import AvatarCircle from '@UI/Avatar/Avatar';

import { USERS_API_ROUTES } from '@configs/api/Users/users';





export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem('user'));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      await axios.post(
        USERS_API_ROUTES.LOGOUT,
        { refresh_token },
        { headers: { 'Content-Type': 'application/json' } }
      );
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user');
      window.location.href = '/';
    } catch (error) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user');
    }
  };

  return (
    <div>
      <div id="menu" className="cursor-pointer" onClick={toggleMenu}>
      <AvatarCircle src={userData.profile_photo} alt={userData.username.toUpperCase()} />
      </div>

      <Menu id="menu" className="right-0" isOpen={isOpen} onOpen={setIsOpen}>
        <li><button onClick={()=>window.location.href="/myprofile"}>My profile</button></li>
        <li><button onClick={handleLogout}>Log out</button></li>
      </Menu>
    </div>
  )
}
