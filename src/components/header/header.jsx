import {React,useState, useContext} from "react";
import { Link } from 'react-router-dom';
import Cart from "../cart/Cart";
import CartData from "../../store/store";
import "./header.css";


const Header = (props) => {
  const allItems = useContext(CartData);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className="header">
      <div>
        <Link to="/all-meal" className="heading">ReactMeals</Link>
        <Link to="/new-meal" style={{color: "white"}}>Add Meal</Link>
      </div>
      <button className="headerButton" onClick={openModal}>
        <div className="Cart"><b><i className="fa fa-shopping-cart" style={{fontSize: "24px", padding: "0.25rem"}}/>  Your Cart</b></div>
        <div className="countBox">{allItems.totalItems}</div>
      </button>

      {modal && <Cart opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
    </nav>
  );
};

export default Header;

