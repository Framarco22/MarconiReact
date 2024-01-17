import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import { getProductById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        getProductById(id) 
            .then(response => {
                setProduct(response);
            })
            /* .catch(error => {
                console.error(error);
            }); */
    }, [id]);

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <div className='container mt-4'>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;