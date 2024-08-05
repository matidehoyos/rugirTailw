import style from './Video.module.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Video = () => {
     useEffect(() => {
            AOS.init(); 
          }, []);


  return (
    <div className={style.boxVideo}>
        <div className={style.box}>
        <video controls playsInline muted autoPlay>
                <source src='./video.mp4' type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    </div>
  );
};

export default Video;


