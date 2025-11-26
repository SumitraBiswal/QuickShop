import { useState } from "react";

import  {  Routes,Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import "./App.css"
import SubCategoryPage from "./pages/Home/SubCategoryPage";
import About from './pages/Home/About';
import Product from './pages/Home/Product';
import ProductPage from "./pages/Home/ProductPage"
import subCategories from "./Component/Data/subCategories";
import ScrollToTop from "./pages/Home/ScrollToTop";
import Contact from "./pages/Home/Contact";
import Footer from "./pages/Home/Footer";
import Navbar from "./Component/Navbar";
import Login from "./pages/Home/Login";
import HomePage from "./pages/Home/HomePage";





 function App() {
  const [quantities,setQuantities]=useState({})
  const increment =(id)=>{setQuantities (prev=>({
    ...prev,
    [id]:(prev[id]||0)+1,
  }))}
  const decrement =(id)=>{
setQuantities(prev=>{
  const current= prev[id]||0;
  if(current<=1){
     const updated = {...prev};
    delete updated [id];
    return updated;
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
    <Navbar totalCartCount={totalCartCount}/>
    <ScrollToTop/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route
      path="/"
      element={
        <HomePage
        quantities={quantities}
        increment={increment }
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
        increment={increment }
        decrement={decrement}
        totalCartCount={totalCartCount}
        />
      }
      />
      <Route
      path="/subcategory/:categoryId"
      element={
        <SubCategoryPage
        quantities={quantities}
        increment={increment }
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
        increment={increment }
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
    <Footer/>
    </>
  )
}
export default App
