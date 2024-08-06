import React, { useState, useEffect } from 'react';
import style from './AlfombrasTablet.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  './tx.png',
  './pacman.png',
  './carola.png',
  './mafalda.png',
  './simpsom.png',
  './serie.png',
];

const getRandomIndices = (max, count) => {
  const indices = Array.from({ length: max }, (_, i) => i);
  const shuffledIndices = indices.sort(() => Math.random() - 0.5);
  return shuffledIndices.slice(0, count);
};

function AlfombrasTablet() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [currentGroupIndices, setCurrentGroupIndices] = useState(getRandomIndices(images.length, 3));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGroupIndices(getRandomIndices(images.length, 1));
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const displayedImages = currentGroupIndices.map((index) => images[index]);

  return (
    <div className={style.container} data-aos="fade-up" data-aos-duration="1200">
      {images.map((src, index) => (
        <img key={index} src={src} className={style.alfombra} alt={`Imagen ${index}`} />
      ))}
    </div>
  );
};

export default AlfombrasTablet;



