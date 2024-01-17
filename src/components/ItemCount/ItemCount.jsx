import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter">
            <div className="input-group">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={decrement}
                >
                    -
                </button>
                <input
                    type="text"
                    className="form-control text-center"
                    value={quantity}
                    readOnly
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>

    );
};

export default ItemCount;