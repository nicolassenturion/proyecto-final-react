import React from "react";
import {useNavigate} from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../assets/firebase";
import { useCarritoContext } from "../../context/CarritoContext";
import {toast} from 'react-toastify';
const Checkout = () => {
    const{totalPrice, carrito, emptyCart}=useCarritoContext()
    const datosFormulario = React.useRef();
    let navigate = useNavigate();


    const consultarFormulario = (e)=>{
        e.preventDefault();
        console.log(datosFormulario);
        const datForm = new FormData(datosFormulario.current);
        const cliente = Object.fromEntries(datForm);

        const aux = [...carrito]

        aux.forEach(prodCarrito=>{
            getProducto(prodCarrito.id).then(prodBDD =>{
                if(prodBDD.stock >= prodCarrito.cant){
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                } else{
                    toast.error(`El producto ${prodBDD} no se encuentra en stock`)
                    emptyCart()
                }
            })
        })

        //
        console.log(cliente);
        createOrdenCompra(cliente,totalPrice(),new Date().toISOString().slice(0,10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item =>{
                toast.success(`¡Muchas gracias por su compra!, su orden es ${item.id}`)
                emptyCart()
                e.target.reset();
                navigate("/");
            }).catch(error => {
                toast.error ("La orden de compra no fue generada con éxito")
                console.error(error)
            })
            
        })
        
    }
    return (
        <div className="container" >
            <form onSubmit={consultarFormulario} ref={datosFormulario} className="espaciadoNav formCheckout" >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" placeholder="Aqui ingrese su Nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">DNI</label>
                    <input type="number" className="form-control" name="dni" placeholder="Aqui ingrese su DNI" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" placeholder="Aqui ingrese su Teléfono" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Dirección</label>
                    <input type="text" className="form-control" name="direccion" placeholder="Aqui ingrese su Dirección Fisica"required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="nombre@ejemplo.com" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1">Repita su Email</label>
                    <input type="email" className="form-control" name="email" placeholder="nombre@ejemplo.com" required/>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>
        
       

    );
}

export default Checkout;
