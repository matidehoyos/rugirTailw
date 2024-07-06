import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './Encargo.module.css'
import { useEffect } from 'react';

function Encargo() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className={style.container}>
        
        <div className={style.txt} data-aos="zoom-in">
             <p>    <span className={style.idea}>Contanos tu idea</span> <br/><span className={style.env}>o envianos la imagen</span>  
                    <br/> <span className={style.alfombra}>y la convertimos</span> <br/><span className={style.alf}>  EN ALFOMBRA </span>
            </p>
        </div>

        <div className={style.caja} data-aos="fade-up">
            <span className={style.categoria}>DEPORTES</span>
            <span className={style.categoria}>NOMBRES</span>
            <span className={style.categoria}>MUSICA</span>
            <span className={style.categoria}>CINE</span>
            <span className={style.categoria}>AUTOS</span>
            <span className={style.categoria}>FRASES</span>
            <span className={style.categoria}>ANIMALES</span>
            <span className={style.categoria}>ESCUDOS</span>
            <span className={style.categoria}>PERSONAJES</span>
        </div>
    </div>
  )
}

export default Encargo