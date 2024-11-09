import React from 'react';

export default function TextElement(props) {
  return (
    <div className={`w-full mb-20 ease-linear duration-100 ${props.is_active ? "" : "hover:scale-105 cursor-pointer"}`}>
      <h1 className="font-bold text-3xl mb-5">{props.title}</h1>
      <p
        dangerouslySetInnerHTML={{ __html: props.text }}
        className="whitespace-normal break-words"
      />
    </div>
  );
}
