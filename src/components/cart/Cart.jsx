import { React, useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CartData from "../../store/store";
import "./cart.css"
import { Link } from "react-router-dom";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Cart = (props) => {
  const allData = useContext(CartData);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    console.log("useEffect")
    allData.items.map(item => {
      sum += parseFloat(parseFloat(item.count) * parseFloat(item.price));
    })
    setTotalPrice(sum);
  },[])

  const handleDecrement = (item) => {
    item.count = item.count - 1;
    allData.decrement(item);
    setTotalPrice(totalPrice - item.price);
  }

  const handleIncrement = (item) => {
    if (item.count + 1 < 6) {
      item.count = item.count + 1;
      allData.addItem(item);
      setTotalPrice(totalPrice + item.price);
    }
  }

  return (
    <Modal className="modalClass"
      open={props.opened}
      onClose={props.closed}
    >
      <Box sx={style}>
        <div className="cartMain">
          <div>
            <ul>
              {allData.items.map((item, index) => {
                return (<li key={index} style={li_style} className="listItem">
                  <div>
                    <h5>{item.name}</h5>
                    <h4>{item.price}</h4>
                  </div>
                  <div className="valueShower">
                    x{item.count}
                  </div>
                  <div>
                    <button className="amountChanger" onClick={() => handleDecrement(item)}>-</button>
                    <button className="amountChanger" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                </li>)
              })}
            </ul>
          </div>
          <div className="cartFooter">
            <div><h4><b>Total Amount</b></h4></div>
            <div><h4><b>{totalPrice}</b></h4></div>
          </div>
        </div>
        <button className="cancel" onClick={props.closedModal} type="button">Close</button>
        {allData.totalItems > 0 ? <button className="order" onClick={props.closedModal}><Link to='/receipt'>Order</Link></button> : null}
      </Box>
    </Modal>
  );
}
const li_style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItem: "center"
}
export default Cart;
