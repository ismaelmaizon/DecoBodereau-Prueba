import './App.css'
import Navbar from './component/Navbar/Navbar'
import {Navigate, Route, Routes} from 'react-router-dom'
import CardProducts from './component/ItemListContainer/CardProducts'
import ListSillas from './component/ItemList/ListSillas'
import ListAlfombras from './component/ItemList/ListAlfombras'
import ListPuff from './component/ItemList/ListPuff'
import ItemDetail from './component/ItemDetail/ItemDetail'
import { createContext } from 'react';
import CartProvider from './component/Context/Contexto'
import Carrito from './component/Carrito/Carrito'
import Checkout from './component/Checkout/Checkout'
import Comprobante from './component/Checkout/Comprobante'


// Contexto

export const CartContext = createContext('');
console.log("cartContext", CartContext);


function App() {

  
  return (
    <div>
      <CartProvider>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" 
            element={<CardProducts/>} />
            <Route path="/Productos"  element= { <CardProducts/> }  />
            <Route path="/Productos/sillas"  element={<ListSillas/>} />
            <Route path="/Productos/puff"  element={<ListPuff/>} /> 
            <Route path="/Productos/alfombras"  element={<ListAlfombras/>} /> 
            <Route path="/Productos/detalles/:idparams"  element={<ItemDetail/>} />
            <Route path="/Nosotros"  element={<p>sin info...</p>} />
            <Route path="/Contactos"  element={<p>sin info...</p>} />
            <Route path='*' element={<Navigate to="/"/>}/>
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='/Checkout/comprobante' element={<Comprobante/>} />
            <Route path='/carrito' element={<Carrito/>} />
          </Routes>
        </div>
      </CartProvider>
    </div>
  )
}

export default App;
