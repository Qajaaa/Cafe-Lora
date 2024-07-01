import './drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ name, image, layers, ordered, id }) => {
  const buttonClass = `order-btn ${ordered ? 'order-btn--ordered' : ''}`;
  const buttonText = ordered ? 'Zrušit' : 'Objednat';

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
      <form className="drink__controls" data-id={id}>
        <button type="submit" className={buttonClass}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};