import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import store from "./store/store"

function App() {
  return (
    <div>
     <Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
