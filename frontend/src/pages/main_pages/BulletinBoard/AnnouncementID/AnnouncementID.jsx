import React, {useState, useEffect, useRef} from 'react'

import axios from 'axios';

import { useParams } from 'react-router-dom';
import localizer from '@utils/translator/Localizer';
import Button from '@components/UI/Buttons/Button/Button';
import RoundedBtn from '@components/UI/Buttons/RoundedBtn/RoundedBtn';
import Video from '@components/UI/Media/Video/Video';

import { ANNOUNCEMENTS_API_ROUTES } from '@configs/api/Announcements/announcements';


export default function AnnouncementID() {
  const { id } = useParams(); 

  const [data, setData] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);






  const slides = [
    {
      type: 'image',
      src: data.preview,
    },
    {
      type: 'video',
      src: data.video,
    },
  ];


  const imageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight); // Get the current height of the image
    }
  }, [currentSlide, slides]);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
  
    useEffect(() => {
        fetchAnnouncement();
    }, []);
  
    // Function to fetch courses based on the page number
    const fetchAnnouncement= async () => {
      try {
        const response = await axios.get(ANNOUNCEMENTS_API_ROUTES.GET_BY_ID(id));
        setData(response.data); // Update courses data
      } catch (error) {
        // console.error('Error fetching courses:', error);
      }
    };

  return (
    <section className='w-3/5 py-10 mx-auto flex justify-between'>

      {/* Content */}
      <div className="w-full pr-10">
        <span className='text-gray'>{localizer(data.created_at)}</span>


        <h1 className='font-bold text-3xl my-5 text-black-def'>{data.title}</h1>


        <div className='w-full my-10' style={{ position: 'relative',textAlign: 'center' }}>
            <RoundedBtn onClick={previousSlide} style={arrowStyle('left')}>
                <span class="material-symbols-rounded">
                arrow_back
                </span>
            </RoundedBtn>
            
            <div>
                {slides[currentSlide].type === 'video' ? (
                  <div style={{height: imageHeight}} className="w-full flex-center bg-[#000]">
                    <Video className="rounded-none" src={slides[currentSlide].src}  width="100%" height="400px" />
                  </div>
                // <video className='w-full' controls>
                //     <source src={slides[currentSlide].src} type="video/mp4" />
                //     Your browser does not support the video tag.
                // </video>
                ) : (
                <img className='w-full' ref={imageRef} src={slides[currentSlide].src} alt="slide" onLoad={() => setImageHeight(imageRef.current.clientHeight)}/>
                )}
            </div>
            
            <RoundedBtn onClick={nextSlide} style={arrowStyle('right')}>
                <span class="material-symbols-rounded">
                arrow_forward
                </span>
            </RoundedBtn>
        </div>


        <p className="leading-7 whitespace-pre-wrap">{data.description}</p>

        <a href={data.link}>
            <Button className="mt-5">Я ознакомился представленной информацией и хочу принять участие</Button>
        </a>

      </div>

      {/* Advert */}
      {/* <div style={advert} className="w-1/4 bg-blue-300 overflow-hidden">
      </div> */}
    </section>
  )
}


const arrowStyle = (position) => ({
    position: 'absolute',
    top: '50%',
    width: "60px",
    height: "60px",
    [position]: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
    userSelect: 'none',
    zIndex: 30
  });

const advert = {
    height: "1200px",
    backgroundImage: "url('https://bonus.kundelik.kz/assets/hero/halyk_easy-4f8134117d1ba819016b2300b9cfb91997790e6dd9cc4de27f0bb4d9ea4a85b8.png')",
    backgroundSize: 'cover',
    backgroundPosition: '',
    backgroundRepeat: 'no-repeat',
}
