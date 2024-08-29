import React, {useState} from 'react';
import Menu from '@UI/Menu/Menu';
import Button from '@UI/Buttons/Button/Button';
import AvatarCircle from '@UI/Avatar/Avatar';





export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AvatarCircle alt="Nuralim Tamerlan" />
      <Menu className="right-0" isOpen={isOpen}>
        <li><button>Hello</button></li>
        <li><button>Hello asdsad</button></li>
        <li><button>Hello sad</button></li>
        <li><button>Hello</button></li>
        <li><button>Hello</button></li>
        <li><button>Hello</button></li>
      </Menu>
    </div>
  )
}
