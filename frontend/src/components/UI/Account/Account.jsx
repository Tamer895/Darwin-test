import React, {useState} from 'react';

import axios from 'axios';

import Menu from '@UI/Menu/Menu';
import AvatarCircle from '@UI/Avatar/Avatar';





export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      await axios.post('http://127.0.0.1:8000/users/logout/', { refresh_token });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="cursor-pointer" onClick={toggleMenu}>
        <AvatarCircle alt="Nuralim Tamerlan" />
      </div>

      <Menu className="right-0" isOpen={isOpen}>
        <li><button onClick={handleLogout}>Log out</button></li>
      </Menu>
    </div>
  )
}
