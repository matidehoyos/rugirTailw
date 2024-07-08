
import style from "./Imagenes.module.css"

const images = [
  './simpsom.png',
  './serie.png',
  './tx.png',
  './aldo.png',
  './diego.png',
  './racing.png',
];

function Imagenes() {

  return (
    <div className={style.container}>
      <div className={style.line}>
        {images.slice(0,6).map((image, index) => (
          <img key={index} src={image} className={style.image} alt="Product" />
        ))}
      </div>
     </div>
  );
}

export default Imagenes;
