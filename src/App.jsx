import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome!'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados!'}/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>ERROR 404</h1>} />

        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;


