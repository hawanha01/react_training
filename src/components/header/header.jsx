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

  const handleCart = (data) => {
    let array = props.cart
    let new_array = array.filter(i => i.id !== data.id);
    if (data.count > 0){
      new_array.push(data)
    }
    props.setCart(new_array);
  }


  return (
    <nav className="header">
      <div>
        <a><span className="heading">ReactMeals</span></a>
      </div>
      <button className="headerButton" onClick={openModal}>
        <div className="Cart"><b><i className="fa fa-shopping-cart" style={{fontSize: "24px", padding: "0.25rem"}}/>  Your Cart</b></div>
        <div className="countBox">{props.cart.length}</div>
      </button>
      {modal && <Cart data = {props.cart}  setCart = {handleCart} opened = {handleOpen} closed = {handleClose} closedModal = {closeModal}/>}
    </nav>
  );
};

export default Header;

