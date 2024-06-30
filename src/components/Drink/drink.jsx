import './drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ name, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          <div className="layers">
            {layers.map((layer, index) => (
              <Layer key={index} color={layer.color} label={layer.label} />
            ))}
          </div>
        </div>
      </div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">
          Objednat
        </button>
      </form>
    </div>
  );
};