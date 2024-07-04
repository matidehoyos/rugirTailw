import { FaWhatsapp } from 'react-icons/fa'
import Imagenes from '../imagenes/Imagenes'
import style from './Header.module.css'
import Alfombras from '../alfombras/Alfombras'

function Header() {
    return (
        <div className={style.container}>
            <button className={style.flotante}><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer">Hacenos tu consulta <FaWhatsapp className={style.what}/></a></button>
            <button className={style.flotmovil}><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer"><FaWhatsapp className={style.what}/></a></button>
            <div className={style.subcontainer}>
                <div className={style.caja}>
                    <div className={style.first}>
                        <div className={style.titular}>
                            <h1 className={style.titulo}>TUFTING RUGS <br/> ALFOMBRAS<br/> TAPETES</h1>
                            <p className={style.amano}>PRODUCTOS HECHOS A MANO</p>
                            <h4 className={style.personalizados}>DISEÑOS PERSONALIZADOS</h4>
                        </div>
                        <div className={style.mov}>
                            <Alfombras />
                        </div>
                    </div>
                    <div className={style.imagenes}>
                        <Imagenes />
                    </div>
                </div>
                <div className={style.regalo}>
                    <h4>EL REGALO PERFECTO <br/>NO EXIS...</h4>
                    <img src="./pika.png" alt="alfombra pikachu" />
                </div>
            </div>
            </div>
    )
}

export default Header