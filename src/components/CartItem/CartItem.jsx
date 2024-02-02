import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, price, quantity, stock }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="item-details">
        <p>{name}</p>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Available Stock: {stock} </p>
      </div>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
