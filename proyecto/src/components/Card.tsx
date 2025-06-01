
import './Card.css';
import type { Animal } from '../animales';

interface CardProps {
  animal: Animal;
}

function Card({ animal }: CardProps) {
  return (
    <div className="center">
      <div className="card">
        <div className="additional">
          <div className="user-card">
            <div className="level center">
              Especie: <strong>{animal.estatus}</strong>
            </div>
            <div className="points center">
              Animal: {animal.nombre}
            </div>
            <div className="imagen">
              <img src={animal.imagen ?? '/assets/image/default.png'} alt={animal.nombre} width={100} height={100} />
            </div>
          </div>
          <div className="more-info">
            <h1>{animal.nombre}</h1>
            <div className="coords">
              <span>Pais de Origen:</span>
              <span>Medida:</span>
            </div>
            <div className="coords">
              <span><strong>{animal.pais_origen}</strong></span>
              <span><strong>{animal.size}</strong></span>
            </div>
            <div className="stats">
              <div>
                <div className="title">Alimentacion</div>
                <i className="fa fa-trophy"></i>
                <div className="value">{animal.alimentación}</div>
              </div>
              <div>
                <div className="title">Clasificacion</div>
                <i className="fa fa-gamepad"></i>
                <div className="value">{animal.clasificacion}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{animal.nombre}</h1>
          <p>Mas Datos.</p>
          <span className="more">Pasa el mouse encima para más informacion</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

