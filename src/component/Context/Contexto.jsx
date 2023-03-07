
//base de datos
import { db } from '../../../db/firebase-config';
import { collection, getDocs, deleteDoc, doc} from 'firebase/firestore';

// Sweetalert2
import Swal from 'sweetalert2'


//emails
import emailjs from '@emailjs/browser';


//contexto

import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
export const CartContext = createContext([])

// creando mi propio hoock
 
export const useCartContext = () => useContext(CartContext)


// react router


const CartProvider = ({children}) => {

    const [productos, setProductos] = useState([])
    const prodCollection = collection(db, "productos" )
    // obtencion de productos firebase
    const getProductos = async () => {
        const dataProd = await getDocs(prodCollection);
        console.log(dataProd);
        setProductos(dataProd.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    // obtener ordenes firebase
    const [ordenes, setOrdenes] = useState({})
    const ordenesCollection = collection(db, "ordenes" )
    const getOrdenes = async () => {
        const dataOrden = await getDocs(ordenesCollection);
        console.log(dataOrden);
        setOrdenes(dataOrden.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    }

    // funcion para eliminar
    const deleteProductos = async (id) => {
        const productoDoc = doc(db, "productos", id );
        await deleteDoc(productoDoc);
        getProductos();
    }


    // Alestras

    const alerta=()=>{
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Se agrego al carrito Correctamente'
        })
    };

    console.log("productos:" + {productos})
    console.log("ordenes:" + {ordenes})
    

    /////////// logica para carrito //////////////////////////

    const [carrito, setCarrito] = useState([]);
    const [unidades, setUnidades] = useState(1);

    //////contando productos dentro de carrito//////////

    const [totalProd, setTotalProd] = useState(0);

    /*agregar al carrito*/ 
   
    const addProduct = (product, carrito, unidades) => {
        product['unidades'] = unidades
        carrito.push(product) 
        console.log("en contexto, despues del if")
        console.log(carrito)
        carrito.forEach((item, idex) => {
            console.log(`item: ${item.name}, idex: ${setTotalProd(idex + 1)}`)
        })
        return carrito
    }
    
    console.log('carrito:', carrito)

    /*ya existe?*/
    const siExiste = (id) => carrito.find(product => product.id === id) ? true : false;
    /*remover del carrito*/ 
    const removeCarrito = (id) => setCarrito(carrito.filter(product => product.id !== id));


    /*limpar carrito*/
    const limpiarCarrito = () => setCarrito([]);


    /// agregando ordenes ////////

    //precio total
    const [total, setTotal] = useState(0)
   

    const contador = () => {
        carrito.map((prod) => {setTotal(total + (prod.precio*prod.unidades))} ) 
    }



    ///// info de checkout /////

    const [idCompra, setIdCompra] = useState("")



    ////// emails //////


    const sendEmail = (idCompra) => {
        
        emailjs.send('service_j2ki7bf', 'template_cywbieo', {message: `hola ismael, se genero un acompra con codigo: ${idCompra}`}, 'yyv2iSvB0hSjYp091')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    
    useEffect(() => {
        getProductos();
        getOrdenes();
    }, []);


    return (
        <CartContext.Provider value={{
            sendEmail,
            idCompra, setIdCompra,
            total,contador, setTotal,
            productos,ordenes,
            alerta,
            totalProd, setTotalProd,
            carrito, setCarrito,
            unidades, setUnidades, 
            addProduct, 
            siExiste, 
            removeCarrito, 
            limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}



export default CartProvider;