import React, {useState, useEffect} from 'react'

import axios from 'axios';

import { useParams } from 'react-router-dom';
import localizer from '@utils/translator/Localizer';
import Button from '@components/UI/Buttons/Button/Button';
import RoundedBtn from '@components/UI/Buttons/RoundedBtn/RoundedBtn';
import Video from '@components/UI/Media/Video/Video';


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
        const response = await axios.get(`http://localhost:8000/announcements/announcement/${id}/`);
        setData(response.data); // Update courses data
      } catch (error) {
        // console.error('Error fetching courses:', error);
      }
    };

  return (
    <section className='w-4/5 py-10 mx-auto flex justify-between'>

      {/* Content */}
      <div className="w-3/4 pr-10">
        <span>Announcement - <span className='text-gray'>{localizer(data.created_at)}</span></span>


        <h1 className='font-bold text-3xl my-5 text-black-def'>{data.title}</h1>


        <div className='w-full my-10' style={{ position: 'relative',textAlign: 'center' }}>
            <RoundedBtn onClick={previousSlide} style={arrowStyle('left')}>
                <span class="material-symbols-rounded">
                arrow_back
                </span>
            </RoundedBtn>
            
            <div>
                {slides[currentSlide].type === 'video' ? (
                <Video src={slides[currentSlide].src}  width="100%" height="400px" />
                // <video className='w-full' controls>
                //     <source src={slides[currentSlide].src} type="video/mp4" />
                //     Your browser does not support the video tag.
                // </video>
                ) : (
                <img className='w-full' src={slides[currentSlide].src} alt="slide"/>
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
      <div style={advert} className="w-1/4 bg-blue-300 overflow-hidden">
      </div>
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
