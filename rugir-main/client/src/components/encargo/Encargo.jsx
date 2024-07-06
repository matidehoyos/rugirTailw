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
      {/*  <div className={style.image}>
                <img className={style.tigre} src="./lll.png" alt="logo" />
        </div> */ }
        
        <div className={style.txt} data-aos="zoom-in">
             <p>    <span className={style.idea}>Contanos tu idea</span> <br/><span className={style.env}>o envianos la imagen</span>  
                    <br/> <span className={style.alfombra}>y la convertimos</span> <br/><span className={style.alf}>  EN ALFOMBRA </span>
            </p>
           {/* <div className={style.enlace}><a href="https://www.instagram.com/rugirmdq/">Contáctanos</a></div> */}
        </div>
    </div>
  )
}

export default Encargo