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
      <input onChange={imagename} {...props} type="file" className={`h-12 px-4 text-sm outline-none border-input_border border-2 rounded-md focus:border-primary-def placeholder:text-black-50 ${props.className}`} />
    )
  }
  
