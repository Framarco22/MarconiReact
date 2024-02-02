/* import limpiezaSemanal from "./assets/Images/limpiezaSemanal.jpg";
import limpieza2Semanal from "./assets/Images/limpieza2Semanal.jpg";
import limpiezaMudanza from "./assets/Images/limpiezaMudanza.jpg";
import limpiezaOficina from "./assets/Images/limpiezaOficina.jpg";
import limpiezaEscaleras from "./assets/Images/limpiezaEscaleras.jpg";
import limpiezaTapizados from "./assets/Images/limpiezaTapizados.jpg";
import limpiezaVidrios from "./assets/Images/limpiezaVidrios.jpg";
import limpiezaPlanchado from "./assets/Images/limpiezaPlanchado.jpg" */


const products = [
    {
        id: '1',
        name: 'limpieza semanal',
        price: 100,
        category: 'limpieza',
        img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaSemanal.jpg?alt=media&token=d39a5471-da0f-46cf-ad6a-ae1bc4f08d76',  
        stock: 10,
        description: 'Una limpieza semanal de casa o departamento'
    },
    { id: '2', name: 'Limpieza 2 veces por semana', price: 170, category: 'limpieza', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpieza2Semanal.jpg?alt=media&token=ac9659fd-77e2-4676-be56-ab6f3551b2c4', stock: 10, description: 'Limpieza hogar' },
    { id: '3', name: 'Limpieza de mudanza', price: 120, category: 'limpieza', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaMudanza.jpg?alt=media&token=49c2fe04-f1b0-4eb3-b8fd-d4647032e2f1', stock: 10, description: 'Limpieza mudanza' },
    { id: '4', name: 'Limpieza de oficina', price: 100, category: 'limpieza', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaOficina.jpg?alt=media&token=8751f33b-068c-4a1e-bfb5-5d1440ba1fad', stock: 10, description: 'Limpieza oficinas' },
    { id: '5', name: 'Limpieza de escaleras', price: 100, category: 'limpieza', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaEscaleras.jpg?alt=media&token=e5da6a64-dabd-4964-b570-1fde3617e581', stock: 10, description: 'Limpieza escaleras' },
    { id: '6', name: 'Limpieza tapizados', price: 100, category: 'extras', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaTapizados.jpg?alt=media&token=8d5e3674-cb00-49b8-a980-23f8c23e814a', stock: 10, description: 'Limpieza tapizados' },
    { id: '7', name: 'Limpieza ventanas y espejos', price: 100, category: 'extras', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaVidrios.jpg?alt=media&token=8b1ba747-40b1-4c0b-b23d-f0c7862f8b86', stock: 10, description: 'Limpieza de espejos y ventanas' },
    { id: '8', name: 'Planchado', price: 80, category: 'extras', img: 'https://firebasestorage.googleapis.com/v0/b/francoappcod.appspot.com/o/limpiezaPlanchado.jpg?alt=media&token=17e8d810-fd21-4a2f-b5e3-847c48007421', stock: 10, description: 'Planchado' },
    
]


/* export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
} */

/* export { products }; */