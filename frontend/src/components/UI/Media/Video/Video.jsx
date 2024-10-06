import React, { useRef, useState, useEffect } from 'react';
import "./styles/style.css"



export default function Video(props) {
  const parentRef = useRef(null); 
  const [parentWidth, setParentWidth] = useState(0); 

  useEffect(() => {
    if (parentRef.current) {
      const width = parentRef.current.getBoundingClientRect().width;
      setParentWidth(width);
    }

    const handleResize = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);





  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); 
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleVolumeToggle = () => {
    const currentVolume = videoRef.current.volume;
    if (currentVolume == 0) {
      videoRef.current.volume = 0.5;
      setVolume(0.5);
      videoRef.current.play();
    }
    else {
      videoRef.current.volume = 0;
      setVolume(0);
      videoRef.current.play();
    }
  };

  const handleProgress = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  const handleFullscreen = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Проверка на доступность метода полноэкранного режима
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Для Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Для Chrome, Safari и Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // Для IE/Edge
        videoElement.msRequestFullscreen();
      }
    }
  };




  return (
    // <div style={{width: props.width}} className="">
      <div ref={parentRef} style={{width: props.width, height: props.height}} className='flex-center overflow-hidden rounded-xl bg-black'>

          <video ref={videoRef} onTimeUpdate={handleProgress} poster={props.poster} width="100%">
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        



          <div style={{width: parentWidth, height: props.height}} className="flex flex-col justify-end absolute">

            <div onClick={togglePlayPause} style={{width: parentWidth, height: props.height}} className="absolute z-10">
            
            </div>

            <div style={{borderRadius: "0 0 12px 12px"}} className="bg-black-25 box-border px-2 flex items-center justify-between z-20">

              <button onClick={togglePlayPause} className="bg-gray-800 text-white pt-[5px] rounded mx-[10px]">
                {isPlaying ? <span className="material-symbols-rounded">pause</span> : <span className="material-symbols-rounded">play_arrow</span>}
              </button>



              {/* Volume Control */}
              <span onClick={handleVolumeToggle} className="material-symbols-rounded text-white cursor-pointer">{volume == 0 ? 'volume_off' : 'volume_up'}</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 mx-[10px]"
              />



              {/* Progress Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full mx-[10px]"
              />


              <button className='pt-[6px] mr-1 text-white' onClick={handleFullscreen}>
                <span className="material-symbols-rounded">
                  fullscreen
                </span>
              </button>


            </div>
          </div>


          {isPlaying == true ? "" : 
            <div className="flex-center absolute">
              <div className="bg-primary-def hover:bg-primary-darker w-20 h-20 rounded-full flex-center">
                <span className="material-symbols-rounded text-white text-5xl">play_arrow</span>
              </div>
            </div>
          }

      </div>
    // </div>
  )
}
