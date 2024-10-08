import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import style from './Contact.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className={style.container} id="contacto">
        <h3 data-aos="fade-up" data-aos-duration="1000">Envianos tu consulta</h3>
        <p data-aos="fade-up" data-aos-duration="1000">Pedí tu presupuesto através de un mensaje directo, responderemos a la brevedad...</p>
        <div className={style.redes}>
            <button data-aos="fade-up" data-aos-duration="1000"><a target="_blank" href='https://www.instagram.com/rugirmdq/'><FaInstagram className={style.icon}/>Instagram</a> </button>
            <button data-aos="fade-up" data-aos-duration="1000"><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer"><FaWhatsapp className={style.icon}/>WhatsApp</a></button>
        </div>
    </div>
  )
}

export default Contact