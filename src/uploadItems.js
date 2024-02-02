
import { db } from "./services/firebase/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { products } from './asyncMock.js';


// Función para subir productos a Firestore
const uploadProductsToFirestore = async () => {
    const productsCollection = collection(db, 'products');

    // Itera sobre tus productos y los sube a Firestore uno por uno
    for (const product of products) {
        try {
            // Añade el producto a la colección "products"
            await addDoc(productsCollection, product);
            console.log(`Producto "${product.name}" subido correctamente.`);
        } catch (error) {
            console.error(`Error al subir el producto "${product.name}":`, error);
        }
    }

    console.log('Todos los productos han sido subidos a Firestore.');
}


uploadProductsToFirestore();