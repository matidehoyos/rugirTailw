import style from './Ubicacion.module.css'
import { FaTruck, FaSearchLocation } from 'react-icons/fa'

function Ubicacion() {
  return (
    <div className={style.container}>
             <h3 className={style.pais}><FaTruck className={style.truk}/>ENVIOS A TODO EL PAIS</h3>
             <h3 className={style.retiro}><FaSearchLocation className={style.ubi}/>PUNTO DE RETIRO MAR DEL PLATA</h3>
    </div>
  )
}

export default Ubicacion