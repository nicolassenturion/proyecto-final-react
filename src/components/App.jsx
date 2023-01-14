import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//Router Dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Context
import { DarkModeProvider } from '../context/DarkModeContext';

import {ToastContainer} from 'react-toastify';

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
        <DarkModeProvider>
          <Navbar/>
          <Banners/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </DarkModeProvider>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>
    </>
      
  );
}
export default App;