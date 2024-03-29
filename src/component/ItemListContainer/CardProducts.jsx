import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UncontrolledExample from '../boostrap/Carousel';
import { CartContext } from '../Context/Contexto';
import style from  './CardProducts.module.css';



const CardProducts = () => {

    // const [comprador, setComprador] = useState({})

    //contexto

    const {productos} = useContext(CartContext)
    const {ordenes} = useContext(CartContext)
    const {getOrdenes} = useContext(CartContext)
    const {comprador} = useContext(CartContext)

    

    // console.log( productos)
    console.log ("cardProd: ")
    console.log (ordenes)
    console.log ("comprador: ")
    console.log (comprador)

    



    // const probando = () => {
    //     console.log(ordenes);
    //     console.log(ordenes[0]);
    //     setComprador(ordenes[0].comprador);
    //     console.log(comprador.nombre);
    // }

    


    useEffect(() => {
        getOrdenes();      
    },[])



    return (
        <div>
            <div className= {style.title} >
                <h1>¡Bien venidos a Deco Bodereau!</h1>
            </div>
            <div className={style.container1}>
                <UncontrolledExample/>
            </div>
            <div>
                <h2>algunos de nuestros produsctos...</h2>
            </div>
            <div className={style.card} >{
                productos.map((producto) => {
                    return (
                        <div className={style.card1}>
                            <img src={producto.url} alt="" className={style.imagenesCard} />
                            <h1 className={style.card1Title}>{producto.name}</h1>
                            <div className={style.card1Btn}>
                                <Link to={`/Productos/detalles/${producto.id}`}>
                                    <button className={style.btn} >detalles</button>
                                </Link>
                            </div>
                        </div>
                            
                    )
        
                })
        }
        </div>
        </div>
    )
    
    


}

export default CardProducts;



/*
return (
        productos.map((producto, idex) => {
            console.log(producto.name[1] + "["+ idex +"]")
            return (
                
                <div className={style.card} >
                    <div className={style.card1}>
                        <h1 className={style.card1Title}>{producto.name}</h1>
                        <img src={producto.url} alt="" className={style.imagenesCard} />
                        <p className={style.card1Description}>{producto.description}</p>
                        <div className={style.card1Btn}>
                            <button>eliminar</button>
                            <Link to={`/Productos/detalles/${producto.id}`}>
                                <button>detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            )

        })
    )

*/ 