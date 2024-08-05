import style from './Ubicacion.module.css'
import { FaTruck, FaMapMarkerAlt  } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Ubicacion() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className={style.container}>
             <h3 data-aos="fade-left" data-aos-duration="1000" className={style.pais}><FaTruck className={style.truk}/>ENVIOS A TODO EL PAIS</h3>
          {/*}   <h3 data-aos="fade-right"className={style.retiro}><FaMapMarkerAlt className={style.ubi}/>PUNTO DE RETIRO MAR DEL PLATA</h3> */ }
    </div>
  )
}

export default Ubicacion