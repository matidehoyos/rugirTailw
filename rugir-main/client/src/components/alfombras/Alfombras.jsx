import React, { useState, useEffect } from 'react';
import style from './Alfombras.module.css';

const images = [
  './simpsom.png',
  './aldo.png',
  './tx.png',
  './serie.png',
  './diego.png',
  './racing.png',
];

function Alfombras() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <img
        src={images[currentIndex]}
        className={style.image}
        alt="Product"
      />
    </div>
  );
}

export default Alfombras;
