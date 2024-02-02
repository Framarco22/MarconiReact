import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../notification/NotificationService"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    
    useEffect(() => {
        if(categoryId) document.title = 'Ecommerce: ' + categoryId 
        
        return () => {
            document.title = 'Ecommerce'
        }
    }, [categoryId])


    const asyncFunction = () => getProducts(categoryId)

    const { data: products ,error, loading } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <h1>Cargando los productos...</h1>
    }

    if(error) {
        return <h1>Hubo un error</h1>
    }

    return (
        <div>
            <h1>{greeting + (categoryId ?? '')}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer