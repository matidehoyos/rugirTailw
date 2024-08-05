import React, { useState, useEffect } from 'react';
import style from './Alfombras.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  './simpsom.png',
  './aldo.png',
  './tx.png',
  './riber.png',
  './carola.png',
];

function Alfombras() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container} data-aos="fade-up" data-aos-duration="1000">
      <img
        src={images[currentIndex]}
        className={style.image}
        alt="Product"
      />
    </div>
  );
}

export default Alfombras;
