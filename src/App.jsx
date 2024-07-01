// src/components/App.js
import { useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/main/Home.jsx"
import ErrorPage from './components/error/ErrorPage.jsx';
import Shop from './components/main/Shop.jsx';
import Clothing from './components/clothing-template/Clothing.jsx';
import { useEffect } from 'react';

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  // useEffect(() => {
  //   // Fetch initial shopping cart data or set it up once
  //   const initialCart = Array.from({ length: 1 }, () => ({
  //     amount: 1,
  //     id: 3,
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     key: 3,
  //     name: "Mens Cotton Jacket",
  //     price: 55.99,
  //   }));
  //   setShoppingCart(initialCart);
  // }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
        <Route path="/Shop" element={<Shop shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />}>
          <Route path="product/:id" element={<Clothing shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;