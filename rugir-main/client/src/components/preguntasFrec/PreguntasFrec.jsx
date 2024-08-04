import React, { useEffect, useState } from 'react';
import style from './PreguntasFrecuentes.module.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const PreguntasFrecuentes = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      pregunta: '¿Cómo encargar?',
      respuesta: 'Envianos un WhatsApp o un mensaje en Instagram, contandonos la idea, o enviandonos la imagen, junto con las medidas pretendidas, y responderemos a la brevedad.',
    },
    {
      id: 2,
      pregunta: '¿Precios?',
      respuesta: 'El presupuesto varía según la idea y medidas de la misma. Será dado de manera porsonalizada',
    },
    {
      id: 3,
      pregunta: '¿Formas de pago?',
      respuesta: 'Al momento del encargo se debe abonar el 50% del total. El restante sera abonado al ser finalizado el producto.',
    },
    {
      id: 4,
      pregunta: '¿Tiempos de entrega?',
      respuesta: 'El producto estará listo para su envio a partir del septimo dia habil desde su encargo.',
    },
    {
      id: 5,
      pregunta: '¿Costos de envio?',
      respuesta: 'Dependerá de la cotización del Correo Argentino al momento del envio.',
    },
    {
      id: 6,
      pregunta: '¿Punto de retiro?',
      respuesta: 'Podes retirar tu alfombra por nuestro taller en Mar Del Plata.',
    },
    {
      id: 7,
      pregunta: '¿Metodos de pago?',
      respuesta: 'Al momento aceptamos transferencia bancaria, o pago en efectivo.',
    },
    {
      id: 8,
      pregunta: '¿Medidas?',
      respuesta: 'La medida mínima dependerá del modelo a elegir. La medida máxima al momento es de 120x80cm.',
    },
    

  ]);

  const toggleRespuesta = (id) => {
    setPreguntas((prevPreguntas) =>
      prevPreguntas.map((pregunta) =>
        pregunta.id === id ? { ...pregunta, abierto: !pregunta.abierto } : { ...pregunta, abierto: false }
      )
    );
  };

  return (
    <div className={style.container} id='frec'>
      <h4 data-aos="fade-right" data-aos-duration="900" className={style.titulo} >Preguntas frecuentes</h4>
      {preguntas.map((pregunta) => (
        <div key={pregunta.id} className={style.acordeon} data-aos="fade-right" data-aos-duration="900">
          <button 
            
            className={style.pregunta}
            onClick={() => toggleRespuesta(pregunta.id)}
          >
            {pregunta.pregunta}
          </button>
          {pregunta.abierto && <p className={style.respuesta}>{pregunta.respuesta}</p>}
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
