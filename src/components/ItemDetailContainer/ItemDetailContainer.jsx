import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc, QueryDocumentSnapshot} from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNotification } from "../notification/NotificationService";
import {createProductFromFirestore} from '../../adapters/createProductsFromFirestore'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)

  const { productId } = useParams()

  const { showNotification } = useNotification()

  useEffect(() => {
      if(product) document.title = product.name
      
      return () => {
          document.title = 'Ecommerce'
      }
  })

  useEffect(() => {
      setLoading(true)

      const productDocument = doc(db, 'products', productId)

      getDoc(productDocument)
          .then(queryDocumentSnapshot => {
            const productAdapted = createProductFromFirestore(queryDocumentSnapshot)
            setProduct(productAdapted)
          })
          .catch(error => {
              showNotification('error', 'Hubo un error')
          })
          .finally(() => {
              setLoading(false)
          })

        }, [productId])

        if(loading) {
            return <h1>Cargando el producto...</h1>
        }
    
        if(!product) {
            return <h1>El producto no existe</h1>
        }
        return (
            <div>
                <h1>Detalle</h1>
                <ItemDetail {...product} />
                
            </div>
        )
    }
    
    export default ItemDetailContainer