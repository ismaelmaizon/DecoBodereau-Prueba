import React, { useContext} from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../Checkout/Checkout.module.css';
import { CartContext } from '../Context/Contexto';




const Comprobante = () => {

  const {setCarrito} = useContext(CartContext)    
  const {setTotalProd} = useContext(CartContext)   
  const {setTotal} = useContext(CartContext)
  const navigate = useNavigate()


  const volver = () => {
      setCarrito([]);
      setTotalProd(0);
      setTotal(0);
      navigate("/");
  }

  const {idCompra} = useContext(CartContext)


  // useEffect(() =>{
  //   sendEmail(idCompra)
  // } ,[] )



  return (
    <div className= {style.formComprobante}>
                <h1>Comprobante de compra: {idCompra}</h1>
            <Link to="/" >
                <button onClick={volver} >volver al inicio</button>            
            </Link>
    </div>
  )
}

export default Comprobante
