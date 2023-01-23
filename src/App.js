import './App.css';
import Header from './components/header/header';
import Image from './components/image/image';
import Summary from './components/summary/summary';
import Menu from './components/Menu/menu';
import React from 'react';

function App() {
  // const [cart, setCart] = useState([]);
  // const handleCart = (data) => {
  //   setCart(data)
  // };

  return (
    <div className="App">
      {/* <Header cart = {cart} setCart = {handleCart}/>
      <Image className="image"/>
      <Summary/>
      <Menu setCart = {handleCart} cart = {cart}/> */}
      <Header/>
      <Image className="image"/>
      <Summary/>
      <Menu/>
    </div>
  );
}


export default App;
