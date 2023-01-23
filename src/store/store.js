import { createContext, useState } from "react";

const CartData = createContext({
  items: [],
  totalItems: 0,
  addItem: (item) => { },
  decrement: (item) => { }
})

export const AllDataProvider = (props) => {
  const [data, setData] = useState([]);

  const addItemHandler = (item) => {
    if (data.find(i => i.id === item.id)) {
      let new_array = data.filter(i => i.id !== item.id);
      new_array.push(item);
      setData(new_array);
    } else {
      setData([...data, item]);
    }
  }

  const handleDecrement = (item) => {
    let new_array = data.filter(i => i.id !== item.id);
    if (item.count > 0) {
      new_array.push(item);
      setData(new_array);
    } else {
      setData(new_array);
    }
  }

  const context = {
    items: data,
    totalItems: data.length,
    addItem: addItemHandler,
    decrement: handleDecrement
  }

  return (
    <CartData.Provider value={context}>
      {props.children}
    </CartData.Provider>
  )
}
export default CartData;
