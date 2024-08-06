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
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={style.container} id='about'>
          {/*}  <div className={style.imag}>
                <img data-aos="fade-up-right" data-aos-duration="900" src="./lll.png" alt="logo" className={style.tigre} />
            </div> */}
            <div className={style.caja}>
                <div className={style.parrafo}>
                   <p data-aos="fade-up" data-aos-duration="1000"><span>RUGIR</span> es un emprendimiento que nació como un hobby, y gracias a nuestros clientes, pudo ir creciendo hasta convertirse en nuestra principal actividad.<br/> Estamos felices de poder brindar un producto de primera calidad, y que muchas veces nos elijan al momento de hacer un regalo especial, decorar una casa, un quincho, un club, o un local comercial.</p>
                </div>
            </div>
            <div className={style.cajaImg}>
            <img
                src={images[currentIndex]}
                alt="About"
                data-aos="fade-up" data-aos-duration="1000"/>
           </div>
            <div className={style.tablet}>
            {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagen ${index + 1}`} />
      ))}
           </div>
    </div>
  )
}

export default About