import React from 'react'
import style from '../Checkout/Checkout.module.css';

const Comprobante = () => {
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
