import React, {useState} from 'react'

export default function ImageField({ ...props }) {


  const [image, setImage] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  
  function imagename(e) {
      const selectedFile = e.target.files[0];
      
      // Получаем название файла
      const fileName = selectedFile.name;
      setImageTitle(fileName); // сохраняем название файла в состояние
  
      // Дополнительные проверки размеров и соотношения сторон
      const image = new Image();
      image.onload = () => {
          props.setImage(selectedFile);
          props.setURL(URL.createObjectURL(selectedFile));
      };
      
      image.src = URL.createObjectURL(selectedFile);
  }


    return (
      <div className={`relative inline-block ${props.className}`}>
        <label
          htmlFor="file-upload"
          className={`block flex-center h-12 px-4 text-sm text-white bg-primary-def rounded-md cursor-pointer text-center leading-12`}
        >
          {imageTitle == '' ? "Выберите файл" : imageTitle}
        </label>
        <input
          {...props.required}
          id="file-upload"
          accept=".png, .jpg, .jpeg"
          onChange={imagename}
          type="file"
          className="hidden"
        />
      </div>

    )
  }
  
