import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import style from './Contact.module.css'

function Contact() {
  return (
    <div className={style.container} id="contact">
        <h3>Envianos tu consulta</h3>
        <p>Pedí tu presupuesto através de un mensaje directo, responderemos a la brevedad...</p>
        <div className={style.redes}>
            <nav>
                    <ul>
                      <li><a target="_blank" href='https://www.instagram.com/rugirmdq/'><FaInstagram /></a> </li>
                      <li><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                    </ul>
              </nav>
        </div>
    </div>
  )
}

export default Contact