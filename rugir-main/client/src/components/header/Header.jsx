import { FaWhatsapp } from 'react-icons/fa'
import Imagenes from '../imagenes/Imagenes'
import style from './Header.module.css'
import Alfombras from '../alfombras/Alfombras'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AlfombrasTablet from '../alfombrasTablet/AlfombrasTablet';

function Header() {
    useEffect(() => {
        AOS.init(); 
      }, []);


    return (
        <div className={style.container} id='header'>
            <button className={style.flotante}><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer">Hacenos tu consulta <FaWhatsapp className={style.wt}/></a></button>
            <button className={style.flotmovil}><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer"><FaWhatsapp className={style.what}/></a></button>
                <video autoPlay muted loop className={style.video}>
                    <source src='./ss.mp4' type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                </video>
                <div className={style.caja}>
                    <div className={style.first}>
                        <div className={style.titular} data-aos="zoom-out" data-aos-duration="1000">
                            <h1  className={style.titulo}>TUFTING RUGS <br/> ALFOMBRAS<br/> TAPETES</h1>
                            <h4 className={style.personalizados}>DISEÑOS<br/>PERSONALIZADOS</h4>
                            <h4 className={style.personaliza}>DISEÑOS PERSONALIZADOS</h4>
                        </div>
                        <div className={style.mov}>
                            <Alfombras />
                        </div>
                        <div className={style.tablet}>
                            <AlfombrasTablet />
                        </div>
                        <div className={style.imagenes}>
                            <Imagenes />
                        </div>
                    </div>
                </div>
                <div className={style.regalo}>
                    <h4 data-aos="fade-left"  data-aos-duration="1000">EL REGALO PERFECTO <br />EXISTE!!!</h4>
                    <img data-aos="fade-left" data-aos-duration="1000"src="./pika.png" alt="alfombra pikachu" />
                </div>
            </div>
    )
}

export default Header