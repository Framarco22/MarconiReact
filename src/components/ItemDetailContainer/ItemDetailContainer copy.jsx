import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where('id', '==', productId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach(doc => {
            setProduct(doc.data());
          });
        } else {
          console.error("No existe un producto con el ID proporcionado.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <h1>Cargando el producto...</h1>;
  }

  if (!product) {
    return <h1>El producto no existe</h1>;
  }

  return (
    <div>
      <h1>Detalle del producto</h1>
      <ItemDetail {...product} />
      <ItemCount stock={product.stock} onAdd={(count) => console.log(count)} />
    </div>
  );
};

export default ItemDetailContainer;
