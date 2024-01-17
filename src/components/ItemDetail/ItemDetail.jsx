import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        console.log(`Añadido al carrito: ${quantity} unidades`);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Category: {category} </p>
                <p className="Info">Description: {description} </p>
                <p className="Info">Price: ${price} </p>
            </section>
            <footer className="ItemFooter">
                <button className="btn btn-outline-secondary mr-2">View details</button>

                <ItemCount
                    initial={1}
                    stock={stock}
                    onAdd={(quantity) => setQuantity(quantity)}
                />
                <button
                    className="btn btn-primary ml-2"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </footer>
        </article>
    );
};

export default ItemDetail;