import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout';



function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome!'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados!'}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView/>} />
          <Route path='/checkout' element={ <Checkout /> } />
          <Route path='*' element={<h1>ERROR 404</h1>} />

        </Routes>
        </CartProvider>
      </BrowserRouter >
    </div >
  );
}

export default App;