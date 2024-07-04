import style from './Encargo.module.css'

function Encargo() {
  return (
    <div className={style.container}>
        <div className={style.image}>
                <img className={style.tigre} src="./rugir.png" alt="logo" />
        </div>
        <div className={style.txt}>
             <p>    <span className={style.idea}>CONTANOS TU IDEA</span> <br/><span className={style.env}>O ENVIANOS LA IMAGEN</span>  
                    <br/> <span className={style.alfombra}>Y LA CONVERTIMOS</span> <br/><span className={style.alf}>  EN ALFOMBRA </span>
            </p>
            <div className={style.enlace}><a href="https://www.instagram.com/rugirmdq/">Contáctanos</a></div> 
        </div>
    </div>
  )
}

export default Encargo