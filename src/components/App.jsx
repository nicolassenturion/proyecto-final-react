import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Componentes
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Banners from './Banners/Banners';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';

const App = () => {
  
  return (
    <> 
      <BrowserRouter>
        <Navbar/>
        <Banners/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
      
  );
}
//<Footer/> agregar despues de Routes
export default App;