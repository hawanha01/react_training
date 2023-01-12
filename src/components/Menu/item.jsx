import {React, useState} from "react";
const Item = (props) => {
  const [count, setCount] = useState(1);
  return(
    <div>
      <li style={style}>
        <div>
          <h3><b>{props.item.name}</b></h3>
          <p>{props.item.description}</p>
          <h5>{props.item.price}</h5>
        </div>
        <div>
          <form>
            Amount <input type = "number" step = "1" max = "5" min = "1" placeholder = {count}/><br/>
            <button>Add</button>
          </form>
        </div>
      </li>
    </div>
  )
}
const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItem: "center"
}
export default Item;
