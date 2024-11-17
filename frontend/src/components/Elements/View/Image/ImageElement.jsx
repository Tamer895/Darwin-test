import React from 'react';

export default function ImageElement(props) {

  return (
    <div className={`w-full mb-20 rounded-2xl ease-linear duration-100 ${props.is_active ? "" : "hover:scale-105 cursor-pointer"}`}>
      <h1 className="font-bold text-3xl mb-5">{props.title}</h1>
      <img src={props.image} alt={props.title} width="100%" height="400px" />
    </div>
  );
}
