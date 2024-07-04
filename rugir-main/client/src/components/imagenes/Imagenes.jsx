
import style from "./Imagenes.module.css"

const images = [
  './simpsom.png',
  './serie.png',
  './diego.png',
  './aldo.png',
  './racing.png',
  './tx.png',
];

function Imagenes() {

  return (
    <div className={style.container}>
      <div className={style.line}>
        {images.slice(0, 3).map((image, index) => (
          <img key={index} src={image} className={style.image} alt="Product" />
        ))}
      </div>
      <div className={style.line}>
        {images.slice(3, 6).map((image, index) => (
          <img key={index} src={image} className={style.image} alt="Product" />
        ))}
      </div>
     </div>
  );
}

export default Imagenes;
