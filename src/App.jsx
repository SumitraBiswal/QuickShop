import { useState } from "react";

import Home from './pages/Home/HomePage'
import  {  Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';

import SubCategoryPage from "./pages/Home/SubCategoryPage";
import About from './pages/Home/About';
import Product from './pages/Home/Product';
import ProductPage from "./pages/Home/ProductPage"
import subCategories from "./Component/Data/subCategories";
import ScrollToTop from "./pages/Home/ScrollToTop";
import Contact from "./pages/Home/contact";





 function App() {
  const [quantities,setQuantities]=useState({})
  const increment =(id)=>{setQuantities (prev=>({
    ...prev,
    [id]:(prev[id]||0)+1,
  }))}
  const decrement =(id)=>{
setQuantities(prev=>{
  const current= prev[id]||0;
  if(current<=0){
    return prev;
  }
  return{
    ...prev,
    [id]:current-1,
  };
}
);
  };
  const totalCartCount=Object.values(quantities).reduce((a,b)=>a+b,0)
  const cartItem=subCategories
  .filter(item=>quantities[item.id]!==undefined)
  .map(item=>({
    ...item,
    quantity:quantities[item.id],
  }));
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route
      path="/"
      element={
        <Home
        quantities={quantities}
        increament={increment }
        decrement={decrement}
        totalCartCount={totalCartCount}
        />
      }
      />
      <Route
      path="/message"
      element={
        <Cart
        cartItems={cartItem}
        increament={increment }
        decrement={decrement}
        totalCartCount={totalCartCount}
        />
      }
      />
      <Route
      path="/subcategory/:categoryid"
      element={
        <SubCategoryPage
        quantities={quantities}
        increament={increment }
        decrement={decrement}
        totalCartCount={totalCartCount}
        />
      }
      />
      <Route
      path="/about"
      element={
        <About
        quantities={quantities}
         />
      }
      />
      <Route
      path="/product"
      element={
        <Product
        quantities={quantities}
        increament={increment }
        decrement={decrement}
        totalCartCount={totalCartCount}
        />
      }
      />
      <Route
      path="/products/:id"
      element={
        <ProductPage />
      }
      />
      <Route
      path="/contact"
      element={
        <Contact
        quantities={quantities}
        />
      }
      />
    </Routes>
    </>
  )
}
export default App
