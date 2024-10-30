import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Announcement from '@components/UI/Cards/Announcement/Announcement';
import TextWithEllipsis from '@UI/Typography/Text/TextWithEllipsis';

import {Link} from 'react-router-dom';

import "./styles/style.css";

export default function Announcements() {

    const [announcements, setAnnouncements] = useState([]);
  
    useEffect(() => {
        fetchAnnouncements();
    }, []);
  
    // Function to fetch courses based on the page number
    const fetchAnnouncements= async () => {
      try {
        const response = await axios.get('http://localhost:8000/announcements/announcement/');
        setAnnouncements(response.data.results); // Update courses data
      } catch (error) {
        // console.error('Error fetching courses:', error);
      }
    };

  return (
    <section className='w-4/5 py-10 mx-auto'>
      <h1 className="text-2xl mb-5 text-black-def">Последние объявления</h1>

      <div className="w-full announcementsSection">
      {announcements.map((e, index)=>(
        // <div className='item' key={index}>
        //   <h2>{e.title}</h2>
        //   <p>{e.description}</p>
        //   <a target='blank' href={e.link}>Visit Source</a>
        // </div>

        
        <Link className='item' to={`/bulletin_board/${e.id}/`}>
            <Announcement
                key={index}
                author={e.source_name}
                logo={e.source_avatar}
                img={e.preview}
                datetime={e.created_at}
            >   
                <TextWithEllipsis className="" maxLength={65} text={e.title} />
                <br />
                <TextWithEllipsis className="font-thin" maxLength={110} text={e.description} />
            </Announcement>
        </Link>
      ))}
      </div>
    </section>
  )
}
