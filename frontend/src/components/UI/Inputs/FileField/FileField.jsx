import React, {useState} from 'react'

export default function FileField({ ...props }) {
    const [image, setImage] = useState(null);

    function imagename(e){
    
        const selectedFile = e.target.files[0];
    
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
          Выберите файл
        </label>
        <input
          id="file-upload"
          onChange={imagename}
          type="file"
          className="hidden"
        />
      </div>

    )
  }
  
