import React, { useState, useEffect } from 'react';
import style from './Alfombras2.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  './serie.png',
  './diego.png',
  './racing.png',
  './pika.png',
];

function Alfombras2() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-aos="zoom-in" className={style.container}>
      <img
        src={images[currentIndex]}
        className={style.image}
        alt="Product"
      />
    </div>
  );
}

export default Alfombras2;
