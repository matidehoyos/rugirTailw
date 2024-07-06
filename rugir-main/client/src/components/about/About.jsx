import style from './About.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function About() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const images = [
    './g1.jpeg',
    './g2.jpeg',
    './g3.jpeg',
    './g4.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={style.container} id='about'>
            <div className={style.imag}>
                <img data-aos="fade-up-right" src="./lll.png" alt="logo" className={style.tigre} />
            </div>
            <div className={style.caja}>
                <h3>Sobre nosotros</h3>
                <p data-aos="fade-up"><span>RUGIR</span> es un emprendimiento marplatense, que nace como un hobby, y de apoco, y gracias a ustedes pudo ir creciendo hasta convertirse hoy en día, en nuestra profesión.<br/> Somos una familia, y estamos felices de crear productos de primera calidad, y que nos elijan a la hora de decorar una casa, un quincho, una habitación o ser un regalo muy especial para alguien.</p>
            </div>
            <div className={style.cajaImg}>
            <img
                src={images[currentIndex]}
                alt="About"
                data-aos="zoom-in"
      />
        </div>
    </div>
  )
}

export default About