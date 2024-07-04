import style from './Categorias.module.css'

function Categorias() {

    const images = [
        './g1.png',
        './g2.png',
        './g5.png',
        './g4.png',
      ];
      

  return (
    <div className={style.container}>
        <div className={style.caja}>
            <span className={style.categoria}>DEPORTES</span>
            <span className={style.categoria}>CINE</span>
            <span className={style.categoria}>AUTOS</span>
            <span className={style.categoria}>ANIMALES</span>
            <span className={style.categoria}>ESCUDOS</span>
            <span className={style.categoria}>PERSONAJES</span>
            <span className={style.categoria}>FRASES</span>
            <span className={style.categoria}>NOMBRES</span>
        </div>
        <div className={style.cajaImg}>
            {
                images.map((image, index) => (
                    <img key={index} src={image} className={style.image} alt="Product" />
                  ))}
        </div>
    </div>
  )
}

export default Categorias