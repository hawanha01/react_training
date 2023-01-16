import React, {useState } from 'react';

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
    <li style={style}>
      <div>
        <h3><b>{props.item.name}</b></h3>
        <p>{props.item.description}</p>
        <h5>{props.item.price}</h5>
      </div>
      <div>
          Amount <input type = "number" step = "1" max = "5" min = "1" value={count} onChange={handleInputChange} placeholder = {count}/><br/>
          <button onClick={handleSubmit}>Add</button>
      </div>
    </li>
  )
}
const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItem: "center"
}
export default Item;
