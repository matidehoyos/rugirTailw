
import style from "./Alfombras.module.css"

const images = [
  './simpsom.png',
  './serie.png',
  './diego.png',
  './aldo.png',
  './racing.png',
  './tx.png',
];

function Alfombras() {

  return (
    <div className={style.container}>
        {images.map((image, index) => (
          <img key={index} src={image} className={style.image} alt="Product" />
        ))}
     </div>
  );
}

export default Alfombras;