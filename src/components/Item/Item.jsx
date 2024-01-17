import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Añadido al carrito: ${quantity} unidades`);
  };

  return (
    <div className="card CardItem" style={{ width: '250px' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Available Stock: {stock}</p>

        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => setQuantity(quantity)}
        />

        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
          style={{ margin: '10px 0' }}
        >
          Add to Cart
        </button>
        <Link
          className="btn btn-secondary"
          style={{ margin: '10px 0' }}
          to={`/detail/${id}`}
        >
          Ver detalle 
        </Link>
      </div>
    </div>
  );
};

export default Item;