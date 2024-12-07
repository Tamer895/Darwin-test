import React, {useState} from 'react'

export default function TransBtn({children, ...props}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`box-border ease-linear duration-150 trans-button rounded-full px-7 flex-center-between ${props.icon == undefined ? "hover:bg-primary-def hover:text-white" : "hover:pr-5"}`} {...props}>
        {children}
        {props.icon &&
        <span className={`material-symbols-rounded box-border ease-linear duration-150 ${props.icon !== undefined ? "ml-2" : ""} ${isHovered ? "ml-4" : "ml-2"}`}>
          {props.icon}
        </span>
} 
    </button>
  )
}
