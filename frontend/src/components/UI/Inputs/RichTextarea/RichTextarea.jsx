import React, { useRef, useEffect, useState } from 'react';

export default function RichTextarea({ children, onChange, ...props }) {
  const contentEditableRef = useRef(null);
  const [height, setHeight] = useState('auto');
  const [content, setContent] = useState(children || ''); // Храним текст

  useEffect(() => {
    // Функция для обновления высоты
    const updateHeight = () => {
      if (contentEditableRef.current) {
        setHeight(`${contentEditableRef.current.scrollHeight}px`);
      }
    };

    updateHeight(); // Устанавливаем начальную высоту

    // Обработчик события input для высоты при вводе текста
    const currentElement = contentEditableRef.current;
    currentElement.addEventListener('input', updateHeight);

    return () => {
      currentElement.removeEventListener('input', updateHeight);
    };
  }, [content]); // Обновляем высоту при изменении контента

  const formatText = (command) => {
    document.execCommand(command, false, null);
    contentEditableRef.current.focus();
  };

  // Обработчик ввода текста
  const handleInput = (e) => {
    let newContent = e.currentTarget.innerHTML;
    // Заменяем неразрывные пробелы на обычные пробелы
    newContent = newContent.replace(/&nbsp;/g, ' ');
  
    setContent(newContent); // Обновляем содержимое в состоянии
    if (onChange) onChange(newContent); // Вызываем onChange, если передан
  };

  return (
    <div>
      <div className="flex items-center w-16 box-border border border-black-10">
        <button 
          className="w-8 h-8 m-0 p-0 box-border bg-light_bg hover:bg-primary-def ease-linear duration-200 hover:text-white" 
          onClick={() => formatText('bold')}
        >
          <b>B</b>
        </button>
        <button 
          className="w-8 h-8 m-0 p-0 box-border bg-light_bg hover:bg-primary-def ease-linear duration-200 hover:text-white" 
          onClick={() => formatText('italic')}
        >
          <i>I</i>
        </button>
      </div>

      <div
        ref={contentEditableRef}
        contentEditable
        {...props}
        onInput={handleInput} // Добавляем обработчик onInput
        style={{ height, minHeight: '48px', maxHeight: '200px', overflow: 'auto' }}
        className={`pt-3 pb-4 px-4 mt-2 text-sm outline-none border-2 border-input_border rounded-md focus:border-primary-def placeholder:text-black-50 ${props.className}`}
      >
        {children}
      </div>
    </div>
  );
}
