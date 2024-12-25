import React from 'react';

export default function TextInput({ ...props }) {
  return (
    <input
      {...props}
      type={props.type === undefined ? 'text' : props.type}
      className={`h-12 box-border px-4 text-sm outline-none border-input_border border focus:border-2 rounded-md focus:border-primary-def placeholder:text-black-50 ${props.className}`}
    />
  );
}


