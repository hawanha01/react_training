import React, { useState, useContext } from 'react';
import CartData from '../../store/store';
import "./item.css"

const Item = (props) => {
  const allItems = useContext(CartData);
  const [count, setCount] = useState(1);

  const handleInputChange = (event) => {
    setCount(parseInt(event.target.value));
  }

  const handleSubmit = () => {
    let item = props.item;
    item.count = count;
    allItems.addItem(item);
  }

  return (
    <li className="listItem">
      <div>
        <h3><b>{props.item.name}</b></h3>
        <p><i>{props.item.description}</i></p>
        <h5 className='price'>{props.item.price}</h5>
      </div>
      <div>
        <b>Amount</b> <input type="number" step="1" max="5" min="1" value={count} onChange={handleInputChange} placeholder={count} /><br />
        <button className='addButton' onClick={handleSubmit}>Add</button>
      </div>
    </li>
  )
}

export default Item;
