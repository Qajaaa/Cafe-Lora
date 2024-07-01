import './menu.css'
import { Drink } from '../Drink/drink';


export const Menu = ({drinks}) => (
    <section id = 'menu'className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
          {drinks.map(drink => (
          <Drink
            key={drink.id}
            name={drink.name}
            image={`http://localhost:4000${drink.image}`}
            layers={drink.layers}
            ordered={drink.ordered}
            id={drink.id}
          />
        ))}
        
            </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
);