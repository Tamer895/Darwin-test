import React, { useState } from 'react';

export default function ImageField({ setImage, setURL, className, id, ...props }) {
  const [imageTitle, setImageTitle] = useState('');

  function handleImageChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImageTitle(selectedFile.name);
      const image = new Image();
      image.onload = () => {
        setImage(selectedFile);
        setURL(URL.createObjectURL(selectedFile));
      };
      image.src = URL.createObjectURL(selectedFile);
    }
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <label
        htmlFor={id}
        className="block flex-center h-12 px-4 text-sm text-white bg-primary-def rounded-md cursor-pointer text-center leading-12"
      >
        {imageTitle || 'Выберите файл'}
      </label>
      <input
        id={id}
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={handleImageChange}
        className="hidden"
        {...props}
      />
    </div>
  );
}
