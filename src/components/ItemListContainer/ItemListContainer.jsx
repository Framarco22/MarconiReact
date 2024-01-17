import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams([])

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response);
            })
            /* .catch(error => {
                console.error(error);
            }); */
    }, [categoryId]);

    return (
        <div className="container mt-5">
            <h1 className="display-4 mb-4">{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
