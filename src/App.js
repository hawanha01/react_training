import './App.css';
import Header from './components/header/header';
import Image from './components/image/image';
import Summary from './components/summary/summary';
import Menu from './components/Menu/menu';
import React from 'react';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState([]);
  const handleCart = (data) => {
    setCart(data)
  };
  // console.log("cart:", cart)
  return (
    <div className="App">
      <Header cart = {cart} className="header"/>
      <Image style={ImageStyle}/>
      <Summary/>
      <Menu setCart = {handleCart} cart = {cart}/>
    </div>
  );
}
const HeaderStyle = {
  position: "fixed",
  top: 0,
  left: 0
}
const ImageStyle = {
  marginTop: "30px"
}

export default App;
