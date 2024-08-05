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
        <div className={style.container}>
            <button className={style.flotante}><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer">Hacenos tu consulta <FaWhatsapp className={style.wt}/></a></button>
            <button className={style.flotmovil}><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer"><FaWhatsapp className={style.what}/></a></button>
                <div className={style.caja}>
                    <div className={style.first}>
                        <div className={style.titular}>
                         <div className={style.logo}  data-aos="zoom-out" data-aos-duration="1000">

                            </div> 
                            <h1 data-aos="fade-up" data-aos-duration="1000"  className={style.titulo}>TUFTING RUGS <br/> ALFOMBRAS<br/> TAPETES</h1>
                       {/*}     <p data-aos="fade-up"  data-aos-duration="1000"  className={style.amano}>PRODUCTOS HECHOS A MANO</p> */}
                            <h4 data-aos="fade-up"  data-aos-duration="1000"  className={style.personalizados}>DISEÑOS PERSONALIZADOS</h4>
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
              { /*}  <Video /> */ }
                <div className={style.regalo}>
                    <h4 data-aos="zoom-in"  data-aos-duration="900">EL REGALO PERFECTO <br />NO EXIS...</h4>
                    <img data-aos="zoom-out-left" data-aos-duration="900"src="./pika.png" alt="alfombra pikachu" />
                </div>
            </div>
    )
}

export default Header