import reactImg from './assets/cart.jpg'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={reactImg} alt="Cart" style={{ width: '35px', height: '35px', marginRight: '5px' }} />
            {totalQuantity}
        </div>
    )
}

export default CartWidget

