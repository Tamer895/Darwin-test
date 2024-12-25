import React from 'react';
import './Message.css'; // Подключаем стили

export default function Message({ children, ...props }) {
  return (
    <div
      className={`${
        props.show ? 'animate-slide-up' : 'hidden'
      } fixed flex overflow-hidden bg-white border border-solid border-input_border z-50 rounded-lg w-[250px] p-0 right-5 bottom-5`}
    >
      <div className="p-5 border-l-4 border-l-primary-def">
        {children === undefined ? (
          <>
            <h1>{props.title}</h1>
            <hr style={{ color: 'rgba(0,0,0,0.1)', margin: '5px 0' }} />
            <p className="text-sm text-gray">{props.text}</p>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
