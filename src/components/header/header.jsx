import {React,useState} from "react"
import Cart from "../cart/Cart";
import "./header.css"


const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className="navbar navbar-light bg-light justify-content-between header">
      <a className="navbar-brand">ReactMeal</a>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={openModal}>cart<span>{props.cart.length}</span></button>
      {modal && <Cart data = {props.cart} opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
    </nav>
  );
};
export default Header;

