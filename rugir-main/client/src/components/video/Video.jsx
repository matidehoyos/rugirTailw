import style from './Video.module.css'
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Video = () => {
     useEffect(() => {
            AOS.init(); 
          }, []);

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(error => {
                console.error('Error al intentar reproducir el video:', error);
            });
        }
    }, []);


  return (
    <div className={style.boxVideo}>
        <div className={style.box}>
        <video ref={videoRef} playsInline muted autoPlay loop>
                <source src='./video.mp4' type="video/mp4" />
                Tu navegador no admite el elemento de video.
          </video>
        </div>
    </div>
  );
};

export default Video;


