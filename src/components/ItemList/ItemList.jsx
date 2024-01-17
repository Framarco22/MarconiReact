import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div className="list-group">
            {products.map(prod => (
                <div key={prod.id} className="list-group-item">
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;