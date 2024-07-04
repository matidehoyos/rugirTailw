import style from './About.module.css'

function About() {
  return (
    <div className={style.container} id='about'>
            <div className={style.image}><img src="./g2.png" alt="" /></div>
            <div className={style.imag}></div>
            <div className={style.caja}>
                <h3>Sobre nosotros</h3>
                <p><span>RUGIR</span> es un emprendimiento marplatense, que nace como un hobby, y de apoco, y gracias a ustedes pudo ir creciendo hasta convertirse hoy en día, en nuestra profesión.<br/> Somos una familia, y estamos felices de crear productos de primera calidad, y que nos elijan a la hora de decorar una casa, un quincho, una habitación o ser un regalo muy especial para alguien.</p>
            </div>
    </div>
  )
}

export default About