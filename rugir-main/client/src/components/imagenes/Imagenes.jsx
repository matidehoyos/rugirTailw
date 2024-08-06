import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import style from "./Imagenes.module.css"


const images = [
  './tx.png',
  './aldo.png',
  './simpsom.png',
  './diego.png',
];

function Imagenes() {
  useEffect(() => {
      AOS.init(); 
    }, []);
  
  return (
    <div className={style.container}>
      <div className={style.line} data-aos="fade-up" data-aos-duration="1000">
        {images.slice(0,6).map((image, index) => (
          <img key={index} src={image} className={style.image} alt="Product"/>
        ))}
      </div>
     </div>
  );
}

export default Imagenes;
