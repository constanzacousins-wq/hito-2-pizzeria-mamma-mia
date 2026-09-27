const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="pizza-card">
      <img src={img} alt={name} />

      <div className="pizza-info">
        <h3>Pizza {name}</h3>

        <p>Ingredientes:</p>

        <p className="ingredients">
          🍕 {ingredients.join(", ")}
        </p>

        <h4>Precio: ${price.toLocaleString("es-CL")}</h4>

        <div className="card-buttons">
          <button>Ver Más 👀</button>
          <button>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;