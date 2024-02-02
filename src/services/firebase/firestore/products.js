import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../firebaseConfig'
import { createProductFromFirestore } from '../../../adapters/createProductsFromFirestore'

export const getProducts = (categoryId) => {
        const productsCollection = categoryId 
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        return getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    return createProductFromFirestore(doc)
                })

                return productsAdapted
            })
            .catch(error => {
                return error
            })
}

export const getProductById = () => {

}