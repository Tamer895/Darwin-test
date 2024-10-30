import React, {useState} from 'react';

import axios from 'axios';

import Menu from '@UI/Menu/Menu';
import AvatarCircle from '@UI/Avatar/Avatar';





export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem('user'));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      await axios.post('http://127.0.0.1:8000/users/logout/', { refresh_token });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div id="menu" className="cursor-pointer" onClick={toggleMenu}>
        <AvatarCircle src={'http://127.0.0.1:8000/'+userData.profile_photo} alt={userData.username.toUpperCase()} />
      </div>

      <Menu id="menu" className="right-0" isOpen={isOpen} onOpen={setIsOpen}>
        <li><button onClick={handleLogout}>My profile</button></li>
        <li><button onClick={handleLogout}>Log out</button></li>
      </Menu>
    </div>
  )
}
