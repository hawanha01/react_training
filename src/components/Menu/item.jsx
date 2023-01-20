import React, {useState } from 'react';
import "./item.css"

const Item = (props) => {
  const [count, setCount] = useState(1);
  const handleInputChange = (event) => {
    setCount(event.target.value);
  }

  const handleSubmit = () => {
    let item = props.item;
    item.count = count;
    return props.setCart(item)
  }

  return(
    <li className="listItem">
      <div>
        <h3><b>{props.item.name}</b></h3>
        <p><i>{props.item.description}</i></p>
        <h5 className='price'>{props.item.price}</h5>
      </div>
      <div>
          <b>Amount</b> <input type = "number" step = "1" max = "5" min = "1" value={count} onChange={handleInputChange} placeholder = {count}/><br/>
          <button className='addButton' onClick={handleSubmit}>Add</button>
      </div>
    </li>
  )
}

export default Item;
