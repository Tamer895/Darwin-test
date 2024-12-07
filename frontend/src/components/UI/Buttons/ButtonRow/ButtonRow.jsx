import React, { useState, useEffect, useRef } from "react";

const ButtonRow = ({ buttons, lightBg, darkBg, activeTextColor, inactiveTextColor}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [buttonWidths, setButtonWidths] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Измеряем ширины всех кнопок
      const widths = Array.from(containerRef.current.children).map(
        (child) => child.getBoundingClientRect().width
      );
      setButtonWidths(widths);
    }
  }, [buttons]);

  const handleClick = (index, onClick) => {
    setActiveIndex(index);
    onClick && onClick();
  };

  const getTranslateX = () => {
    if (buttonWidths.length === 0) return 0;
    return buttonWidths.slice(0, activeIndex).reduce((acc, width) => acc + width, 0);
  };

  return (
    <div
      ref={containerRef}
      className={`relative box-border flex rounded-full justify-start items-center ${lightBg}`}
    >
      {buttons.map((e, index) => (
        <button
          key={index}
          className={`relative box-border z-10 py-2 px-5 rounded-lg transition-colors duration-300 ${
            activeIndex === index ? activeTextColor : inactiveTextColor
          }`}
          onClick={() => handleClick(index, e.onClick)}
        >
          {e.label}
        </button>
      ))}

      {/* Moving background */}
      {buttonWidths.length > 0 && (
        <div
          className={`absolute box-border top-0 left-0 h-full rounded-full ${darkBg}`}
          style={{
            width: `${buttonWidths[activeIndex]}px`,
            transform: `translateX(${getTranslateX()}px)`,
            transition: "width 300ms ease, transform 300ms ease", // Плавная анимация ширины и положения
          }}
        ></div>
      )}
    </div>
  );
};

export default ButtonRow;
