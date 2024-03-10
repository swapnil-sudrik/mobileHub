import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserHome from './Components/UserHome';
import MyCart from './Components/MyCart';
import MyOrders from './Components/MyOrders';
import NotFound from './Components/NotFound';
import OneProductDetails from './Components/OneProductDetails';


function App() {
  return (
    <BrowserRouter>

      {/* <UserHome /> */}
      <Routes>
        <Route path='/' element={<UserHome />} />
        <Route path='/cart' element={<MyCart />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/product/:id' element={<OneProductDetails />}/>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
