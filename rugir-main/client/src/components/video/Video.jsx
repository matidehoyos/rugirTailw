import style from './Video.module.css'
import React, { useEffect, useRef } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
        })
        .catch(error => {
          console.error('Error al reproducir el video:', error);
        });
    }
  }, []);

  return (
    <div className={style.boxVideo}>
        <div className={style.box}>
            <video ref={videoRef} controls>
                <source src='./video.mp4' type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
        </div>
    </div>
  );
};

export default Video;


