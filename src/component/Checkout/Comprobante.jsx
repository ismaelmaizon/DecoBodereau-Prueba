import React, { useContext, useState} from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../Checkout/Checkout.module.css';
import { CartContext } from '../Context/Contexto';


//emails
import emailjs from '@emailjs/browser';

const Comprobante = () => {

  const {setCarrito} = useContext(CartContext)    
  const {setTotalProd} = useContext(CartContext)   
  const {setTotal} = useContext(CartContext)
  const navigate = useNavigate()

  const {ordenes} = useContext(CartContext)

  const {idCompra} = useContext(CartContext)
  const {getOrdenes} = useContext(CartContext)
  const {setComprador} = useContext(CartContext)
  const {comprador} = useContext(CartContext)






  console.log("comprobante")
  console.log(ordenes);




  const infoComprador = (ordenes, idCompra) => {


    console.log("dentro de sedEmail");
    console.log(ordenes);
    console.log(idCompra);


    ordenes.map((ord) => {
      if (ord.id === idCompra) {
        console.log("dentro del if");
        console.log(ord.comprador);
        return ord.comprador;

      }else {
        console.log("fuera del if");
      }
    })

           
    // emailjs.send('service_j2ki7bf', 'template_cywbieo', {message: `hola ismael, se genero un acompra con codigo: ${idCompra}`}, 'yyv2iSvB0hSjYp091')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
  }
  
  const sendEmail = (comprador) => {
    console.log(comprador);
  }


  const volver = () => {
      setComprador(infoComprador(ordenes, idCompra));
      setCarrito([]);
      setTotalProd(0);
      setTotal(0);
      navigate("/");
  }

  useEffect(() =>{
    getOrdenes();
} ,[] )


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
