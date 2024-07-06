import style from './Categorias.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Categorias() {
  useEffect(() => {
    AOS.init(); 
  }, []);

    const images = [
        './g1.png',
        './g2.png',
        './g5.png',
        './g4.png',
      ];
      

  return (
    <div className={style.container}>
        <div className={style.caja} data-aos="fade-up">
            <span className={style.categoria}>DEPORTES</span>
            <span className={style.categoria}>CINE</span>
            <span className={style.categoria}>AUTOS</span>
            <span className={style.categoria}>ANIMALES</span>
            <span className={style.categoria}>ESCUDOS</span>
            <span className={style.categoria}>PERSONAJES</span>
            <span className={style.categoria}>FRASES</span>
            <span className={style.categoria}>NOMBRES</span>
            <span className={style.categoria}>MUSICA</span>
            <span className={style.categoria}>ETC</span>
        </div>
        <div className={style.cajaImg}>
            {
                images.map((image, index) => (
                    <img data-aos="zoom-in" key={index} src={image} className={style.image} alt="Product" />
                  ))}
        </div>
    </div>
  )
}

export default Categorias