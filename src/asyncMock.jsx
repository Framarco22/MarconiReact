/* import limpiezaSemanalImage from './assets/images/limpiezaSemanal.jpg';
 */
const products = [
    {
        id: '1',
        name: 'limpieza semanal',
        price: 100,
        category: 'limpieza',
        img: 'limpiezaSemanalImage',  
        stock: 10,
        description: 'Una limpieza semanal de casa o departamento'
    },
    { id: '2', name: 'Limpieza 2 veces por semana', price: 170, category: 'limpieza', img: '', stock: 10, description: 'Limpieza hogar' },
    { id: '3', name: 'Limpieza de mudanza', price: 120, category: 'limpieza', img: '', stock: 10, description: 'Limpieza mudanza' },
    { id: '4', name: 'Limpieza de oficina', price: 100, category: 'limpieza', img: '', stock: 10, description: 'Limpieza oficinas' },
    { id: '5', name: 'Limpieza de escaleras', price: 100, category: 'limpieza', img: '', stock: 10, description: 'Limpieza escaleras' },
    { id: '6', name: 'Limpieza tapizados', price: 100, category: 'extras', img: '', stock: 10, description: 'Limpieza tapizados' },
    { id: '7', name: 'Limpieza ventanas y espejos', price: 100, category: 'extras', img: '', stock: 10, description: 'Limpieza de espejos y ventanas' },
    { id: '8', name: 'Planchado', price: 80, category: 'extras', img: '', stock: 10, description: 'Planchado' },
]

export const getProducts = () => {
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
}