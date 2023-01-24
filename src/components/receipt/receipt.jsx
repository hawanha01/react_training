import { useContext } from "react";
import CartData from "../../store/store";
import "./receipt.css"
const Receipt = () => {
  const allData = useContext(CartData);
  return (
    <div className="mainRecipt container">
      <ul style={{listStyleType: "none"}}>
        {allData.items.map(item => {
          return <li className="item">
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <h5>amonut:{item.count}</h5>
            </div>
            <div>
              <p>total price: {item.price * item.count}</p>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Receipt;
