import React, { useState, useEffect, useRef } from 'react';
import './styles/style.css';

export default function SelectComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const items = props.items;
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    props.onChange(value);
    setIsOpen(false);
  };

  // Закрытие выпадающего списка при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Добавляем слушатель события для кликов на документ
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="select-container" ref={selectRef}>
      <div className="select-switcher" onClick={toggleDropdown}>
        <span>{props.value != undefined ? items.find(item => item.value == props.value).label : 'Select an option'}</span>
        <span class="material-symbols-outlined">
        keyboard_arrow_down
        </span>
      </div>
      {isOpen && (
        <ul className="select-list">
          {items.map((elem, index) => (
            <li key={index} onClick={() => handleSelect(elem.value)}>
              <button className="text-sm select-option">{elem.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
