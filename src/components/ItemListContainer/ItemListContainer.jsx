import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList.jsx';
import { cargarBDD, getProductos, getProducto, updateProducto,} from '../../assets/firebase.js';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
            
            //cargarBDD().then(productos => console.log(productos))
            //getProductos().then(productos => console.log(productos))
            //getProducto("63NIoKyPxYRwHWxPRM4R").then(prod=> console.log(prod))
        
            /*getProducto("63NIoKyPxYRwHWxPRM4R").then(prod=>{
                prod.stock -=5
                delete prod.id
                updateProducto("63NIoKyPxYRwHWxPRM4R", prod).then(estado=>console.log(estado))
            })

            deleteProducto("63NIoKyPxYRwHWxPRM4R").then(estado=> console.log(estado))*/

    },[category]);
    
    return (
        <div className= 'row cardProductos' >
            {productos}
        </div>
       
    );
}

export default ItemListContainer;
